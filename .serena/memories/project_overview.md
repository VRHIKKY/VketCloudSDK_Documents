# VketCloudSDK Documentation Project

## Purpose
This is the documentation repository for VketCloudSDK, a cloud-based virtual world SDK developed by HIKKY. The documentation is multilingual (Japanese primary, English secondary) and versioned to support multiple SDK releases.

## Published Documentation
- Production URL: https://vrhikky.github.io/VketCloudSDK_Documents/latest/index.html
- Local development: http://127.0.0.1:8000/

## Tech Stack
- **Static Site Generator**: MkDocs with Material theme (v9.5.18)
- **Version Management**: Mike for multi-version documentation
- **Internationalization**: mkdocs-static-i18n (v1.2.2) for Japanese/English support
- **Python Dependencies**: Managed via requirements.txt
- **CI/CD**: GitHub Actions with Claude Assistant integration

## Repository Structure
- `docs/` - All documentation content with .ja.md and .en.md suffixes
- `custom_theme/` - Theme customizations
- `mkdocs.yml` - Main configuration file
- Platform-specific build scripts: `mac_mkdocs.sh` and `windows_mkdocs.bat`

## Key Features Documented
- VketCloudSDK components (VKC and legacy HEO)
- HeliScript (custom scripting language)
- World creation and optimization
- Particle editor and animation tools
- External API integration
- Debugging and troubleshooting