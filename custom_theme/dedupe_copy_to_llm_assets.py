"""Integrate Copy to LLM with the site's multi-language MkDocs build."""

from html import escape


COMPATIBILITY_SCRIPT = "javascripts/copy-to-llm-vketcloud.js"


def _deduplicate(entries, asset_path):
    """Keep the first occurrence of one generated asset path."""
    seen = False
    result = []
    for entry in entries:
        if entry == asset_path:
            if seen:
                continue
            seen = True
        result.append(entry)
    return result


def on_config(config):
    """Deduplicate generated assets and load the compatibility script last."""
    for config_key, asset_path in (
        ("extra_javascript", "assets/copy-to-llm/copy-to-llm.js"),
        ("extra_css", "assets/copy-to-llm/copy-to-llm.css"),
        ("extra_css", "assets/copy-to-llm/copy-to-llm-custom.css"),
    ):
        config[config_key] = _deduplicate(config.get(config_key, []), asset_path)

    scripts = config.get("extra_javascript", [])
    config["extra_javascript"] = [
        script for script in scripts if script != COMPATIBILITY_SCRIPT
    ] + [COMPATIBILITY_SCRIPT]
    return config


def on_post_page(output, page, config):
    """Expose the actual language-specific Markdown source path to the browser."""
    source_path = escape(page.file.src_path.replace("\\", "/"), quote=True)
    metadata = (
        '<meta name="mkdocs-copy-to-llm-source-path" '
        f'content="{source_path}">'
    )
    return output.replace("<head>", f"<head>\n{metadata}", 1)
