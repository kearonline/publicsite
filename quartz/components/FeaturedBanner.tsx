import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"
import { featuredConfig } from "../featured"
import { classNames } from "../util/lang"

function normalizeSlug(s: string): string {
  return s.toLowerCase().replace(/^\/+|\/+$/g, "")
}

const FeaturedBanner: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const currentSlug = fileData.slug ?? ("index" as FullSlug)

  const resolvedItems = featuredConfig.items
    .map((item) => {
      const targetNorm = normalizeSlug(item.slug)
      const matched = allFiles.find((f) => normalizeSlug(f.slug ?? "") === targetNorm)
      const targetSlug = (matched?.slug ?? item.slug) as FullSlug
      const text = item.label ?? (matched?.frontmatter?.title ? String(matched.frontmatter.title) : item.slug)
      return {
        href: resolveRelative(currentSlug, targetSlug),
        text,
      }
    })
    .filter((i) => Boolean(i.text))

  if (resolvedItems.length === 0) return null

  const loopGroup = [...resolvedItems, ...resolvedItems, ...resolvedItems]

  return (
    <div
      class={classNames(displayClass, "featured-banner")}
      style={`--marquee-duration: ${featuredConfig.speedSeconds}s;`}
      role="region"
      aria-label="Featured pages"
    >
      <div class="featured-badge">{featuredConfig.badge}</div>
      <div class="featured-marquee-viewport">
        <div class="featured-marquee-track">
          <div class="featured-marquee-group">
            {loopGroup.map((item) => (
              <span class="featured-item">
                <a href={item.href}>{item.text}</a>
                <span class="featured-dot" aria-hidden="true">•</span>
              </span>
            ))}
          </div>
          <div class="featured-marquee-group" aria-hidden="true">
            {loopGroup.map((item) => (
              <span class="featured-item">
                <a href={item.href} tabIndex={-1}>{item.text}</a>
                <span class="featured-dot">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

FeaturedBanner.css = `
.featured-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 1.85rem;
  z-index: 9999;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--secondary);
  color: var(--light);
  font-size: 0.8rem;
  line-height: 1.3;
  overflow: hidden;
  user-select: none;
}

.featured-badge {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  background-color: var(--secondary);
  color: var(--light);
  border-right: 1px solid color-mix(in srgb, var(--light) 25%, transparent);
  z-index: 2;
}

.featured-marquee-viewport {
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0.35rem 0;
  mask-image: linear-gradient(to right, transparent 0%, black 1.25rem, black calc(100% - 1.25rem), transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 1.25rem, black calc(100% - 1.25rem), transparent 100%);
}

.featured-marquee-track {
  display: flex;
  width: max-content;
  animation: featured-scroll var(--marquee-duration, 55s) linear infinite;
}

.featured-banner:hover .featured-marquee-track,
.featured-banner:focus-within .featured-marquee-track {
  animation-play-state: paused;
}

.featured-marquee-group {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.featured-item {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}

.featured-item a {
  color: var(--light) !important;
  background: none !important;
  padding: 0 0.25rem !important;
  text-decoration: none !important;
  font-weight: 400 !important;
  transition: opacity 0.15s ease;
}

.featured-item a:hover {
  opacity: 0.85;
  text-decoration: underline !important;
}

.featured-dot {
  margin: 0 0.75rem;
  color: var(--light);
  opacity: 0.55;
  font-size: 0.7rem;
}

@keyframes featured-scroll {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured-marquee-track {
    animation: none;
  }
}
`

export default (() => FeaturedBanner) satisfies QuartzComponentConstructor
