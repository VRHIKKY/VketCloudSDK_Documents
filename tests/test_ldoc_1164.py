#!/usr/bin/env python3
"""
Test cases for LDOC-1164: パーティクルエディタページ記載修正

This module implements TDD approach for documentation text changes.
Tests verify that the required text changes are made correctly.
"""

import os
import re
import subprocess
from pathlib import Path


class TestLDOC1164:
    """Test cases for LDOC-1164 documentation changes."""
    
    def __init__(self):
        self.docs_root = Path(__file__).parent.parent / "docs"
        self.target_file = self.docs_root / "releasenote" / "releasenote-14.5.ja.md"
        self.target_line_number = 81
        
        # Expected text changes
        self.old_text = "「ディスプレイ」の設定から画面解像度を100%に設定してください。"
        self.new_text = "Windowsの「ディスプレイの設定」から画面解像度を100%に設定してください。"
    
    def test_target_file_exists(self):
        """Test that the target file exists."""
        print(f"Testing if {self.target_file} exists...")
        assert self.target_file.exists(), f"Target file {self.target_file} does not exist"
        print("✅ Target file exists")
        return True
    
    def test_old_text_present_initially(self):
        """Test that the old text is present in the file (should pass initially)."""
        print(f"Testing if old text is present in {self.target_file}...")
        content = self.target_file.read_text(encoding='utf-8')
        
        if self.old_text in content:
            print("✅ Old text found in file (test passes - ready for modification)")
            return True
        else:
            print("❌ Old text not found in file")
            print(f"Looking for: {self.old_text}")
            # Show context around line 81
            lines = content.split('\n')
            if len(lines) > self.target_line_number:
                print(f"Line {self.target_line_number}: {lines[self.target_line_number-1]}")
            return False
    
    def test_new_text_not_present_initially(self):
        """Test that new text is not present initially (should pass before implementation)."""
        print(f"Testing if new text is absent initially in {self.target_file}...")
        content = self.target_file.read_text(encoding='utf-8')
        
        if self.new_text not in content:
            print("✅ New text is not present initially (test passes)")
            return True
        else:
            print("❌ New text is already present (implementation already done)")
            return False
    
    def test_new_text_present_after_implementation(self):
        """Test that new text is present after implementation (should fail initially)."""
        print(f"Testing if new text is present after implementation in {self.target_file}...")
        content = self.target_file.read_text(encoding='utf-8')
        
        if self.new_text in content:
            print("✅ New text found in file (implementation successful)")
            return True
        else:
            print("❌ New text not found in file (implementation needed)")
            return False
    
    def test_old_text_removed_after_implementation(self):
        """Test that old text is removed after implementation (should fail initially)."""
        print(f"Testing if old text is removed after implementation in {self.target_file}...")
        content = self.target_file.read_text(encoding='utf-8')
        
        if self.old_text not in content:
            print("✅ Old text removed successfully")
            return True
        else:
            print("❌ Old text still present (replacement needed)")
            return False
    
    def test_mkdocs_build_success(self):
        """Test that mkdocs can build successfully."""
        print("Testing mkdocs build...")
        try:
            # Change to the root directory for mkdocs build
            original_cwd = os.getcwd()
            os.chdir(self.docs_root.parent)
            
            result = subprocess.run(
                ["mkdocs", "build"],
                capture_output=True,
                text=True,
                timeout=60
            )
            
            os.chdir(original_cwd)
            
            if result.returncode == 0:
                print("✅ MkDocs build successful")
                return True
            else:
                print("❌ MkDocs build failed")
                print(f"Error: {result.stderr}")
                return False
                
        except subprocess.TimeoutExpired:
            print("❌ MkDocs build timed out")
            return False
        except Exception as e:
            print(f"❌ MkDocs build error: {e}")
            return False
    
    def test_line_number_accuracy(self):
        """Test that the change is made at the correct line number."""
        print(f"Testing line number accuracy at line {self.target_line_number}...")
        content = self.target_file.read_text(encoding='utf-8')
        lines = content.split('\n')
        
        if len(lines) <= self.target_line_number:
            print(f"❌ File has only {len(lines)} lines, cannot check line {self.target_line_number}")
            return False
        
        target_line = lines[self.target_line_number - 1]  # Convert to 0-based index
        print(f"Line {self.target_line_number}: {target_line}")
        
        # Check if the line contains either old or new text
        if self.new_text in target_line:
            print("✅ Correct line contains new text")
            return True
        elif self.old_text in target_line:
            print("⚠️ Correct line contains old text (needs implementation)")
            return False
        else:
            print("❌ Neither old nor new text found at expected line")
            return False
    
    def run_pre_implementation_tests(self):
        """Run tests that should pass before implementation."""
        print("=" * 60)
        print("RUNNING PRE-IMPLEMENTATION TESTS (These should pass)")
        print("=" * 60)
        
        tests = [
            self.test_target_file_exists,
            self.test_old_text_present_initially,
            self.test_new_text_not_present_initially,
        ]
        
        results = []
        for test in tests:
            try:
                result = test()
                results.append(result)
            except Exception as e:
                print(f"❌ Test failed with exception: {e}")
                results.append(False)
            print()
        
        all_passed = all(results)
        print(f"Pre-implementation tests: {'✅ ALL PASSED' if all_passed else '❌ SOME FAILED'}")
        return all_passed
    
    def run_failing_tests(self):
        """Run tests that should fail before implementation."""
        print("=" * 60)
        print("RUNNING TESTS THAT SHOULD FAIL INITIALLY")
        print("=" * 60)
        
        tests = [
            self.test_new_text_present_after_implementation,
            self.test_old_text_removed_after_implementation,
        ]
        
        results = []
        for test in tests:
            try:
                result = test()
                results.append(result)
            except Exception as e:
                print(f"❌ Test failed with exception: {e}")
                results.append(False)
            print()
        
        any_passed = any(results)
        print(f"Implementation tests: {'⚠️ SOME PASSED (Already implemented?)' if any_passed else '✅ ALL FAILED AS EXPECTED'}")
        return not any_passed  # Return True if all failed as expected
    
    def run_post_implementation_tests(self):
        """Run all tests after implementation."""
        print("=" * 60)
        print("RUNNING POST-IMPLEMENTATION TESTS (All should pass)")
        print("=" * 60)
        
        tests = [
            self.test_target_file_exists,
            self.test_new_text_present_after_implementation,
            self.test_old_text_removed_after_implementation,
            self.test_line_number_accuracy,
            self.test_mkdocs_build_success,
        ]
        
        results = []
        for test in tests:
            try:
                result = test()
                results.append(result)
            except Exception as e:
                print(f"❌ Test failed with exception: {e}")
                results.append(False)
            print()
        
        all_passed = all(results)
        print(f"Post-implementation tests: {'✅ ALL PASSED' if all_passed else '❌ SOME FAILED'}")
        return all_passed


def main():
    """Run the test suite."""
    print("LDOC-1164 Test Suite")
    print("=" * 60)
    
    test_suite = TestLDOC1164()
    
    # Phase 1: Pre-implementation tests
    pre_tests_passed = test_suite.run_pre_implementation_tests()
    
    # Phase 2: Tests that should fail initially
    failing_tests_behaved = test_suite.run_failing_tests()
    
    print("=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    print(f"Pre-implementation readiness: {'✅' if pre_tests_passed else '❌'}")
    print(f"Failing tests behaved correctly: {'✅' if failing_tests_behaved else '❌'}")
    
    if pre_tests_passed and failing_tests_behaved:
        print("✅ Ready for implementation!")
        return 0
    else:
        print("❌ Not ready for implementation. Please check the issues above.")
        return 1


if __name__ == "__main__":
    exit(main())