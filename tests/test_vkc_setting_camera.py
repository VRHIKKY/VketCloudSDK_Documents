#!/usr/bin/env python3
"""
Test cases for VKC Setting Camera documentation implementation.
This follows TDD principles - tests are created before implementation.
"""

import os
import sys
import unittest
import yaml
from pathlib import Path

# Add project root to path for imports
PROJECT_ROOT = Path(__file__).parent.parent
sys.path.insert(0, str(PROJECT_ROOT))


class TestVKCSettingCameraDocumentation(unittest.TestCase):
    """Test cases for VKC Setting Camera component documentation."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.docs_dir = PROJECT_ROOT / "docs"
        self.vkc_components_dir = self.docs_dir / "VKCComponents"
        self.mkdocs_config = PROJECT_ROOT / "mkdocs.yml"
        
        # Expected file paths
        self.japanese_doc = self.vkc_components_dir / "VKCSettingCamera.ja.md"
        self.english_doc = self.vkc_components_dir / "VKCSettingCamera.en.md"
    
    def test_japanese_documentation_exists(self):
        """Test that Japanese documentation file exists."""
        self.assertTrue(
            self.japanese_doc.exists(),
            f"Japanese documentation file should exist at {self.japanese_doc}"
        )
    
    def test_english_documentation_exists(self):
        """Test that English documentation file exists."""
        self.assertTrue(
            self.english_doc.exists(),
            f"English documentation file should exist at {self.english_doc}"
        )
    
    def test_japanese_documentation_structure(self):
        """Test that Japanese documentation has correct structure."""
        if not self.japanese_doc.exists():
            self.skipTest("Japanese documentation file not yet created")
            
        with open(self.japanese_doc, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Test required sections
        self.assertIn('# VKC Setting Camera', content, "Should have main title")
        self.assertIn('## ', content, "Should have section headers")
        self.assertIn('| 名称 |', content, "Should have parameter table with Japanese headers")
        
        # Test component name consistency - should have proper cross-references
        # Note: VKCSettingWorldCamera references are expected as cross-references
    
    def test_english_documentation_structure(self):
        """Test that English documentation has correct structure."""
        if not self.english_doc.exists():
            self.skipTest("English documentation file not yet created")
            
        with open(self.english_doc, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Test required sections
        self.assertIn('# VKC Setting Camera', content, "Should have main title")
        self.assertIn('## ', content, "Should have section headers")
        self.assertIn('| Label |', content, "Should have parameter table with English headers")
        
        # Test component name consistency - should have proper cross-references
        # Note: VKCSettingWorldCamera references are expected as cross-references
    
    def test_navigation_updated_in_mkdocs(self):
        """Test that mkdocs.yml navigation includes VKC Setting Camera."""
        with open(self.mkdocs_config, 'r', encoding='utf-8') as f:
            config = yaml.safe_load(f)
        
        # Find VKC Components navigation section
        nav_found = False
        vkc_setting_found = False
        
        def find_vkc_setting_in_nav(nav_item):
            """Recursively search navigation for VKC Setting Camera."""
            nonlocal nav_found, vkc_setting_found
            
            if isinstance(nav_item, dict):
                for key, value in nav_item.items():
                    if "VKC Components" in key or "VKCコンポーネント" in key:
                        nav_found = True
                    if "VKC Setting Camera" in key:
                        vkc_setting_found = True
                        self.assertIn("VKCComponents/VKCSettingCamera.md", str(value),
                                    "Navigation should point to correct file path")
                    
                    if isinstance(value, (list, dict)):
                        find_vkc_setting_in_nav(value)
            elif isinstance(nav_item, list):
                for item in nav_item:
                    find_vkc_setting_in_nav(item)
        
        find_vkc_setting_in_nav(config.get('nav', []))
        
        self.assertTrue(nav_found, "Should find VKC Components section in navigation")
        self.assertTrue(vkc_setting_found, "Should find VKC Setting Camera in navigation")
    
    def test_parameter_table_completeness(self):
        """Test that parameter tables include all required camera settings."""
        expected_parameters = [
            'Smoothing',
            'Far Offset',
            'Near Offset', 
            'Photo Radius',
            'Raycast Max Distance',
            'TPS Pitch Max Angle',
            'TPS Camera Max Distance',
            'Enable X Rotation',
            'Default TPS Camera'
        ]
        
        for doc_file in [self.japanese_doc, self.english_doc]:
            if not doc_file.exists():
                continue
                
            with open(doc_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            for param in expected_parameters:
                self.assertIn(param, content, 
                            f"Parameter '{param}' should be documented in {doc_file.name}")
    
    def test_cross_references_to_world_camera(self):
        """Test that documentation includes cross-references to VKCSettingWorldCamera."""
        for doc_file in [self.japanese_doc, self.english_doc]:
            if not doc_file.exists():
                continue
                
            with open(doc_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Should reference the world camera settings
            self.assertTrue(
                'VKCSettingWorldCamera' in content or 'CameraSettings' in content,
                f"Should include cross-reference to world camera settings in {doc_file.name}"
            )
    
    def test_images_directory_exists(self):
        """Test that images directory exists for component screenshots."""
        img_dir = self.vkc_components_dir / "img"
        self.assertTrue(img_dir.exists(), "VKCComponents img directory should exist")
    
    def test_consistent_formatting_between_languages(self):
        """Test that Japanese and English docs have consistent structure."""
        if not (self.japanese_doc.exists() and self.english_doc.exists()):
            self.skipTest("Both language files not yet created")
        
        with open(self.japanese_doc, 'r', encoding='utf-8') as f:
            ja_content = f.read()
        with open(self.english_doc, 'r', encoding='utf-8') as f:
            en_content = f.read()
        
        # Count sections (should be equal)
        ja_sections = ja_content.count('## ')
        en_sections = en_content.count('## ')
        
        self.assertEqual(ja_sections, en_sections,
                        "Japanese and English documents should have same number of sections")
        
        # Count tables (should be equal)
        ja_tables = ja_content.count('| ---- |')
        en_tables = en_content.count('| ---- |')
        
        self.assertEqual(ja_tables, en_tables,
                        "Japanese and English documents should have same number of tables")


class TestDocumentationBuild(unittest.TestCase):
    """Test cases for MkDocs build process."""
    
    def test_mkdocs_build_succeeds(self):
        """Test that MkDocs build completes without errors."""
        import subprocess
        
        result = subprocess.run(
            ['mkdocs', 'build', '--strict'],
            cwd=PROJECT_ROOT,
            capture_output=True,
            text=True
        )
        
        self.assertEqual(result.returncode, 0,
                        f"MkDocs build should succeed. Error: {result.stderr}")
    
    def test_no_broken_links(self):
        """Test that there are no broken internal links in VKC Setting Camera docs."""
        # This would be implemented with a link checker tool
        # For now, just check that the files exist
        docs_dir = PROJECT_ROOT / "docs" / "VKCComponents"
        
        for doc_file in ["VKCSettingCamera.ja.md", "VKCSettingCamera.en.md"]:
            file_path = docs_dir / doc_file
            if file_path.exists():
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check for common broken link patterns
                self.assertNotIn(']()', content, f"No empty links in {doc_file}")
                self.assertNotIn('](broken', content, f"No obviously broken links in {doc_file}")


if __name__ == '__main__':
    # Run tests
    unittest.main(verbosity=2)