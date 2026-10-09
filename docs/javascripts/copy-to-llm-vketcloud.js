/* Adapt mkdocs-copy-to-llm to this site's .html URLs and language-suffixed sources. */
(function () {
  "use strict";

  function getSourceUrl() {
    const repo = document.querySelector(
      'meta[name="mkdocs-copy-to-llm-repo-url"]'
    );
    const source = document.querySelector(
      'meta[name="mkdocs-copy-to-llm-source-path"]'
    );

    if (!repo || !source || !repo.content || !source.content) {
      return null;
    }

    return `${repo.content.replace(/\/$/, "")}/${source.content.replace(/^\//, "")}`;
  }

  async function copyToClipboard(value) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    if (!copied) {
      throw new Error("Clipboard access was denied");
    }
  }

  function showToast(message) {
    document.querySelector(".copy-to-llm-toast")?.remove();
    const toast = document.createElement("div");
    toast.className = "copy-to-llm-toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    window.setTimeout(() => {
      toast.classList.remove("show");
      window.setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function closeDropdown(item) {
    const container = item.closest(".copy-to-llm-split-container");
    container?.querySelector(".copy-to-llm-dropdown")?.classList.remove("show");
    container?.querySelector(".copy-to-llm-right")?.classList.remove("active");
  }

  async function copyPage(sourceUrl) {
    const response = await fetch(sourceUrl);
    if (!response.ok) {
      throw new Error(`Unable to fetch Markdown: ${response.status}`);
    }
    await copyToClipboard(await response.text());
    showToast("Content copied to clipboard!");
  }

  document.addEventListener(
    "click",
    async (event) => {
      const sourceUrl = getSourceUrl();
      if (!sourceUrl) {
        return;
      }

      const pageButton = event.target.closest(".copy-to-llm-left");
      if (pageButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        try {
          await copyPage(sourceUrl);
        } catch (error) {
          console.error("Copy to LLM: failed to copy Markdown", error);
          showToast("Could not copy Markdown. Please try again.");
        }
        return;
      }

      const item = event.target.closest(".copy-to-llm-dropdown-item");
      if (!item) {
        return;
      }

      const action = item.dataset.action;
      if (![
        "copy-markdown-link",
        "view-markdown",
        "open-chatgpt",
        "open-claude",
      ].includes(action)) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      closeDropdown(item);

      if (action === "copy-markdown-link") {
        try {
          await copyToClipboard(sourceUrl);
          showToast("Link copied to clipboard!");
        } catch (error) {
          console.error("Copy to LLM: failed to copy link", error);
          showToast("Could not copy the link. Please try again.");
        }
        return;
      }

      if (action === "view-markdown") {
        window.open(sourceUrl, "_blank", "noopener");
        return;
      }

      const prompt = `Read ${sourceUrl} so I can ask questions about it.`;
      const target = action === "open-chatgpt"
        ? `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`
        : `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
      window.open(target, "_blank", "noopener");
    },
    true
  );
})();
