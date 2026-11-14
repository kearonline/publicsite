---
title: Mayor Raman's first 100 days
draft: false
tags:
  - tracker
published: 2026-11-07
alias: first-100-days
---
<style>
  /* 1. Hide title, breadcrumbs, right sidebar, hr, and footer ONLY while .embed-frame is active */
  body:has(.embed-frame) .page-header,
  body:has(.embed-frame) .right.sidebar,
  body:has(.embed-frame) footer,
  body:has(.embed-frame) .center > hr,
  body:has(.embed-frame) .page-footer {
    display: none !important;
  }

  /* 2. DESKTOP (> 800px): Leave .left.sidebar width & right gap untouched, expand tool to right/bottom edges */
  @media (min-width: 801px) {
    body:has(.embed-frame) {
      overflow: hidden !important;
    }

    body:has(.embed-frame) #quartz-body {
      max-width: 100vw !important;
      padding-right: 0 !important;
      margin-right: 0 !important;
    }

    body:has(.embed-frame) #quartz-body .center {
      grid-column: 2 / -1 !important;
      display: flex !important;
      flex-direction: column !important;
      max-width: 100% !important;
      width: 100% !important;
      height: 100vh !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }

  /* 3. MOBILE (<= 800px): Leave #quartz-body and top header margins completely native */
  @media (max-width: 800px) {
    body:has(.embed-frame) #quartz-body .center {
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
      height: calc(100dvh - 5rem) !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }

  /* 4. Inner flex sizing so the iframe fills all vertical space above the banner */
  body:has(.embed-frame) article,
  body:has(.embed-frame) .markdown-preview-view {
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

  /* 5. Left-aligned bottom banner using Quartz's accent palette */
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
</style>

<iframe class="embed-frame" src="https://gdoc.pub/doc/e/2PACX-1vQ0hElZgHMrJp_DgtSbqynEMHl_MVYhzbJpGyT4jnXx8RjL3S4m802hgx7mDRXCtOhwpDyTIp1nYP9I"></iframe>

<div class="tool-banner">
  If this doesn't work, open the <a href="https://docs.google.com/document/d/e/2PACX-1vQ0hElZgHMrJp_DgtSbqynEMHl_MVYhzbJpGyT4jnXx8RjL3S4m802hgx7mDRXCtOhwpDyTIp1nYP9I/pub" target="_blank" rel="noopener">document</a> in a new tab.
</div>