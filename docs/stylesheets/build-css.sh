#!/bin/bash

# Build CSS from modular files
# This script combines all modular CSS files into a single file

MODULES_DIR="modules"
OUTPUT_FILE="extra-compiled.css"
TEMP_FILE="temp.css"

# Start with header comment
cat > "$OUTPUT_FILE" << 'EOF'
/* ================================================
   VketCloud SDK Documentation - Glass Neumorphism Theme
   Compiled from modular CSS files
   Generated: $(date)
   ================================================ */

EOF

# Combine all module files in order
echo "Building CSS from modules..."

# Order matters - follow the import order
modules=(
    "_variables.css"
    "_mixins.css"
    "_utilities.css"
    "_typography.css"
    "_header.css"
    "_header-enhancements.css"
    "_theme-toggle.css"
    "_sidebar.css"
    "_search.css"
    "_search-clickoutside.css"
    "_content.css"
    "_admonitions.css"
    "_footer.css"
    "_back-to-top.css"
)

for module in "${modules[@]}"; do
    if [ -f "$MODULES_DIR/$module" ]; then
        echo "Adding $module..."
        echo "" >> "$OUTPUT_FILE"
        cat "$MODULES_DIR/$module" >> "$OUTPUT_FILE"
    else
        echo "Warning: $module not found!"
    fi
done

echo "CSS build complete: $OUTPUT_FILE"

# Optional: Minify the CSS (requires a CSS minifier like csso or clean-css)
# npx csso "$OUTPUT_FILE" -o "extra.min.css"