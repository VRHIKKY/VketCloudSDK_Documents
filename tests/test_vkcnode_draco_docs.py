#!/usr/bin/env python3
"""
Test suite for VKC Node Draco documentation
Following TDD approach - tests written before implementation

These tests will initially fail and pass as documentation is implemented.
"""

import os
import re
import pytest
from pathlib import Path

# Base paths
DOCS_ROOT = Path(__file__).parent.parent / "docs"
VKC_COMPONENTS_PATH = DOCS_ROOT / "VKCComponents"
IMG_PATH = VKC_COMPONENTS_PATH / "img"

class TestVKCNodeDracoDocumentation:
    """Test suite for VKC Node Draco documentation files"""
    
    def test_japanese_documentation_exists(self):
        """Test that Japanese documentation file exists"""
        ja_file = VKC_COMPONENTS_PATH / "VKCNodeDraco.ja.md"
        assert ja_file.exists(), f"Japanese documentation file should exist at {ja_file}"
    
    def test_english_documentation_exists(self):
        """Test that English documentation file exists"""
        en_file = VKC_COMPONENTS_PATH / "VKCNodeDraco.en.md"
        assert en_file.exists(), f"English documentation file should exist at {en_file}"
    
    def test_japanese_documentation_structure(self):
        """Test that Japanese documentation has required sections"""
        ja_file = VKC_COMPONENTS_PATH / "VKCNodeDraco.ja.md"
        if not ja_file.exists():
            pytest.skip("Japanese documentation not yet created")
            
        content = ja_file.read_text(encoding='utf-8')
        
        # Required sections for VKC Node components
        required_sections = [
            "# VKC Node Draco",
            "## プロパティ一覧",  # Property List
            "### Dracoの詳細",    # Draco Details section
        ]
        
        for section in required_sections:
            assert section in content, f"Required section '{section}' missing from Japanese documentation"
    
    def test_english_documentation_structure(self):
        """Test that English documentation has required sections"""
        en_file = VKC_COMPONENTS_PATH / "VKCNodeDraco.en.md"
        if not en_file.exists():
            pytest.skip("English documentation not yet created")
            
        content = en_file.read_text(encoding='utf-8')
        
        # Required sections for VKC Node components
        required_sections = [
            "# VKC Node Draco",
            "## Property List",
            "### Draco Details",
        ]
        
        for section in required_sections:
            assert section in content, f"Required section '{section}' missing from English documentation"
    
    def test_property_table_exists_japanese(self):
        """Test that Japanese documentation contains property table"""
        ja_file = VKC_COMPONENTS_PATH / "VKCNodeDraco.ja.md"
        if not ja_file.exists():
            pytest.skip("Japanese documentation not yet created")
            
        content = ja_file.read_text(encoding='utf-8')
        
        # Check for markdown table structure
        assert "| Category | Label |" in content or "| カテゴリ | ラベル |" in content, \
            "Property table header should exist in Japanese documentation"
    
    def test_property_table_exists_english(self):
        """Test that English documentation contains property table"""
        en_file = VKC_COMPONENTS_PATH / "VKCNodeDraco.en.md"
        if not en_file.exists():
            pytest.skip("English documentation not yet created")
            
        content = en_file.read_text(encoding='utf-8')
        
        # Check for markdown table structure
        assert "| Category | Label |" in content, \
            "Property table header should exist in English documentation"
    
    def test_images_referenced_exist(self):
        """Test that all referenced images exist"""
        # Test both files if they exist
        for file_suffix in [".ja.md", ".en.md"]:
            doc_file = VKC_COMPONENTS_PATH / f"VKCNodeDraco{file_suffix}"
            if not doc_file.exists():
                continue
                
            content = doc_file.read_text(encoding='utf-8')
            
            # Find image references
            image_pattern = r'!\[.*?\]\((img/VKCNodeDraco_.*?)\)'
            image_refs = re.findall(image_pattern, content)
            
            for img_ref in image_refs:
                img_path = VKC_COMPONENTS_PATH / img_ref
                assert img_path.exists(), f"Referenced image {img_path} should exist"
    
    def test_external_links_format(self):
        """Test that external links use proper target format"""
        for file_suffix in [".ja.md", ".en.md"]:
            doc_file = VKC_COMPONENTS_PATH / f"VKCNodeDraco{file_suffix}"
            if not doc_file.exists():
                continue
                
            content = doc_file.read_text(encoding='utf-8')
            
            # Find external links (http/https)
            external_links = re.findall(r'\[.*?\]\((https?://.*?)\)', content)
            
            for link in external_links:
                # External links should include target=_blank
                link_with_target = f"{link})" + "{target=_blank}"
                assert link_with_target in content, \
                    f"External link {link} should include {{target=_blank}}"
    
    def test_compression_property_documented(self):
        """Test that compression-related properties are documented"""
        ja_file = VKC_COMPONENTS_PATH / "VKCNodeDraco.ja.md"
        if not ja_file.exists():
            pytest.skip("Japanese documentation not yet created")
            
        content = ja_file.read_text(encoding='utf-8')
        
        # Draco-specific properties that should be documented
        draco_properties = [
            "Compression Level",  # English term often used
            "圧縮レベル",          # Japanese translation
            "Quality",
            "品質",
        ]
        
        found_properties = [prop for prop in draco_properties if prop in content]
        assert len(found_properties) >= 2, \
            f"Should document Draco-specific properties. Found: {found_properties}"
    
    def test_performance_section_exists(self):
        """Test that performance considerations are documented"""
        for file_suffix in [".ja.md", ".en.md"]:
            doc_file = VKC_COMPONENTS_PATH / f"VKCNodeDraco{file_suffix}"
            if not doc_file.exists():
                continue
                
            content = doc_file.read_text(encoding='utf-8')
            
            # Performance-related keywords
            if file_suffix == ".ja.md":
                performance_keywords = ["パフォーマンス", "性能", "最適化", "ファイルサイズ"]
            else:
                performance_keywords = ["performance", "optimization", "file size", "loading"]
            
            found_keywords = [kw for kw in performance_keywords if kw.lower() in content.lower()]
            assert len(found_keywords) >= 1, \
                f"Should mention performance considerations in {file_suffix}"

class TestDocumentationConsistency:
    """Test consistency with other VKC Node documentation"""
    
    def test_follows_vkc_node_pattern(self):
        """Test that documentation follows established VKC Node patterns"""
        # Compare with existing VKC Node documentation
        reference_file = VKC_COMPONENTS_PATH / "VKCNodeCollider.ja.md"
        draco_file = VKC_COMPONENTS_PATH / "VKCNodeDraco.ja.md"
        
        if not draco_file.exists():
            pytest.skip("Draco documentation not yet created")
            
        if not reference_file.exists():
            pytest.skip("Reference documentation not available")
        
        ref_content = reference_file.read_text(encoding='utf-8')
        draco_content = draco_file.read_text(encoding='utf-8')
        
        # Should have similar section structure
        ref_sections = re.findall(r'^##+ (.+)$', ref_content, re.MULTILINE)
        draco_sections = re.findall(r'^##+ (.+)$', draco_content, re.MULTILINE)
        
        # Should have at least property list section like other components
        draco_section_text = " ".join(draco_sections)
        assert "プロパティ" in draco_section_text or "Property" in draco_section_text, \
            "Should have property section like other VKC Node components"
    
    def test_image_naming_consistency(self):
        """Test that images follow VKCNodeDraco_XX.jpg pattern"""
        pattern = re.compile(r'^VKCNodeDraco_\d+\.(jpg|png|gif)$')
        
        if IMG_PATH.exists():
            draco_images = [f for f in IMG_PATH.iterdir() 
                          if f.name.startswith('VKCNodeDraco_')]
            
            for img in draco_images:
                assert pattern.match(img.name), \
                    f"Image {img.name} should follow VKCNodeDraco_XX.ext pattern"

class TestContentQuality:
    """Test content quality and completeness"""
    
    def test_no_placeholder_content(self):
        """Test that documentation doesn't contain placeholder content"""
        for file_suffix in [".ja.md", ".en.md"]:
            doc_file = VKC_COMPONENTS_PATH / f"VKCNodeDraco{file_suffix}"
            if not doc_file.exists():
                continue
                
            content = doc_file.read_text(encoding='utf-8')
            
            # Common placeholder patterns
            placeholders = [
                "TODO", "FIXME", "placeholder", "プレースホルダー",
                "[WIP]", "未実装", "Not implemented"
            ]
            
            for placeholder in placeholders:
                assert placeholder.lower() not in content.lower(), \
                    f"Documentation should not contain placeholder '{placeholder}'"
    
    def test_minimum_content_length(self):
        """Test that documentation has substantial content"""
        for file_suffix in [".ja.md", ".en.md"]:
            doc_file = VKC_COMPONENTS_PATH / f"VKCNodeDraco{file_suffix}"
            if not doc_file.exists():
                continue
                
            content = doc_file.read_text(encoding='utf-8')
            
            # Remove markdown formatting for word count
            text_content = re.sub(r'[#*`\[\](){}]', ' ', content)
            words = len(text_content.split())
            
            assert words >= 200, \
                f"Documentation should have substantial content (at least 200 words). Found: {words}"

if __name__ == "__main__":
    # Run tests when script is executed directly
    pytest.main([__file__, "-v"])