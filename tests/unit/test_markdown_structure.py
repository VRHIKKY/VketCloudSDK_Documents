"""
Unit tests for markdown structure validation
Tests for LDOC-1170: SDK16.5.7 release note differences QA
"""
import pytest
import os
import re
from pathlib import Path


class TestMarkdownStructure:
    """Test markdown structure validation for release notes"""
    
    def setup_method(self):
        """Set up test fixtures"""
        self.docs_dir = Path(__file__).parent.parent.parent / "docs" / "releasenote"
        self.target_version = "16.5"
        self.ja_file = self.docs_dir / f"releasenote-{self.target_version}.ja.md"
        self.en_file = self.docs_dir / f"releasenote-{self.target_version}.en.md"
    
    @pytest.mark.unit
    def test_release_note_files_exist(self):
        """Test that both Japanese and English release note files exist"""
        # This test will initially fail - that's expected in TDD
        assert self.ja_file.exists(), f"Japanese release note file not found: {self.ja_file}"
        assert self.en_file.exists(), f"English release note file not found: {self.en_file}"
    
    @pytest.mark.unit
    def test_markdown_syntax_validation_ja(self):
        """Test Japanese release note markdown syntax"""
        if not self.ja_file.exists():
            pytest.skip("Japanese file does not exist yet")
        
        content = self.ja_file.read_text(encoding='utf-8')
        
        # Test basic markdown structure
        assert content.startswith('#'), "File should start with a header"
        
        # Test for valid headers (no missing spaces after #)
        header_pattern = r'^#+\s+.+'
        headers = re.findall(r'^#+.*$', content, re.MULTILINE)
        for header in headers:
            assert re.match(header_pattern, header), f"Invalid header format: {header}"
    
    @pytest.mark.unit
    def test_markdown_syntax_validation_en(self):
        """Test English release note markdown syntax"""
        if not self.en_file.exists():
            pytest.skip("English file does not exist yet")
        
        content = self.en_file.read_text(encoding='utf-8')
        
        # Test basic markdown structure
        assert content.startswith('#'), "File should start with a header"
        
        # Test for valid headers (no missing spaces after #)
        header_pattern = r'^#+\s+.+'
        headers = re.findall(r'^#+.*$', content, re.MULTILINE)
        for header in headers:
            assert re.match(header_pattern, header), f"Invalid header format: {header}"
    
    @pytest.mark.unit
    def test_version_number_consistency(self):
        """Test that version numbers are consistent between files"""
        if not (self.ja_file.exists() and self.en_file.exists()):
            pytest.skip("Both files do not exist yet")
        
        ja_content = self.ja_file.read_text(encoding='utf-8')
        en_content = self.en_file.read_text(encoding='utf-8')
        
        # Extract version numbers from content
        version_pattern = r'[Vv]ersion\s*(\d+\.\d+(?:\.\d+)?)'
        
        ja_versions = re.findall(version_pattern, ja_content)
        en_versions = re.findall(version_pattern, en_content)
        
        # At least one version should be found
        assert ja_versions or "16.5" in ja_content, "Version number not found in Japanese file"
        assert en_versions or "16.5" in en_content, "Version number not found in English file"
        
        # If versions are explicitly mentioned, they should match
        if ja_versions and en_versions:
            assert ja_versions[0] == en_versions[0], "Version numbers don't match between languages"
    
    @pytest.mark.unit
    def test_header_structure_consistency(self):
        """Test that header structure is consistent between languages"""
        if not (self.ja_file.exists() and self.en_file.exists()):
            pytest.skip("Both files do not exist yet")
        
        ja_content = self.ja_file.read_text(encoding='utf-8')
        en_content = self.en_file.read_text(encoding='utf-8')
        
        # Extract header levels
        ja_headers = re.findall(r'^(#+)', ja_content, re.MULTILINE)
        en_headers = re.findall(r'^(#+)', en_content, re.MULTILINE)
        
        # Both files should have the same number of headers
        assert len(ja_headers) == len(en_headers), "Header count mismatch between languages"
        
        # Header levels should match
        for i, (ja_level, en_level) in enumerate(zip(ja_headers, en_headers)):
            assert len(ja_level) == len(en_level), f"Header level mismatch at position {i}: JA={len(ja_level)}, EN={len(en_level)}"


class TestReleaseNoteContent:
    """Test content-specific validation for release notes"""
    
    def setup_method(self):
        """Set up test fixtures"""
        self.docs_dir = Path(__file__).parent.parent.parent / "docs" / "releasenote"
        self.target_version = "16.5"
        self.ja_file = self.docs_dir / f"releasenote-{self.target_version}.ja.md"
        self.en_file = self.docs_dir / f"releasenote-{self.target_version}.en.md"
    
    @pytest.mark.unit
    def test_required_sections_exist(self):
        """Test that required sections exist in both files"""
        required_sections = ["概要", "新機能", "改善", "バグ修正"]  # Japanese sections
        required_sections_en = ["Overview", "New Features", "Improvements", "Bug Fixes"]  # English sections
        
        if self.ja_file.exists():
            ja_content = self.ja_file.read_text(encoding='utf-8')
            for section in required_sections:
                assert section in ja_content, f"Required section '{section}' not found in Japanese file"
        
        if self.en_file.exists():
            en_content = self.en_file.read_text(encoding='utf-8')
            for section in required_sections_en:
                assert section in en_content, f"Required section '{section}' not found in English file"
    
    @pytest.mark.unit
    def test_no_empty_sections(self):
        """Test that no sections are empty"""
        if not (self.ja_file.exists() and self.en_file.exists()):
            pytest.skip("Files do not exist yet")
        
        for file_path in [self.ja_file, self.en_file]:
            content = file_path.read_text(encoding='utf-8')
            
            # Find all headers with their positions
            headers = list(re.finditer(r'^(#+)\s+(.+)$', content, re.MULTILINE))
            
            for i, header in enumerate(headers):
                header_level = len(header.group(1))
                header_text = header.group(2)
                
                # Get content after this header until next header of same or higher level
                start_pos = header.end()
                next_header_pos = len(content)
                
                # Find next header of same or higher level
                for j in range(i + 1, len(headers)):
                    next_header = headers[j]
                    next_level = len(next_header.group(1))
                    if next_level <= header_level:
                        next_header_pos = next_header.start()
                        break
                
                section_content = content[start_pos:next_header_pos].strip()
                
                # Only check level 2 headers and above for content
                if header_level >= 2:
                    assert section_content, f"Empty section '{header_text}' found in {file_path.name}"