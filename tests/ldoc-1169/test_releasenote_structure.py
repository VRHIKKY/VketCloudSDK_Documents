#!/usr/bin/env python3
"""
Test cases for LDOC-1169: SDK 16.5.7 Release Note Structure
TDD approach - these tests should fail initially
"""

import os
import re
import pytest
from pathlib import Path


class TestReleaseNoteStructure:
    """Test release note file structure and content"""
    
    BASE_PATH = Path("docs/releasenote")
    VERSION = "16.5.7"
    
    def test_japanese_releasenote_exists(self):
        """Test that Japanese release note file exists"""
        file_path = self.BASE_PATH / f"releasenote-{self.VERSION.replace('.', '.')}.ja.md"
        assert file_path.exists(), f"Japanese release note not found: {file_path}"
    
    def test_english_releasenote_exists(self):
        """Test that English release note file exists"""
        file_path = self.BASE_PATH / f"releasenote-{self.VERSION.replace('.', '.')}.en.md"
        assert file_path.exists(), f"English release note not found: {file_path}"
    
    def test_japanese_releasenote_has_required_sections(self):
        """Test Japanese release note has required sections"""
        file_path = self.BASE_PATH / f"releasenote-{self.VERSION.replace('.', '.')}.ja.md"
        
        if not file_path.exists():
            pytest.skip("Japanese release note file not found")
            
        content = file_path.read_text(encoding='utf-8')
        
        # Required sections for Japanese release notes
        required_sections = [
            r'# .*リリースノート',  # Allow flexible header format
            r'## 概要',
            r'## 新機能',
            r'## 改善',
            r'## バグ修正',
            r'## 既知の問題'
        ]
        
        for section in required_sections:
            assert re.search(section, content, re.MULTILINE), f"Required section not found: {section}"
    
    def test_english_releasenote_has_required_sections(self):
        """Test English release note has required sections"""
        file_path = self.BASE_PATH / f"releasenote-{self.VERSION.replace('.', '.')}.en.md"
        
        if not file_path.exists():
            pytest.skip("English release note file not found")
            
        content = file_path.read_text(encoding='utf-8')
        
        # Required sections for English release notes
        required_sections = [
            r'# .*Release Notes',  # Allow flexible header format
            r'## Overview',
            r'## New Features',
            r'## Improvements',
            r'## Bug Fixes',
            r'## Known Issues'
        ]
        
        for section in required_sections:
            assert re.search(section, content, re.MULTILINE), f"Required section not found: {section}"
    
    def test_version_number_consistency(self):
        """Test version numbers are consistent in both language files"""
        ja_file = self.BASE_PATH / f"releasenote-{self.VERSION.replace('.', '.')}.ja.md"
        en_file = self.BASE_PATH / f"releasenote-{self.VERSION.replace('.', '.')}.en.md"
        
        if not (ja_file.exists() and en_file.exists()):
            pytest.skip("Release note files not found")
        
        ja_content = ja_file.read_text(encoding='utf-8')
        en_content = en_file.read_text(encoding='utf-8')
        
        version_pattern = r'(?:SDK|version)\s*([0-9]+\.[0-9]+\.[0-9]+)'
        
        ja_versions = re.findall(version_pattern, ja_content, re.IGNORECASE)
        en_versions = re.findall(version_pattern, en_content, re.IGNORECASE)
        
        # Both should contain the target version
        assert self.VERSION in ja_versions, f"Version {self.VERSION} not found in Japanese file"
        assert self.VERSION in en_versions, f"Version {self.VERSION} not found in English file"
    
    def test_markdown_syntax_valid(self):
        """Test that markdown syntax is valid"""
        for lang in ['ja', 'en']:
            file_path = self.BASE_PATH / f"releasenote-{self.VERSION.replace('.', '.')}.{lang}.md"
            
            if not file_path.exists():
                continue
                
            content = file_path.read_text(encoding='utf-8')
            
            # Check for basic markdown issues
            assert not re.search(r'#{7,}', content), f"Too many header levels in {lang} file"
            assert not re.search(r'\[.*\]\(\s*\)', content), f"Empty links found in {lang} file"
            
            # Check for balanced brackets
            open_brackets = content.count('[')
            close_brackets = content.count(']')
            assert open_brackets == close_brackets, f"Unbalanced brackets in {lang} file"
    
    def test_date_format_consistency(self):
        """Test date format consistency across language files"""
        date_patterns = {
            'ja': r'(\d{4})年(\d{1,2})月(\d{1,2})日',
            'en': r'(\w+)\s+(\d{1,2}),\s*(\d{4})'
        }
        
        for lang, pattern in date_patterns.items():
            file_path = self.BASE_PATH / f"releasenote-{self.VERSION.replace('.', '.')}.{lang}.md"
            
            if not file_path.exists():
                continue
                
            content = file_path.read_text(encoding='utf-8')
            dates = re.findall(pattern, content)
            
            assert len(dates) > 0, f"No valid dates found in {lang} file"


if __name__ == '__main__':
    pytest.main([__file__, '-v'])