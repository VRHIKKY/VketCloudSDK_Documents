#!/usr/bin/env python3
"""
Test cases for LDOC-1143 - hsSendLocalData function and OnReceiveLocalData callback documentation
Following TDD approach - these tests should initially fail until implementation is complete
"""

import os
import re
from pathlib import Path

class TestLocalDataDocumentation:
    """Test class for validating local data documentation"""
    
    def __init__(self):
        self.docs_dir = Path(__file__).parent.parent / "docs" / "hs"
        self.ja_file = self.docs_dir / "hs_system_function_localdata.ja.md"
        self.en_file = self.docs_dir / "hs_system_function_localdata.en.md"
    
    def test_files_exist(self):
        """Test that both Japanese and English documentation files exist"""
        assert self.ja_file.exists(), f"Japanese documentation file missing: {self.ja_file}"
        assert self.en_file.exists(), f"English documentation file missing: {self.en_file}"
        print("✓ Both documentation files exist")
    
    def test_file_structure_ja(self):
        """Test Japanese documentation file has correct structure"""
        if not self.ja_file.exists():
            print("✗ Japanese file doesn't exist - test skipped")
            return False
            
        content = self.ja_file.read_text(encoding='utf-8')
        
        # Check for required sections
        required_sections = [
            "# 組み込み関数 - ローカルデータ",
            "## データ送信関数",
            "### hsSendLocalData",
            "## データ受信コールバックメソッド",
            "OnReceiveLocalData"
        ]
        
        for section in required_sections:
            assert section in content, f"Missing section in Japanese file: {section}"
        
        print("✓ Japanese file has correct structure")
        return True
    
    def test_file_structure_en(self):
        """Test English documentation file has correct structure"""
        if not self.en_file.exists():
            print("✗ English file doesn't exist - test skipped")
            return False
            
        content = self.en_file.read_text(encoding='utf-8')
        
        # Check for required sections
        required_sections = [
            "# Built-in Functions - Local Data",
            "## Data Transmission Function",
            "### hsSendLocalData",
            "## Data Reception Callback Method",
            "OnReceiveLocalData"
        ]
        
        for section in required_sections:
            assert section in content, f"Missing section in English file: {section}"
        
        print("✓ English file has correct structure")
        return True
    
    def test_function_signature_ja(self):
        """Test that Japanese file contains correct function signature"""
        if not self.ja_file.exists():
            print("✗ Japanese file doesn't exist - test skipped")
            return False
            
        content = self.ja_file.read_text(encoding='utf-8')
        
        # Check for function signature
        function_pattern = r'`void hsSendLocalData\(string type, string data\)`'
        assert re.search(function_pattern, content), "Missing hsSendLocalData function signature in Japanese file"
        
        print("✓ Japanese file contains correct function signature")
        return True
    
    def test_function_signature_en(self):
        """Test that English file contains correct function signature"""
        if not self.en_file.exists():
            print("✗ English file doesn't exist - test skipped")
            return False
            
        content = self.en_file.read_text(encoding='utf-8')
        
        # Check for function signature
        function_pattern = r'`void hsSendLocalData\(string type, string data\)`'
        assert re.search(function_pattern, content), "Missing hsSendLocalData function signature in English file"
        
        print("✓ English file contains correct function signature")
        return True
    
    def test_callback_example_ja(self):
        """Test that Japanese file contains callback example"""
        if not self.ja_file.exists():
            print("✗ Japanese file doesn't exist - test skipped")
            return False
            
        content = self.ja_file.read_text(encoding='utf-8')
        
        # Check for callback example
        callback_patterns = [
            r'component.*LocalDataReceiver',
            r'public void OnReceiveLocalData\(string type, string data\)',
        ]
        
        for pattern in callback_patterns:
            assert re.search(pattern, content), f"Missing callback pattern in Japanese file: {pattern}"
        
        print("✓ Japanese file contains callback example")
        return True
    
    def test_callback_example_en(self):
        """Test that English file contains callback example"""
        if not self.en_file.exists():
            print("✗ English file doesn't exist - test skipped")
            return False
            
        content = self.en_file.read_text(encoding='utf-8')
        
        # Check for callback example
        callback_patterns = [
            r'component.*LocalDataReceiver',
            r'public void OnReceiveLocalData\(string type, string data\)',
        ]
        
        for pattern in callback_patterns:
            assert re.search(pattern, content), f"Missing callback pattern in English file: {pattern}"
        
        print("✓ English file contains callback example")
        return True
    
    def test_content_completeness_ja(self):
        """Test that Japanese file contains complete content"""
        if not self.ja_file.exists():
            print("✗ Japanese file doesn't exist - test skipped")
            return False
            
        content = self.ja_file.read_text(encoding='utf-8')
        
        # Check for key content elements
        key_elements = [
            "ユーザー本人のみに任意のデータを送信",
            "Net系の関数とは違い",
            "type.*任意の文字列",
            "利用目的に応じた適切な名前"
        ]
        
        for element in key_elements:
            assert re.search(element, content), f"Missing key content in Japanese file: {element}"
        
        print("✓ Japanese file contains complete content")
        return True
    
    def test_content_completeness_en(self):
        """Test that English file contains complete content"""
        if not self.en_file.exists():
            print("✗ English file doesn't exist - test skipped")
            return False
            
        content = self.en_file.read_text(encoding='utf-8')
        
        # Check for key content elements
        key_elements = [
            "send.*arbitrary.*data.*user",
            "Unlike.*Net.*functions",
            "type.*arbitrary.*string",
            "appropriate.*name.*purpose"
        ]
        
        for element in key_elements:
            assert re.search(element, content, re.IGNORECASE), f"Missing key content in English file: {element}"
        
        print("✓ English file contains complete content")
        return True
    
    def run_all_tests(self):
        """Run all tests and return results"""
        tests = [
            self.test_files_exist,
            self.test_file_structure_ja,
            self.test_file_structure_en,
            self.test_function_signature_ja,
            self.test_function_signature_en,
            self.test_callback_example_ja,
            self.test_callback_example_en,
            self.test_content_completeness_ja,
            self.test_content_completeness_en,
        ]
        
        passed = 0
        failed = 0
        
        print("Running TDD tests for LDOC-1143...")
        print("=" * 50)
        
        for test in tests:
            try:
                test()
                passed += 1
            except (AssertionError, Exception) as e:
                print(f"✗ {test.__name__}: {e}")
                failed += 1
        
        print("=" * 50)
        print(f"Tests passed: {passed}")
        print(f"Tests failed: {failed}")
        print(f"Total tests: {passed + failed}")
        
        return failed == 0


if __name__ == "__main__":
    tester = TestLocalDataDocumentation()
    success = tester.run_all_tests()
    exit(0 if success else 1)