#!/bin/bash

# Script to switch between original and refactored CSS

ORIGINAL_CSS="docs/stylesheets/extra.css"
REFACTORED_CSS="docs/stylesheets/extra_refactored.css"
BACKUP_CSS="docs/stylesheets/extra_backup.css"

echo "CSS Switcher for VketCloud SDK Documentation"
echo "============================================"
echo ""
echo "1. Use original CSS"
echo "2. Use refactored CSS"
echo "3. Create backup of current CSS"
echo ""
read -p "Choose an option (1-3): " choice

case $choice in
    1)
        if [ -f "$BACKUP_CSS" ]; then
            cp "$BACKUP_CSS" "$ORIGINAL_CSS"
            echo "Switched to original CSS"
        else
            echo "No backup found. Please create a backup first."
        fi
        ;;
    2)
        cp "$REFACTORED_CSS" "$ORIGINAL_CSS"
        echo "Switched to refactored CSS"
        ;;
    3)
        cp "$ORIGINAL_CSS" "$BACKUP_CSS"
        echo "Backup created at $BACKUP_CSS"
        ;;
    *)
        echo "Invalid option"
        ;;
esac