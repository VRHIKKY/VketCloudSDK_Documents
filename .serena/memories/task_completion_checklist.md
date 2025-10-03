# Task Completion Checklist for VketCloudSDK Documentation

## Before Committing Documentation Changes

### 1. File Completeness
- [ ] Both `.ja.md` and `.en.md` versions exist for new pages
- [ ] Images placed in appropriate section-specific `img/` subdirectory
- [ ] All image paths are relative and correctly referenced

### 2. Navigation Updates
- [ ] Updated `mkdocs.yml` nav section for Japanese
- [ ] Updated nav_translations for English in `mkdocs.yml`
- [ ] Verified navigation structure maintains parallel hierarchy

### 3. Local Testing
- [ ] Run `mkdocs serve` to test locally
- [ ] Verified page renders correctly at http://127.0.0.1:8000/
- [ ] Tested language switching works properly
- [ ] Checked all internal links work
- [ ] Confirmed images load correctly
- [ ] Tested on both light and dark themes

### 4. Content Review
- [ ] Technical accuracy verified
- [ ] Consistent terminology used
- [ ] Code examples are syntactically correct
- [ ] External links include `{target=_blank}`

### 5. Version Considerations
- [ ] Targeted correct branch (master or version/sdk-X.Y)
- [ ] Checked if change affects multiple versions

## Build Verification
```bash
# Build site locally to check for errors
mkdocs build

# Check build output for warnings
# Review site/ directory structure
```

## Final Checks
- No broken links
- No missing images
- Both language versions have equivalent content
- Changes align with existing documentation style