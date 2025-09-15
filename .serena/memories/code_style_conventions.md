# Code Style and Conventions for VketCloudSDK Documentation

## Documentation File Conventions
- **Naming**: All documentation files use suffix-based naming:
  - `.ja.md` for Japanese (primary language)
  - `.en.md` for English translations
  - Both versions MUST exist for every documentation page

## Directory Structure Conventions
- Place images in section-specific `img/` subdirectories (not in shared `docs/images/`)
- Use lowercase for directory names with no spaces
- Group related documentation in logical directories

## Markdown Conventions
- **External Links**: Use `{target=_blank}` to open in new tabs
- **Internal Links**: Use relative paths for cross-references
- **Code Blocks**: Always specify language for syntax highlighting
- **Admonitions**: Follow Material for MkDocs syntax (note, warning, info, tip)
- **Images**: Reference with relative paths from the markdown file location

## Navigation Structure (mkdocs.yml)
- Japanese navigation uses Japanese titles with English keys
- English navigation defined separately in nav_translations
- Maintain parallel structure for both languages
- Use consistent indentation (2 spaces)

## Version Management
- Version branches follow `version/sdk-X.Y` format
- Target appropriate version branch for version-specific changes
- Main branch (`master`) for general documentation updates

## Git Workflow
- External contributions follow the policy in README.md
- PRs should target `master` branch unless version-specific
- Both language versions must be updated together

## Content Guidelines
- Japanese is the primary language (source of truth)
- English translations should maintain technical accuracy
- Keep technical terms consistent across languages
- Use clear, concise language appropriate for developers