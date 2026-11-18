import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { classNames } from "../util/lang"

const PrevNext: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  if (!slug || slug === "index" || slug.endsWith("/index")) {
    return null
  }

  const lastSlash = slug.lastIndexOf("/")
  if (lastSlash === -1) return null
  const folder = slug.slice(0, lastSlash)

  const siblings = allFiles
    .filter((f) => {
      const s = f.slug ?? ""
      if (!s.startsWith(folder + "/") || s.endsWith("/index")) return false
      return !s.slice(folder.length + 1).includes("/")
    })
    .sort((a, b) => {
      const orderA = Number(a.frontmatter?.order ?? 999)
      const orderB = Number(b.frontmatter?.order ?? 999)
      if (orderA !== orderB) return orderA - orderB
      return (a.frontmatter?.title ?? a.slug ?? "").localeCompare(
        b.frontmatter?.title ?? b.slug ?? "",
      )
    })

  if (siblings.length < 2) return null

  const idx = siblings.findIndex((f) => f.slug === slug)
  const prev = idx > 0 ? siblings[idx - 1] : null
  const next = idx !== -1 && idx < siblings.length - 1 ? siblings[idx + 1] : null

  if (!prev && !next) return null

  return (
    <nav class={classNames(displayClass, "prev-next-nav")} aria-label="Series navigation">
      <div class="prev-link">
        {prev && (
          <a href={resolveRelative(slug, prev.slug!)} class="internal">
            <span class="label">← Previous</span>
            <span class="title">{String(prev.frontmatter?.title ?? prev.slug)}</span>
          </a>
        )}
      </div>
      <div class="next-link">
        {next && (
          <a href={resolveRelative(slug, next.slug!)} class="internal">
            <span class="label">Next →</span>
            <span class="title">{String(next.frontmatter?.title ?? next.slug)}</span>
          </a>
        )}
      </div>
    </nav>
  )
}

PrevNext.css = `
.prev-next-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
}
.prev-next-nav .prev-link,
.prev-next-nav .next-link {
  flex: 1;
}
.prev-next-nav .next-link {
  text-align: right;
}
.prev-next-nav a {
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
}
.prev-next-nav .label {
  font-size: 0.8rem;
  color: var(--gray);
  margin-bottom: 0.2rem;
}
.prev-next-nav .title {
  font-weight: 600;
  font-size: 0.95rem;
}
`

export default (() => PrevNext) satisfies QuartzComponentConstructor
