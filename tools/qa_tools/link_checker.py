#!/usr/bin/env python3
"""
Link checker for VKC Item Field documentation.
Validates internal links, image references, and cross-references.
"""

import os
import re
import urllib.parse
from pathlib import Path
from typing import List, Dict, Set, Optional, Tuple
from dataclasses import dataclass, field


@dataclass
class LinkCheckResult:
    """Results from link checking operation."""
    valid_links: List[str] = field(default_factory=list)
    invalid_links: List[Dict[str, str]] = field(default_factory=list)
    missing_files: List[str] = field(default_factory=list)
    broken_images: List[str] = field(default_factory=list)
    internal_links: List[str] = field(default_factory=list)
    image_links: List[str] = field(default_factory=list)
    
    def add_valid_link(self, link: str) -> None:
        """Add a valid link to the results."""
        if link not in self.valid_links:
            self.valid_links.append(link)
    
    def add_invalid_link(self, link: str, reason: str) -> None:
        """Add an invalid link with reason to the results."""
        self.invalid_links.append({'link': link, 'reason': reason})
    
    def get_summary_stats(self) -> Dict[str, float]:
        """Generate summary statistics."""
        total_links = len(self.valid_links) + len(self.invalid_links)
        if total_links == 0:
            return {'total_links': 0, 'valid_links': 0, 'invalid_links': 0, 'success_rate': 100.0}
        
        success_rate = round((len(self.valid_links) / total_links) * 100, 2)
        return {
            'total_links': total_links,
            'valid_links': len(self.valid_links),
            'invalid_links': len(self.invalid_links),
            'success_rate': success_rate
        }
    
    def generate_report(self) -> str:
        """Generate a formatted report."""
        stats = self.get_summary_stats()
        
        report = ["Link Check Report", "=" * 18, ""]
        report.append(f"Total Links: {stats['total_links']}")
        report.append(f"Valid Links: {stats['valid_links']}")
        report.append(f"Invalid Links: {stats['invalid_links']}")
        report.append(f"Success Rate: {stats['success_rate']}%")
        report.append("")
        
        if self.invalid_links:
            report.append("Invalid Links:")
            for invalid in self.invalid_links:
                report.append(f"  - {invalid['link']}: {invalid['reason']}")
            report.append("")
        
        if self.broken_images:
            report.append("Broken Images:")
            for image in self.broken_images:
                report.append(f"  - {image}")
            report.append("")
        
        return "\n".join(report)


class LinkChecker:
    """Link checker for markdown documentation files."""
    
    def __init__(self, base_path: Optional[str] = None):
        """Initialize the link checker."""
        self.base_path = Path(base_path) if base_path else Path.cwd()
        
        # Regex patterns for extracting links
        self.internal_link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
        self.image_pattern = re.compile(r'!\[([^\]]*)\]\(([^)]+)\)')
        self.relative_link_pattern = re.compile(r'^(?!https?://|#)')
    
    def extract_links_from_content(self, content: str) -> Tuple[List[str], List[str]]:
        """Extract internal links and image links from markdown content."""
        internal_links = []
        image_links = []
        
        # Extract image links first (they start with !)
        for match in self.image_pattern.finditer(content):
            url = match.group(2)
            if self.relative_link_pattern.match(url):
                image_links.append(url)
        
        # Extract internal links (exclude images and external URLs)
        for match in self.internal_link_pattern.finditer(content):
            url = match.group(2)
            if self.relative_link_pattern.match(url) and not url.startswith('!'):
                internal_links.append(url)
        
        return internal_links, image_links
    
    def resolve_relative_path(self, base_file_path: str, relative_link: str) -> str:
        """Resolve relative path to absolute path."""
        base_dir = os.path.dirname(base_file_path)
        
        # Handle anchor links (remove fragment)
        link_path = relative_link.split('#')[0] if '#' in relative_link else relative_link
        
        # Skip empty paths (pure anchor links)
        if not link_path:
            return relative_link
        
        resolved_path = os.path.normpath(os.path.join(base_dir, link_path))
        return resolved_path
    
    def check_file_links(self, file_path: str) -> LinkCheckResult:
        """Check all links in a single markdown file."""
        result = LinkCheckResult()
        
        if not os.path.exists(file_path):
            result.add_invalid_link(file_path, "Source file not found")
            return result
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            result.add_invalid_link(file_path, f"Error reading file: {e}")
            return result
        
        # Extract links
        internal_links, image_links = self.extract_links_from_content(content)
        result.internal_links = internal_links
        result.image_links = image_links
        
        # Validate internal links
        for link in internal_links:
            resolved_path = self.resolve_relative_path(file_path, link)
            
            # Skip anchor-only links
            if link.startswith('#'):
                result.add_valid_link(link)
                continue
            
            # Check if the target file exists
            if os.path.exists(resolved_path):
                result.add_valid_link(link)
            else:
                result.add_invalid_link(link, f"Target file not found: {resolved_path}")
                result.missing_files.append(resolved_path)
        
        # Validate image links
        for image in image_links:
            resolved_path = self.resolve_relative_path(file_path, image)
            
            if os.path.exists(resolved_path):
                result.add_valid_link(image)
            else:
                result.add_invalid_link(image, f"Image file not found: {resolved_path}")
                result.broken_images.append(image)
        
        return result
    
    def check_directory_links(self, directory_path: str) -> Dict[str, LinkCheckResult]:
        """Check links in all markdown files in a directory."""
        results = {}
        
        if not os.path.exists(directory_path):
            return results
        
        # Find all markdown files
        for root, dirs, files in os.walk(directory_path):
            for file in files:
                if file.endswith(('.md', '.markdown')):
                    file_path = os.path.join(root, file)
                    relative_path = os.path.relpath(file_path, directory_path)
                    results[relative_path] = self.check_file_links(file_path)
        
        return results


# For backward compatibility and ease of use
def check_vkc_item_field_links() -> Dict[str, LinkCheckResult]:
    """Convenience function to check VKC Item Field documentation links."""
    checker = LinkChecker("docs/")
    results = {}
    
    # Check both language versions
    ja_file = "docs/VKCComponents/VKCItemField.ja.md"
    en_file = "docs/VKCComponents/VKCItemField.en.md"
    
    if os.path.exists(ja_file):
        results['japanese'] = checker.check_file_links(ja_file)
    
    if os.path.exists(en_file):
        results['english'] = checker.check_file_links(en_file)
    
    return results


if __name__ == "__main__":
    # CLI interface for manual testing
    import sys
    
    if len(sys.argv) > 1:
        file_path = sys.argv[1]
        checker = LinkChecker()
        result = checker.check_file_links(file_path)
        print(result.generate_report())
    else:
        results = check_vkc_item_field_links()
        for lang, result in results.items():
            print(f"\n{lang.upper()} Version:")
            print(result.generate_report())