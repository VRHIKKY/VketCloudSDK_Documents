"""
Integration tests for release note completeness
Tests for LDOC-1170: SDK16.5.7 release note differences QA
"""
import pytest
import requests
import re
from pathlib import Path
from urllib.parse import urljoin, urlparse


class TestReleaseNoteCompleteness:
    """Test complete release note integration"""
    
    def setup_method(self):
        """Set up test fixtures"""
        self.docs_dir = Path(__file__).parent.parent.parent / "docs" / "releasenote"
        self.target_version = "16.5"
        self.ja_file = self.docs_dir / f"releasenote-{self.target_version}.ja.md"
        self.en_file = self.docs_dir / f"releasenote-{self.target_version}.en.md"
        self.base_url = "https://vrhikky.github.io/VketCloudSDK_Documents/"
    
    @pytest.mark.integration
    def test_navigation_integration(self):
        """Test that release notes are properly integrated into navigation"""
        mkdocs_config = Path(__file__).parent.parent.parent / "mkdocs.yml"
        
        if mkdocs_config.exists():
            config_content = mkdocs_config.read_text(encoding='utf-8')
            
            # Check if the new release note is mentioned in navigation
            version_pattern = f"releasenote-{self.target_version}"
            assert version_pattern in config_content, f"Release note {version_pattern} not found in mkdocs.yml navigation"
    
    @pytest.mark.integration
    @pytest.mark.slow
    def test_external_links_validity(self):
        """Test that all external links in the release notes are valid"""
        if not (self.ja_file.exists() and self.en_file.exists()):
            pytest.skip("Files do not exist yet")
        
        urls_to_test = set()
        
        for file_path in [self.ja_file, self.en_file]:
            content = file_path.read_text(encoding='utf-8')
            # Extract HTTP/HTTPS URLs
            url_pattern = r'https?://[^\s\)\]>]+'
            urls = re.findall(url_pattern, content)
            urls_to_test.update(urls)
        
        # Test each unique URL
        session = requests.Session()
        session.headers.update({'User-Agent': 'VketCloudSDK-Docs-QA/1.0'})
        
        for url in urls_to_test:
            try:
                response = session.get(url, timeout=10, allow_redirects=True)
                assert response.status_code < 400, f"URL {url} returned status {response.status_code}"
            except requests.RequestException as e:
                pytest.fail(f"URL {url} failed to load: {e}")
    
    @pytest.mark.integration
    def test_cross_references_with_other_docs(self):
        """Test cross-references with other documentation"""
        if not (self.ja_file.exists() and self.en_file.exists()):
            pytest.skip("Files do not exist yet")
        
        # Check for internal links to other documentation
        internal_link_pattern = r'\[([^\]]+)\]\(([^)]+\.md[^)]*)\)'
        
        for file_path in [self.ja_file, self.en_file]:
            content = file_path.read_text(encoding='utf-8')
            internal_links = re.findall(internal_link_pattern, content)
            
            for link_text, link_path in internal_links:
                # Resolve relative paths
                if not link_path.startswith('http'):
                    if link_path.startswith('../'):
                        # Relative to docs directory
                        resolved_path = self.docs_dir.parent / link_path[3:]
                    else:
                        # Relative to current directory
                        resolved_path = self.docs_dir / link_path
                    
                    assert resolved_path.exists(), f"Internal link target does not exist: {resolved_path} (from {link_text})"
    
    @pytest.mark.integration
    def test_version_chronology(self):
        """Test that the new version fits properly in the chronological order"""
        if not (self.ja_file.exists() and self.en_file.exists()):
            pytest.skip("Files do not exist yet")
        
        # Get all existing release note versions
        release_files = list(self.docs_dir.glob("releasenote-*.ja.md"))
        versions = []
        
        for file_path in release_files:
            match = re.search(r'releasenote-(\d+)\.(\d+)(?:\.(\d+))?\.ja\.md', file_path.name)
            if match:
                major, minor, patch = match.groups()
                version_tuple = (int(major), int(minor), int(patch) if patch else 0)
                versions.append(version_tuple)
        
        # Add our target version
        target_version_tuple = (16, 5, 0)
        if target_version_tuple not in versions:
            versions.append(target_version_tuple)
        
        # Sort versions
        sorted_versions = sorted(versions)
        
        # Verify chronological order makes sense
        assert sorted_versions == sorted(set(sorted_versions)), "Version numbers should be unique and properly ordered"
        
        # Our version should be newer than existing versions
        existing_versions = [v for v in versions if v != target_version_tuple]
        if existing_versions:
            max_existing = max(existing_versions)
            assert target_version_tuple > max_existing, f"New version {target_version_tuple} should be newer than existing {max_existing}"


class TestDocumentationStandards:
    """Test adherence to documentation standards"""
    
    def setup_method(self):
        """Set up test fixtures"""
        self.docs_dir = Path(__file__).parent.parent.parent / "docs" / "releasenote"
        self.target_version = "16.5"
        self.ja_file = self.docs_dir / f"releasenote-{self.target_version}.ja.md"
        self.en_file = self.docs_dir / f"releasenote-{self.target_version}.en.md"
    
    @pytest.mark.integration
    def test_follows_existing_format_pattern(self):
        """Test that new release notes follow the same format as existing ones"""
        # Get a recent existing release note for comparison
        existing_files = sorted(self.docs_dir.glob("releasenote-15.*.ja.md"))
        
        if not existing_files:
            pytest.skip("No existing release notes found for comparison")
        
        reference_file = existing_files[-1]  # Get the latest 15.x version
        reference_content = reference_file.read_text(encoding='utf-8')
        
        if not self.ja_file.exists():
            pytest.skip("Target file does not exist yet")
        
        target_content = self.ja_file.read_text(encoding='utf-8')
        
        # Extract header structure from both files
        def extract_header_structure(content):
            headers = re.findall(r'^(#+)\s+(.+)$', content, re.MULTILINE)
            return [(len(level), title) for level, title in headers]
        
        reference_structure = extract_header_structure(reference_content)
        target_structure = extract_header_structure(target_content)
        
        # Header levels should follow similar pattern
        reference_levels = [level for level, _ in reference_structure]
        target_levels = [level for level, _ in target_structure]
        
        # Should have same number of top-level sections
        reference_top_level = [level for level in reference_levels if level == 1]
        target_top_level = [level for level in target_levels if level == 1]
        
        assert len(target_top_level) >= len(reference_top_level), "Should have at least as many top-level sections as reference"
    
    @pytest.mark.integration
    def test_file_size_reasonable(self):
        """Test that file sizes are reasonable"""
        max_size = 100 * 1024  # 100KB max
        min_size = 100  # 100 bytes minimum
        
        for file_path in [self.ja_file, self.en_file]:
            if file_path.exists():
                size = file_path.stat().st_size
                assert min_size <= size <= max_size, f"File size {size} bytes is outside reasonable range [{min_size}, {max_size}] for {file_path.name}"