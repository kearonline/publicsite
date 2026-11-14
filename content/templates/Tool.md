---
title: Tool
---

<style> /* Do not edit */
  body {
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }

  .page-header,
  .right.sidebar,
  footer,
  .center > hr,
  .page-footer {
    display: none !important;
  }

  #quartz-root,
  .page {
    max-width: 100vw !important;
    width: 100vw !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  #quartz-body {
    display: grid !important;
    grid-template-columns: 320px minmax(0, 1fr) !important;
    grid-template-rows: 100vh !important;
    grid-template-areas: "grid-sidebar-left grid-center" !important;
    max-width: 100vw !important;
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
    gap: 0 !important;
  }

  #quartz-body .left.sidebar {
    padding: 2rem 1rem !important;
    height: 100vh !important;
    overflow-y: auto !important;
    box-sizing: border-box !important;
  }

  #quartz-body .center,
  #quartz-body article,
  #quartz-body .markdown-preview-view {
    max-width: 100% !important;
    width: 100% !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .embed-frame {
    display: block !important;
    width: 100% !important;
    height: 100vh !important;
    border: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  @media (max-width: 800px) {
    #quartz-body {
      grid-template-columns: 1fr !important;
      grid-template-rows: auto 1fr !important;
      grid-template-areas:
        "grid-sidebar-left"
        "grid-center" !important;
    }

    #quartz-body .left.sidebar {
      height: auto !important;
      padding: 1rem !important;
    }

    #quartz-body .center,
    #quartz-body article,
    #quartz-body .markdown-preview-view,
    .embed-frame {
      height: calc(100vh - 60px) !important;
    }
  }
</style>

<iframe class="embed-frame" src="../[folder-slug]/[file-slug]/assets/[filename].html"></iframe>