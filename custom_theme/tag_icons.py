"""
MkDocs hook for rendering deprecated and unrecommended tags as icons.
This hook processes markdown content to replace special HTML comment tags with styled HTML icons.
"""

import re
from mkdocs import plugins
from mkdocs.config import config_options

def get_page_language(page, config):
    """
    Determine the language of the current page based on file suffix or config.
    Returns 'en' or 'ja'.
    """
    # Check if the page file ends with .ja.md or .en.md
    if page.file.src_path.endswith('.ja.md'):
        return 'ja'
    elif page.file.src_path.endswith('.en.md'):
        return 'en'
    
    # Check if we're in an /en/ subdirectory (for i18n plugin)
    if '/en/' in page.file.url or page.file.url.startswith('en/'):
        return 'en'
    
    # Default to Japanese as it's the primary language
    return 'ja'

def on_page_markdown(markdown, page, config, files):
    """
    Process markdown content to replace HTML comment tags with icons.
    
    Supported tags:
    - <!-- md:deprecated --> - Shows as deprecated icon with localized text
    - <!-- md:unrecommended --> - Shows as unrecommended icon with localized text
    - <!-- md:experimental --> - Shows as experimental icon with localized text
    - <!-- md:new --> - Shows as new feature icon with localized text
    - <!-- md:beta --> - Shows as beta feature icon with localized text
    """
    
    # Get the current page language
    lang = get_page_language(page, config)
    
    # Define localized labels and tag configurations
    tag_configs = {
        'deprecated': {
            'labels': {
                'en': {'text': 'Deprecated', 'title': 'Deprecated'},
                'ja': {'text': '廃止', 'title': '廃止'}
            },
            'class': 'tag-deprecated',
            'icon': 'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
        },
        'unrecommended': {
            'labels': {
                'en': {'text': 'Not Recommended', 'title': 'Not Recommended'},
                'ja': {'text': '非推奨', 'title': '非推奨'}
            },
            'class': 'tag-unrecommended',
            'icon': 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M13,17H11V11H13V17M13,9H11V7H13V9Z'
        },
        'experimental': {
            'labels': {
                'en': {'text': 'Experimental', 'title': 'Experimental Feature'},
                'ja': {'text': '実験的', 'title': '実験的機能'}
            },
            'class': 'tag-experimental',
            'icon': 'M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z'
        },
        'new': {
            'labels': {
                'en': {'text': 'New', 'title': 'New Feature'},
                'ja': {'text': '新機能', 'title': '新機能'}
            },
            'class': 'tag-new',
            'icon': 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z'
        },
        'beta': {
            'labels': {
                'en': {'text': 'Beta', 'title': 'Beta Feature'},
                'ja': {'text': 'ベータ', 'title': 'ベータ機能'}
            },
            'class': 'tag-beta',
            'icon': 'M4.93,4.93C3.12,6.74 2,9.24 2,12C2,14.76 3.12,17.26 4.93,19.07L6.34,17.66C4.89,16.22 4,14.22 4,12C4,9.79 4.89,7.78 6.34,6.34L4.93,4.93M19.07,4.93L17.66,6.34C19.11,7.78 20,9.79 20,12C20,14.22 19.11,16.22 17.66,17.66L19.07,19.07C20.88,17.26 22,14.76 22,12C22,9.24 20.88,6.74 19.07,4.93M7.76,7.76C6.67,8.85 6,10.35 6,12C6,13.65 6.67,15.15 7.76,16.24L9.17,14.83C8.45,14.11 8,13.11 8,12C8,10.89 8.45,9.89 9.17,9.17L7.76,7.76M16.24,7.76L14.83,9.17C15.55,9.89 16,10.89 16,12C16,13.11 15.55,14.11 14.83,14.83L16.24,16.24C17.33,15.15 18,13.65 18,12C18,10.35 17.33,8.85 16.24,7.76M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z'
        }
    }
    
    # Function to create HTML for any tag type with link to conventions page
    def create_tag_html(tag_type, lang):
        config = tag_configs[tag_type]
        label = config['labels'][lang]
        
        # Get the page URL to calculate relative path
        page_url = page.file.url
        
        # Debug: let's see what the actual URL looks like
        # For Japanese pages: 'hs/something.html'
        # For English pages: 'en/hs/something.html'
        
        # Calculate depth based on forward slashes in the path
        if page_url:
            # Split by '/' and remove the filename (last element)
            parts = page_url.split('/')
            # Remove the filename
            dir_parts = parts[:-1] if len(parts) > 1 else []
            depth = len(dir_parts)
        else:
            depth = 0
        
        # Build the relative path to go back to root
        if depth > 0:
            path_prefix = '../' * depth
        else:
            path_prefix = ''
        
        # Determine the conventions page path
        # Check if this is an English page
        if lang == 'en':
            if page_url and page_url.startswith('en/'):
                # English page in en/ subdirectory
                conventions_path = f'{path_prefix}en/TagConventions.html'
            else:
                # English page but not in en/ subdirectory (shouldn't happen normally)
                conventions_path = f'{path_prefix}TagConventions.html'
        else:
            # Japanese page - link to root level conventions
            conventions_path = f'{path_prefix}TagConventions.html'
        
        # Create anchor based on tag type
        anchor = f'#{tag_type}'
        
        # Return clickable tag with link to conventions page
        return f'<a href="{conventions_path}{anchor}" class="tag-icon-link"><span class="tag-icon {config["class"]}" title="{label["title"]}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="{config["icon"]}"/></svg><span class="tag-text">{label["text"]}</span></span></a>'
    
    # Replace all HTML comment tags with localized icons
    for tag_type in tag_configs:
        pattern = rf'<!--\s*md:{tag_type}\s*-->'
        replacement = create_tag_html(tag_type, lang)
        markdown = re.sub(pattern, replacement, markdown, flags=re.IGNORECASE)
    
    return markdown

def on_page_content(html, page, config, files):
    """
    Additional processing on the HTML content if needed.
    This runs after markdown is converted to HTML.
    """
    return html