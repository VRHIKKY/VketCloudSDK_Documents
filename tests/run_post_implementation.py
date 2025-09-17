#!/usr/bin/env python3
"""
Run post-implementation tests for LDOC-1164
"""

from test_ldoc_1164 import TestLDOC1164

def main():
    test_suite = TestLDOC1164()
    success = test_suite.run_post_implementation_tests()
    return 0 if success else 1

if __name__ == "__main__":
    exit(main())