"""
Unit tests for bilingual consistency validation
Tests for LDOC-1170: SDK16.5.7 release note differences QA
"""
import pytest
import re
from pathlib import Path


class TestBilingualConsistency:
    """Test consistency between Japanese and English release notes"""
    
    def setup_method(self):
        """Set up test fixtures"""
        self.docs_dir = Path(__file__).parent.parent.parent / "docs" / "releasenote"
        self.target_version = "16.5"
        self.ja_file = self.docs_dir / f"releasenote-{self.target_version}.ja.md"
        self.en_file = self.docs_dir / f"releasenote-{self.target_version}.en.md"
    
    @pytest.mark.unit
    def test_link_consistency(self):
        """Test that both files have consistent external links"""
        if not (self.ja_file.exists() and self.en_file.exists()):
            pytest.skip("Both files do not exist yet")
        
        ja_content = self.ja_file.read_text(encoding='utf-8')
        en_content = self.en_file.read_text(encoding='utf-8')
        
        # Extract URLs from both files
        url_pattern = r'https?://[^\s\)]+|www\.[^\s\)]+'
        ja_urls = set(re.findall(url_pattern, ja_content))
        en_urls = set(re.findall(url_pattern, en_content))
        
        # External URLs should be the same (documentation links, etc.)
        # Allow for language-specific URLs
        common_domains = {"github.com", "vroiginal.com", "vket.com"}
        
        ja_external = {url for url in ja_urls if any(domain in url for domain in common_domains)}
        en_external = {url for url in en_urls if any(domain in url for domain in common_domains)}
        
        # If there are external links, they should be consistent
        if ja_external or en_external:
            assert ja_external == en_external, f"External links mismatch: JA={ja_external}, EN={en_external}"
    
    @pytest.mark.unit
    def test_code_block_consistency(self):
        """Test that code blocks are consistent between languages"""
        if not (self.ja_file.exists() and self.en_file.exists()):
            pytest.skip("Both files do not exist yet")
        
        ja_content = self.ja_file.read_text(encoding='utf-8')
        en_content = self.en_file.read_text(encoding='utf-8')
        
        # Extract code blocks
        code_block_pattern = r'```[\s\S]*?```'
        ja_code_blocks = re.findall(code_block_pattern, ja_content)
        en_code_blocks = re.findall(code_block_pattern, en_content)
        
        # Code blocks should be identical (code doesn't change with language)
        assert len(ja_code_blocks) == len(en_code_blocks), "Number of code blocks should be the same"
        
        for i, (ja_code, en_code) in enumerate(zip(ja_code_blocks, en_code_blocks)):
            # Remove language-specific comments but keep the code structure
            ja_code_clean = re.sub(r'//.*?$', '', ja_code, flags=re.MULTILINE).strip()
            en_code_clean = re.sub(r'//.*?$', '', en_code, flags=re.MULTILINE).strip()
            
            assert ja_code_clean == en_code_clean, f"Code block {i} differs between languages"
    
    @pytest.mark.unit
    def test_list_item_count_consistency(self):
        """Test that the number of list items is consistent"""
        if not (self.ja_file.exists() and self.en_file.exists()):
            pytest.skip("Both files do not exist yet")
        
        ja_content = self.ja_file.read_text(encoding='utf-8')
        en_content = self.en_file.read_text(encoding='utf-8')
        
        # Count list items
        list_item_pattern = r'^\s*[-*+]\s+'
        ja_list_items = len(re.findall(list_item_pattern, ja_content, re.MULTILINE))
        en_list_items = len(re.findall(list_item_pattern, en_content, re.MULTILINE))
        
        assert ja_list_items == en_list_items, f"List item count mismatch: JA={ja_list_items}, EN={en_list_items}"
    
    @pytest.mark.unit
    def test_image_reference_consistency(self):
        """Test that image references are consistent between languages"""
        if not (self.ja_file.exists() and self.en_file.exists()):
            pytest.skip("Both files do not exist yet")
        
        ja_content = self.ja_file.read_text(encoding='utf-8')
        en_content = self.en_file.read_text(encoding='utf-8')
        
        # Extract image references
        image_pattern = r'!\[.*?\]\(([^)]+)\)'
        ja_images = re.findall(image_pattern, ja_content)
        en_images = re.findall(image_pattern, en_content)
        
        # Filter out language-specific images (ending with _ja or _en)
        ja_common = [img for img in ja_images if not img.endswith('_ja.jpg') and not img.endswith('_ja.png')]
        en_common = [img for img in en_images if not img.endswith('_en.jpg') and not img.endswith('_en.png')]
        
        # Common images should be the same
        assert set(ja_common) == set(en_common), f"Common image references mismatch: JA={ja_common}, EN={en_common}"


class TestContentStructure:
    """Test the overall content structure"""
    
    def setup_method(self):
        """Set up test fixtures"""
        self.docs_dir = Path(__file__).parent.parent.parent / "docs" / "releasenote"
        self.target_version = "16.5"
        self.ja_file = self.docs_dir / f"releasenote-{self.target_version}.ja.md"
        self.en_file = self.docs_dir / f"releasenote-{self.target_version}.en.md"
    
    @pytest.mark.unit
    def test_file_encoding(self):
        """Test that files are properly UTF-8 encoded"""
        for file_path in [self.ja_file, self.en_file]:
            if file_path.exists():
                try:
                    content = file_path.read_text(encoding='utf-8')
                    # If we can read it as UTF-8, the test passes
                    assert len(content) > 0, f"File {file_path} appears to be empty"
                except UnicodeDecodeError:
                    pytest.fail(f"File {file_path} is not properly UTF-8 encoded")
    
    @pytest.mark.unit
    def test_no_trailing_whitespace(self):
        """Test that files don't have trailing whitespace"""
        for file_path in [self.ja_file, self.en_file]:
            if file_path.exists():
                content = file_path.read_text(encoding='utf-8')
                lines = content.split('\n')
                
                for i, line in enumerate(lines, 1):
                    assert not line.endswith(' ') and not line.endswith('\t'), f"Line {i} in {file_path.name} has trailing whitespace"