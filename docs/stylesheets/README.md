# VketCloud SDK Documentation CSS Architecture

## Overview

This directory contains the styling for the VketCloud SDK documentation site, featuring a glass neumorphism design theme. The CSS has been refactored into a modular architecture for better maintainability and organization.

## Directory Structure

```
stylesheets/
├── modules/                 # Modular CSS components
│   ├── _variables.css      # CSS custom properties and theme variables
│   ├── _mixins.css         # Reusable utility classes
│   ├── _utilities.css      # Helper classes and utilities
│   ├── _typography.css     # Text and font styles
│   ├── _header.css         # Header component styles
│   ├── _sidebar.css        # Sidebar navigation styles
│   ├── _search.css         # Search functionality styles
│   ├── _content.css        # Main content area styles
│   ├── _admonitions.css    # Note/warning box styles
│   ├── _footer.css         # Footer component styles
│   └── _back-to-top.css    # Back to top button styles
├── extra.css               # Current production CSS (compiled)
├── extra-modular.css       # Modular entry point (uses @import)
├── build-css.sh            # Build script to compile modules
└── README.md               # This file
```

## Architecture Benefits

### 1. **Modularity**
- Each component has its own file
- Easy to find and modify specific styles
- Reduces merge conflicts in team environments

### 2. **Maintainability**
- Clear separation of concerns
- Consistent naming conventions
- Easier to debug and update

### 3. **Reusability**
- Shared variables in `_variables.css`
- Utility classes in `_mixins.css`
- DRY (Don't Repeat Yourself) principle

### 4. **Performance**
- Can be optimized per module
- Easy to identify and remove unused styles
- Build process can include minification

## Theme Features

### Glass Neumorphism Design
- Translucent backgrounds with backdrop blur
- Subtle shadows and lighting effects
- Smooth transitions and hover states
- Responsive design for all screen sizes

### Color Schemes
- **Light Mode**: Clean white/gray palette
- **Dark Mode**: Deep gray/black palette
- Both modes feature consistent glass effects

### Key Design Elements
1. **Rounded Header**: Capsule-shaped navigation bar
2. **Glass Sidebars**: Translucent navigation panels
3. **Floating Elements**: Cards and buttons with depth
4. **Smooth Animations**: Subtle hover and transition effects

## Usage

### For Development
Use the modular CSS with imports:
```yaml
extra_css:
  - stylesheets/extra-modular.css
```

### For Production
Build and use the compiled CSS:
```bash
cd docs/stylesheets
./build-css.sh
```

Then use the compiled file:
```yaml
extra_css:
  - stylesheets/extra-compiled.css
```

## Customization Guide

### Changing Colors
Edit `modules/_variables.css`:
```css
:root {
    --md-primary-fg-color: #0052aa;  /* Primary brand color */
    --nav-link-color: #478ECF;       /* Navigation link color */
}
```

### Adjusting Shadows
Shadow values are defined in variables:
```css
--glass-shadow: inset 0 1px 2px 0 rgba(255, 255, 255, 0.5),
                inset 0 -1px 1px 0 rgba(0, 0, 0, 0.05),
                0 4px 16px rgba(0, 0, 0, 0.08);
```

### Modifying Border Radius
Adjust corner roundness:
```css
--border-radius-large: 24px;
--border-radius-medium: 16px;
--border-radius-small: 12px;
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (with -webkit prefixes)
- Mobile browsers: Optimized responsive design

## Contributing

When making CSS changes:

1. Edit the appropriate module file in `modules/`
2. Test your changes with both light and dark modes
3. Run the build script if updating production CSS
4. Ensure responsive design works on mobile devices
5. Check for any performance impacts

## Performance Considerations

- Backdrop filters can impact performance on older devices
- Shadows are optimized to be subtle and performant
- Transitions use GPU-accelerated properties
- Images lazy-load and have optimized shadows

## Future Improvements

- [ ] Add CSS minification to build process
- [ ] Implement CSS custom properties for easier theming
- [ ] Add print styles
- [ ] Create style guide documentation
- [ ] Add automated testing for CSS