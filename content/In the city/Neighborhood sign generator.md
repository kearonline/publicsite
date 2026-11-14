---
title: Neighborhood sign generator
---
<style>
  body {
    overflow: hidden !important;
  }

  /* 1. Hide title, breadcrumbs, right sidebar, hr, and footer */
  .page-header,
  .right.sidebar,
  footer,
  .center > hr,
  .page-footer {
    display: none !important;
  }

  /* 2. Leave #quartz-body grid columns, margins, and gaps 100% untouched */
  #quartz-body {
    max-width: 100vw !important;
    padding-right: 0 !important;
    margin-right: 0 !important;
  }

  /* 3. Span .center across the tool area and stack iframe + banner vertically */
  #quartz-body .center {
    grid-column: 2 / -1 !important;
    display: flex !important;
    flex-direction: column !important;
    max-width: 100% !important;
    width: 100% !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* 4. Let the article wrapper grow to fill all space above the bottom banner */
  #quartz-body article,
  #quartz-body .markdown-preview-view {
    flex: 1 1 auto !important;
    display: flex !important;
    flex-direction: column !important;
    min-height: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .embed-frame {
    flex: 1 1 auto !important;
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    border: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* 5. Bottom banner: left-aligned, using Quartz's primary/secondary accent colors */
  .tool-banner {
    flex: 0 0 auto !important;
    width: 100% !important;
    box-sizing: border-box !important;
    background-color: var(--secondary) !important;
    color: var(--light) !important;
    padding: 0.35rem 0.75rem !important;
    font-size: 0.8rem !important;
    line-height: 1.3 !important;
    text-align: left !important;
  }

  .tool-banner a {
    color: var(--light) !important;
    text-decoration: underline !important;
    font-weight: 600 !important;
  }

  .tool-banner a:hover {
    opacity: 0.85 !important;
  }

  @media (max-width: 800px) {
    #quartz-body .center {
      grid-column: 1 / -1 !important;
      height: calc(100vh - 60px) !important;
    }
  }
</style>

<iframe class="embed-frame" src="../in-the-city/neighborhood-sign-generator/assets/overtype-6.html"></iframe>

<div class="tool-banner">
  If this doesn't work, open the <a href="../in-the-city/neighborhood-sign-generator/assets/overtype-6.html" target="_blank" rel="noopener">tool</a> in a new tab.
</div>