# Development Commands for VketCloudSDK Documentation

## Local Development Setup & Run

### Quick Start (Platform-specific scripts)
```bash
# macOS/Linux
sh mac_mkdocs.sh

# Windows
windows_mkdocs.bat
```

### Manual Setup
```bash
# Create virtual environment
python3 -m venv .venv

# Activate virtual environment
source .venv/bin/activate  # macOS/Linux
.\.venv\Scripts\activate    # Windows

# Install dependencies
pip install -r requirements.txt

# Run development server
mkdocs serve
```

## MkDocs Commands
```bash
mkdocs serve    # Start development server at http://127.0.0.1:8000/
mkdocs build    # Build static site to site/ directory
mike deploy VERSION --push  # Deploy a new version (CI/CD)
mike list       # List all deployed versions
mike delete VERSION  # Delete a specific version
```

## Git Workflow Commands
```bash
# For version-specific changes
git checkout -b version/sdk-X.Y  # Create version branch

# For general changes
git checkout master              # Main branch for PRs
```

## Python Virtual Environment
```bash
# Deactivate virtual environment
deactivate

# Remove virtual environment (if needed)
rm -rf .venv  # macOS/Linux
rmdir /s .venv  # Windows
```

## Validation (No built-in commands, manual checks required)
- Verify both .ja.md and .en.md files exist for new pages
- Check navigation works in both languages
- Test image paths are correct
- Ensure mkdocs.yml nav sections are updated for both languages