#!/usr/bin/env python3
"""
Multi-language synchronization checker for VKC Item Field documentation.
Compares Japanese and English versions for structural consistency.
"""

import os
import re
from pathlib import Path
from typing import List, Dict, Set, Optional, Tuple, Any
from dataclasses import dataclass, field


@dataclass
class DocumentStructure:
    """Represents the structure of a markdown document."""
    headers: List[Dict[str, Any]] = field(default_factory=list)
    tables: List[Dict[str, Any]] = field(default_factory=list)
    links: List[str] = field(default_factory=list)
    images: List[str] = field(default_factory=list)
    
    def add_header(self, level: int, text: str) -> None:
        """Add a header to the structure."""
        self.headers.append({'level': level, 'text': text.strip()})
    
    def add_table(self, headers: List[str], rows: List[List[str]]) -> None:
        """Add a table to the structure."""
        self.tables.append({
            'headers': headers,
            'rows': rows,
            'column_count': len(headers),
            'row_count': len(rows)
        })


@dataclass
class SyncCheckResult:
    """Results from multi-language synchronization checking."""
    structural_issues: List[Dict[str, Any]] = field(default_factory=list)
    content_mismatches: List[Dict[str, Any]] = field(default_factory=list)
    missing_sections: List[Dict[str, Any]] = field(default_factory=list)
    table_structure_match: bool = True
    parameter_count_match: bool = True
    method_count_match: bool = True
    method_links_match: bool = True
    
    def add_structural_issue(self, issue_type: str, section: str, ja_value: Any, en_value: Any) -> None:
        """Add a structural issue to the results."""
        self.structural_issues.append({
            'type': issue_type,
            'section': section,
            'ja_value': ja_value,
            'en_value': en_value
        })
    
    def add_content_mismatch(self, mismatch_type: str, description: str, details: str) -> None:
        """Add a content mismatch to the results."""
        self.content_mismatches.append({
            'type': mismatch_type,
            'description': description,
            'details': details
        })
    
    def add_missing_section(self, section: str, missing_in: str) -> None:
        """Add information about a missing section."""
        self.missing_sections.append({
            'section': section,
            'missing_in': missing_in
        })
    
    def generate_report(self) -> str:
        """Generate a formatted synchronization report."""
        report = ["Synchronization Report", "=" * 22, ""]
        
        # Summary
        total_issues = len(self.structural_issues) + len(self.content_mismatches) + len(self.missing_sections)
        report.append(f"Total Issues Found: {total_issues}")
        report.append("")
        
        # Structural issues
        if self.structural_issues:
            report.append("Structural Issues:")
            for issue in self.structural_issues:
                report.append(f"  - {issue['type']} in {issue['section']}")
                report.append(f"    Japanese: {issue['ja_value']}")
                report.append(f"    English: {issue['en_value']}")
            report.append("")
        
        # Content mismatches
        if self.content_mismatches:
            report.append("Content Mismatches:")
            for mismatch in self.content_mismatches:
                report.append(f"  - {mismatch['type']}: {mismatch['description']}")
                report.append(f"    Details: {mismatch['details']}")
            report.append("")
        
        # Missing sections
        if self.missing_sections:
            report.append("Missing Sections:")
            for missing in self.missing_sections:
                report.append(f"  - '{missing['section']}' missing in {missing['missing_in']} version")
            report.append("")
        
        # Status indicators
        report.append("Sync Status:")
        report.append(f"  Table Structure Match: {'✓' if self.table_structure_match else '✗'}")
        report.append(f"  Parameter Count Match: {'✓' if self.parameter_count_match else '✗'}")
        report.append(f"  Method Count Match: {'✓' if self.method_count_match else '✗'}")
        report.append(f"  Method Links Match: {'✓' if self.method_links_match else '✗'}")
        
        return "\n".join(report)


class MultiLangSyncChecker:
    """Multi-language synchronization checker for documentation."""
    
    def __init__(self):
        """Initialize the sync checker."""
        # Regex patterns for parsing markdown
        self.header_pattern = re.compile(r'^(#{1,6})\s+(.+)$', re.MULTILINE)
        self.table_pattern = re.compile(r'^\|(.+)\|$', re.MULTILINE)
        self.link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
        self.image_pattern = re.compile(r'!\[([^\]]*)\]\(([^)]+)\)')
    
    def extract_structure(self, file_path: str) -> DocumentStructure:
        """Extract document structure from a markdown file."""
        structure = DocumentStructure()
        
        if not os.path.exists(file_path):
            return structure
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception:
            return structure
        
        # Extract headers
        for match in self.header_pattern.finditer(content):
            level = len(match.group(1))
            text = match.group(2)
            structure.add_header(level, text)
        
        # Extract tables
        lines = content.split('\n')
        i = 0
        while i < len(lines):
            line = lines[i].strip()
            if line.startswith('|') and line.endswith('|'):
                # Found potential table header
                headers = [col.strip() for col in line.split('|')[1:-1]]
                
                # Check if next line is separator
                if i + 1 < len(lines) and '---' in lines[i + 1]:
                    # Extract table rows
                    rows = []
                    i += 2  # Skip separator line
                    
                    while i < len(lines) and lines[i].strip().startswith('|'):
                        row_line = lines[i].strip()
                        if row_line.endswith('|'):
                            row_data = [col.strip() for col in row_line.split('|')[1:-1]]
                            if len(row_data) == len(headers):
                                rows.append(row_data)
                        i += 1
                    
                    structure.add_table(headers, rows)
                    continue
            i += 1
        
        # Extract links
        for match in self.link_pattern.finditer(content):
            structure.links.append(match.group(2))
        
        # Extract images
        for match in self.image_pattern.finditer(content):
            structure.images.append(match.group(2))
        
        return structure
    
    def compare_documents(self, ja_file: str, en_file: str) -> SyncCheckResult:
        """Compare Japanese and English documents for synchronization."""
        result = SyncCheckResult()
        
        ja_structure = self.extract_structure(ja_file)
        en_structure = self.extract_structure(en_file)
        
        # Compare header structure
        self._compare_headers(ja_structure, en_structure, result)
        
        # Compare table structure
        self._compare_tables(ja_structure, en_structure, result)
        
        # Compare links and images
        self._compare_links_images(ja_structure, en_structure, result)
        
        return result
    
    def _compare_headers(self, ja_struct: DocumentStructure, en_struct: DocumentStructure, result: SyncCheckResult) -> None:
        """Compare header structures between documents."""
        ja_headers = ja_struct.headers
        en_headers = en_struct.headers
        
        # Check header count
        if len(ja_headers) != len(en_headers):
            result.add_structural_issue(
                "Header count mismatch",
                "Document structure",
                len(ja_headers),
                len(en_headers)
            )
        
        # Check header levels
        min_headers = min(len(ja_headers), len(en_headers))
        for i in range(min_headers):
            if ja_headers[i]['level'] != en_headers[i]['level']:
                result.add_structural_issue(
                    "Header level mismatch",
                    f"Header {i+1}",
                    ja_headers[i]['level'],
                    en_headers[i]['level']
                )
        
        # Check for missing sections
        ja_header_texts = {h['text'].lower() for h in ja_headers}
        en_header_texts = {h['text'].lower() for h in en_headers}
        
        for ja_header in ja_struct.headers:
            # Simple check - this could be improved with better translation mapping
            if ja_header['text'] not in [h['text'] for h in en_struct.headers]:
                result.add_missing_section(ja_header['text'], 'en')
    
    def _compare_tables(self, ja_struct: DocumentStructure, en_struct: DocumentStructure, result: SyncCheckResult) -> None:
        """Compare table structures between documents."""
        ja_tables = ja_struct.tables
        en_tables = en_struct.tables
        
        if len(ja_tables) != len(en_tables):
            result.table_structure_match = False
            result.add_content_mismatch(
                "Table count mismatch",
                "Different number of tables",
                f"Japanese: {len(ja_tables)}, English: {len(en_tables)}"
            )
            return
        
        # Compare individual tables
        for i, (ja_table, en_table) in enumerate(zip(ja_tables, en_tables)):
            if ja_table['column_count'] != en_table['column_count']:
                result.table_structure_match = False
                result.add_content_mismatch(
                    "Table structure",
                    f"Table {i+1} column count mismatch",
                    f"Japanese: {ja_table['column_count']}, English: {en_table['column_count']}"
                )
            
            if ja_table['row_count'] != en_table['row_count']:
                result.parameter_count_match = False
                result.add_content_mismatch(
                    "Table content",
                    f"Table {i+1} row count mismatch",
                    f"Japanese: {ja_table['row_count']}, English: {en_table['row_count']}"
                )
    
    def _compare_links_images(self, ja_struct: DocumentStructure, en_struct: DocumentStructure, result: SyncCheckResult) -> None:
        """Compare links and images between documents."""
        # Compare image counts
        if len(ja_struct.images) != len(en_struct.images):
            result.add_content_mismatch(
                "Image count mismatch",
                "Different number of images",
                f"Japanese: {len(ja_struct.images)}, English: {len(en_struct.images)}"
            )
        
        # Check if images are the same (should be identical for same component)
        ja_images = set(ja_struct.images)
        en_images = set(en_struct.images)
        
        if ja_images != en_images:
            missing_in_en = ja_images - en_images
            missing_in_ja = en_images - ja_images
            
            details = []
            if missing_in_en:
                details.append(f"Missing in English: {missing_in_en}")
            if missing_in_ja:
                details.append(f"Missing in Japanese: {missing_in_ja}")
            
            result.add_content_mismatch(
                "Image reference mismatch",
                "Different images referenced",
                "; ".join(details)
            )
    
    def check_structure_sync(self, ja_file: str, en_file: str) -> SyncCheckResult:
        """Quick structure synchronization check."""
        return self.compare_documents(ja_file, en_file)
    
    def check_parameter_table_sync(self, ja_file: str, en_file: str) -> SyncCheckResult:
        """Check parameter table synchronization specifically."""
        result = self.compare_documents(ja_file, en_file)
        # The table comparison is already done in compare_documents
        return result
    
    def check_api_method_sync(self, ja_file: str, en_file: str) -> SyncCheckResult:
        """Check HeliScript API method list synchronization."""
        result = self.compare_documents(ja_file, en_file)
        
        # Extract HeliScript method links specifically
        ja_struct = self.extract_structure(ja_file)
        en_struct = self.extract_structure(en_file)
        
        # Count HeliScript links (links to ../hs/hs_class_item.md)
        ja_hs_links = [link for link in ja_struct.links if 'hs_class_item.md' in link]
        en_hs_links = [link for link in en_struct.links if 'hs_class_item.md' in link]
        
        if len(ja_hs_links) != len(en_hs_links):
            result.method_count_match = False
            result.add_content_mismatch(
                "HeliScript method count",
                "Different number of HeliScript API methods",
                f"Japanese: {len(ja_hs_links)}, English: {len(en_hs_links)}"
            )
        
        # Check if method links match (should be identical)
        if set(ja_hs_links) != set(en_hs_links):
            result.method_links_match = False
            result.add_content_mismatch(
                "HeliScript method links",
                "Different HeliScript API method references",
                "Method links do not match between versions"
            )
        
        return result


# Convenience function
def check_vkc_item_field_sync() -> SyncCheckResult:
    """Check synchronization of VKC Item Field documentation."""
    checker = MultiLangSyncChecker()
    ja_file = "docs/VKCComponents/VKCItemField.ja.md"
    en_file = "docs/VKCComponents/VKCItemField.en.md"
    
    if not (os.path.exists(ja_file) and os.path.exists(en_file)):
        result = SyncCheckResult()
        if not os.path.exists(ja_file):
            result.add_content_mismatch("Missing file", "Japanese version not found", ja_file)
        if not os.path.exists(en_file):
            result.add_content_mismatch("Missing file", "English version not found", en_file)
        return result
    
    return checker.compare_documents(ja_file, en_file)


if __name__ == "__main__":
    # CLI interface
    import sys
    
    if len(sys.argv) >= 3:
        ja_file = sys.argv[1]
        en_file = sys.argv[2]
        checker = MultiLangSyncChecker()
        result = checker.compare_documents(ja_file, en_file)
        print(result.generate_report())
    else:
        result = check_vkc_item_field_sync()
        print(result.generate_report())