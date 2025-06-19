# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview
<<<<<<< Updated upstream

This is the documentation repository for VketCloudSDK, a cloud-based virtual world SDK developed by HIKKY. The documentation is built using MkDocs with Material theme and supports both Japanese (primary) and English languages.

Published documentation: https://vrhikky.github.io/VketCloudSDK_Documents/latest/index.html

## Essential Commands

### Local Development
```bash
# macOS/Linux
sh mac_mkdocs.sh

# Windows
windows_mkdocs.bat

# Manual setup (if scripts fail)
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .\.venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

### Build Commands
```bash
mkdocs build           # Build static site
mkdocs serve           # Run local development server (http://127.0.0.1:8000/)
mike deploy VERSION    # Deploy a new version (used in CI/CD)
```

## Documentation Structure

The documentation follows a suffix-based multi-language structure:
- `.ja.md` - Japanese documentation (primary language)
- `.en.md` - English translations
- All documentation files must have both language versions

Key directories:
- `docs/` - All documentation content
- `custom_theme/` - Theme customizations
- `docs/images/` - Shared images
- Individual sections have their own `img/` subdirectories

## Git Workflow

- Current branch: `feature/sdk-14.5/15.6-release-note`
- Main branch for PRs: `master`
- Version branches: `version/sdk-X.Y` format
- External contributions welcome following the contribution policy in README.md

## Key Configuration

- **mkdocs.yml**: Main configuration file
  - Site name: "Vket Cloud SDK Manual"
  - Theme: Material with custom modifications
  - Plugins: search, mike (versioning), i18n (internationalization)
  - Google Analytics and cookie consent configured
- **requirements.txt**: Python dependencies (mkdocs, mkdocs-material==9.5.18, mike, mkdocs-static-i18n==1.2.2, pymdown-extensions)
- **versions.json**: Version history tracking

## Architecture Notes

1. **Multi-language Support**: The i18n plugin handles language switching. Japanese is the default language. Navigation translations are defined in mkdocs.yml.

2. **Version Management**: Mike is used for versioning. The documentation supports multiple SDK versions simultaneously.

3. **Documentation Categories**:
   - Getting Started (AboutVketCloudSDK, FirstStep)
   - Components & Features (VKCComponents, Actions, HeliScript)
   - Development Tools (SDKTools, GUITools, particleeditor)
   - API & Integration (ExternalAPI, heliport)
   - Optimization & Best Practices (WorldOptimization, WorldMakingGuide)
   - Reference (changelog, releasenote, troubleshooting)

4. **HeliScript**: Custom scripting language for VketCloud, extensively documented in `docs/hs/`

5. **Component System**: Two component systems documented:
   - VKC components (newer, recommended)
   - HEO components (legacy, being phased out)

## Development Guidelines

- Always maintain both Japanese and English versions of documentation
- Place images in section-specific `img/` subdirectories
- Follow existing naming conventions for files and directories
- Test local builds before submitting PRs
- Version-specific changes should target appropriate version branches
=======
This is the official documentation repository for VketCloudSDK, a developer kit for creating virtual worlds using the Vket Cloud Engine. The documentation is bilingual (Japanese/English) and built with MkDocs.

## Build Commands

### Quick Start Development Server
- **macOS**: `sh mac_mkdocs.sh`
- **Windows**: `windows_mkdocs.bat`

These scripts handle virtual environment setup, dependency installation, and start the development server at http://127.0.0.1:8000/

### Manual Commands
```bash
# Install dependencies
pip install -r requirements.txt

# Start development server
mkdocs serve

# Build static site
mkdocs build

# Deploy with versioning (requires mike)
mike deploy --push --update-aliases 14.5 latest
```

## High-Level Architecture

### Documentation Structure
The documentation follows a suffix-based multilingual pattern:
- `docs/*.ja.md` - Japanese documentation (default language)
- `docs/*.en.md` - English translations
- Both language versions must be maintained in sync

### Key Configuration Files
- `mkdocs.yml` - Main configuration with:
  - Navigation structure for both languages
  - Plugin configurations (search, i18n, mike versioning)
  - Theme customizations
  - Markdown extensions

### Content Organization
1. **SDK Setup** (`AboutVketCloudSDK/`) - Installation and account setup
2. **World Creation** (`FirstStep/`, `WorldMakingGuide/`) - Tutorials and guides
3. **Component Reference** (`VKCComponents/`) - All VKC component documentation
4. **HeliScript** (`hs/`) - Scripting language reference
5. **SDK Tools** (`SDKTools/`) - Development utilities
6. **Actions** (`Actions/`) - Action system documentation
7. **Troubleshooting** - Common issues and solutions
8. **Release Notes** - Version history and changelogs

### Special Features
- **Version Management**: Uses `mike` for documentation versioning
- **Search**: Language-specific search indices with Japanese tokenization
- **Navigation**: Separate navigation trees for each language defined in mkdocs.yml
- **Code Highlighting**: Supports HeliScript syntax highlighting

## Development Guidelines

### When Modifying Documentation
1. Always update both `.ja.md` and `.en.md` files
2. Test locally before committing using the build scripts
3. Verify navigation links work in both languages
4. Check that images load correctly (paths are relative to the markdown file)

### Common Tasks
- **Add new page**: Create both language versions, update navigation in mkdocs.yml
- **Update navigation**: Modify the `nav:` sections for both languages in mkdocs.yml
- **Add images**: Place in appropriate subdirectory, reference with relative paths
- **Update version**: Use mike commands for version management

### Important Patterns
- External links use `{target=_blank}` to open in new tabs
- Internal cross-references use relative paths
- Code blocks specify language for syntax highlighting
- Admonitions (notes, warnings) follow Material for MkDocs syntax
>>>>>>> Stashed changes
