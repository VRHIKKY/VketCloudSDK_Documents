# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

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

- Current branch: `claude/issue-719-20250624_030637`
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

### When Modifying Documentation
1. Always update both `.ja.md` and `.en.md` files
2. Test locally before committing using the build scripts
3. Verify navigation links work in both languages
4. Check that images load correctly (paths are relative to the markdown file)
5. Place images in section-specific `img/` subdirectories
6. Follow existing naming conventions for files and directories
7. Version-specific changes should target appropriate version branches

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
