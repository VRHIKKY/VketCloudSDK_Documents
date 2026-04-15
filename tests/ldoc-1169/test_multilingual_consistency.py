#!/usr/bin/env python3
"""
Test cases for LDOC-1169: Multilingual Consistency Tests
TDD approach - these tests should fail initially
"""

import os
import re
import pytest
from pathlib import Path


class TestMultilingualConsistency:
    """Test consistency between Japanese and English documentation"""
    
    BASE_PATH = Path("docs")
    VERSION = "16.5.7"
    
    def get_file_pairs(self):
        """Get pairs of Japanese and English files"""
        return [
            (
                self.BASE_PATH / "releasenote" / f"releasenote-{self.VERSION.replace('.', '.')}.ja.md",
                self.BASE_PATH / "releasenote" / f"releasenote-{self.VERSION.replace('.', '.')}.en.md"
            ),
            (
                self.BASE_PATH / "changelog" / f"changelog-{self.VERSION.replace('.', '.')}.ja.md", 
                self.BASE_PATH / "changelog" / f"changelog-{self.VERSION.replace('.', '.')}.en.md"
            )
        ]
    
    def test_both_language_files_exist(self):
        """Test that both Japanese and English files exist"""
        file_pairs = self.get_file_pairs()
        
        for ja_file, en_file in file_pairs:
            assert ja_file.exists(), f"Japanese file missing: {ja_file}"
            assert en_file.exists(), f"English file missing: {en_file}"
    
    def test_similar_header_structure(self):
        """Test that header structure is similar between languages"""
        file_pairs = self.get_file_pairs()
        
        for ja_file, en_file in file_pairs:
            if not (ja_file.exists() and en_file.exists()):
                pytest.skip(f"File pair not found: {ja_file.name}")
                
            ja_content = ja_file.read_text(encoding='utf-8')
            en_content = en_file.read_text(encoding='utf-8')
            
            # Extract header levels
            ja_headers = re.findall(r'^(#+)', ja_content, re.MULTILINE)
            en_headers = re.findall(r'^(#+)', en_content, re.MULTILINE)
            
            # Should have similar number of headers
            header_diff = abs(len(ja_headers) - len(en_headers))
            assert header_diff <= 2, f"Header count mismatch in {ja_file.name}: JA={len(ja_headers)}, EN={len(en_headers)}"
            
            # Header levels should be similar
            ja_levels = [len(h) for h in ja_headers]
            en_levels = [len(h) for h in en_headers]
            
            if ja_levels and en_levels:
                assert max(ja_levels) == max(en_levels), f"Max header level mismatch in {ja_file.name}"
    
    def test_no_untranslated_content(self):
        """Test that English files don't contain Japanese text and vice versa"""
        file_pairs = self.get_file_pairs()
        
        # Japanese character patterns
        ja_pattern = re.compile(r'[ひらがなカタカナ漢字]|[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]')
        
        for ja_file, en_file in file_pairs:
            if not (ja_file.exists() and en_file.exists()):
                continue
                
            ja_content = ja_file.read_text(encoding='utf-8')
            en_content = en_file.read_text(encoding='utf-8')
            
            # English file should not contain significant Japanese text
            # (Allow some Japanese in code examples or proper nouns)
            ja_matches_in_en = ja_pattern.findall(en_content)
            if ja_matches_in_en:
                # Allow up to 10% Japanese characters for proper nouns, etc.
                ja_char_ratio = len(ja_matches_in_en) / len(en_content.replace(' ', ''))
                assert ja_char_ratio < 0.1, f"Too much Japanese text in English file: {en_file.name}"
    
    def test_consistent_version_references(self):
        """Test that version references are consistent"""
        file_pairs = self.get_file_pairs()
        
        for ja_file, en_file in file_pairs:
            if not (ja_file.exists() and en_file.exists()):
                continue
                
            ja_content = ja_file.read_text(encoding='utf-8')
            en_content = en_file.read_text(encoding='utf-8')
            
            # Extract version numbers
            version_pattern = r'(\d+\.\d+\.\d+)'
            ja_versions = set(re.findall(version_pattern, ja_content))
            en_versions = set(re.findall(version_pattern, en_content))
            
            # Should reference the same versions
            assert self.VERSION in ja_versions, f"Target version {self.VERSION} not found in {ja_file.name}"
            assert self.VERSION in en_versions, f"Target version {self.VERSION} not found in {en_file.name}"
            
            # Major versions should be consistent
            ja_major = {v.split('.')[0] for v in ja_versions}
            en_major = {v.split('.')[0] for v in en_versions}
            common_major = ja_major & en_major
            
            assert len(common_major) > 0, f"No common major versions between {ja_file.name} and {en_file.name}"
    
    def test_consistent_link_structure(self):
        """Test that internal links have consistent structure"""
        file_pairs = self.get_file_pairs()
        
        link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
        
        for ja_file, en_file in file_pairs:
            if not (ja_file.exists() and en_file.exists()):
                continue
                
            ja_content = ja_file.read_text(encoding='utf-8')
            en_content = en_file.read_text(encoding='utf-8')
            
            ja_links = link_pattern.findall(ja_content)
            en_links = link_pattern.findall(en_content)
            
            # Extract internal links (relative paths)
            ja_internal = [url for text, url in ja_links if not url.startswith(('http', 'mailto:'))]
            en_internal = [url for text, url in en_links if not url.startswith(('http', 'mailto:'))]
            
            # Should have similar number of internal links
            if ja_internal or en_internal:
                link_diff = abs(len(ja_internal) - len(en_internal))
                assert link_diff <= 3, f"Internal link count mismatch in {ja_file.name}: JA={len(ja_internal)}, EN={len(en_internal)}"
    
    def test_file_encoding_consistency(self):
        """Test that all files use consistent UTF-8 encoding"""
        file_pairs = self.get_file_pairs()
        
        for ja_file, en_file in file_pairs:
            if not (ja_file.exists() and en_file.exists()):
                continue
            
            # Try to read as UTF-8 (should not raise exception)
            try:
                ja_content = ja_file.read_text(encoding='utf-8')
                en_content = en_file.read_text(encoding='utf-8')
                
                # Files should not be empty
                assert len(ja_content.strip()) > 0, f"Japanese file is empty: {ja_file.name}"
                assert len(en_content.strip()) > 0, f"English file is empty: {en_file.name}"
                
            except UnicodeDecodeError as e:
                pytest.fail(f"Encoding error in file pair {ja_file.name}: {e}")
    
    def test_mkdocs_navigation_updated(self):
        """Test that mkdocs.yml navigation is updated for new files"""
        mkdocs_file = Path("mkdocs.yml")
        
        if not mkdocs_file.exists():
            pytest.skip("mkdocs.yml not found")
            
        mkdocs_content = mkdocs_file.read_text(encoding='utf-8')
        
        # Check if version appears in navigation
        version_ref = self.VERSION.replace('.', '.')  # Make sure dots are literal
        
        # Should contain references to the new version files
        expected_patterns = [
            f"releasenote-{version_ref}",
            f"changelog-{version_ref}"
        ]
        
        for pattern in expected_patterns:
            assert pattern in mkdocs_content, f"Navigation not updated for {pattern}"


if __name__ == '__main__':
    pytest.main([__file__, '-v'])