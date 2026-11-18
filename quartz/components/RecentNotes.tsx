import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"
import { getEffectiveDates, formatShortDate } from "../util/customDates"
import { classNames } from "../util/lang"

interface FolderCrumb {
  name: string
  slug: FullSlug
}

function getFolderCrumbs(filePath?: string, slug?: string): FolderCrumb[] {
  if (!slug) return []
  const slugParts = slug.split("/")
  slugParts.pop()
  if (slugParts.length === 0) return []

  let displayParts: string[] = []
  if (filePath) {
    const normalized = filePath.replace(/^\.?\/?content\//, "")
    const parts = normalized.split("/")
    parts.pop()
    if (parts.length === slugParts.length) {
      displayParts = parts
    }
  }

  return slugParts.map((part, idx) => ({
    name: displayParts[idx] ?? part.replace(/-/g, " "),
    slug: slugParts.slice(0, idx + 1).join("/") as FullSlug,
  }))
}

const RecentNotes: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  if (fileData.slug !== "index") {
    return null
  }

  const pages = allFiles
    .filter((f) => {
      const slug = f.slug ?? ""
      return (
        slug !== "index" &&
        !slug.endsWith("/index") &&
        !slug.startsWith("private/") &&
        !slug.startsWith("templates/") &&
        f.frontmatter?.title
      )
    })
    .map((page) => {
      const { published, updated } = getEffectiveDates(page)
      const latestDate = updated ?? published ?? new Date(0)
      return { page, latestDate }
    })
    .sort((a, b) => b.latestDate.getTime() - a.latestDate.getTime())
    .slice(0, 5)

  if (pages.length === 0) return null

  return (
    <div class={classNames(displayClass, "recent-notes")}>
      <h3>Recent notes and updates</h3>
      <ul>
        {pages.map(({ page, latestDate }) => {
          const title = page.frontmatter?.title ?? page.slug
          const subtitle = page.frontmatter?.subtitle
          const crumbs = getFolderCrumbs(page.filePath, page.slug)
          const dateLabel = formatShortDate(latestDate)

          return (
            <li>
              {(dateLabel || crumbs.length > 0) && (
                <span class="recent-meta">
                  {dateLabel && <strong class="recent-date">{dateLabel}</strong>}
                  {dateLabel && crumbs.length > 0 && <span class="recent-sep"> · </span>}
                  {crumbs.map((crumb, idx) => (
                    <>
                      <a
                        href={resolveRelative(fileData.slug!, crumb.slug)}
                        class="recent-folder-link"
                      >
                        {crumb.name}
                      </a>
                      {idx < crumbs.length - 1 && <span class="recent-sep"> › </span>}
                    </>
                  ))}
                </span>
              )}
              <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal recent-title-link">
                {String(title)}
              </a>
              {subtitle && <p class="recent-subtitle">{String(subtitle)}</p>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

RecentNotes.css = `
.recent-notes {
  margin-top: 1.5rem;
}
.recent-notes h3 {
  margin: 0 0 0.85rem 0;
  font-size: 1.1rem;
}
.recent-notes ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.recent-notes li {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.9rem;
  margin-bottom: 0.9rem;
}
.recent-notes li:not(:last-child) {
  border-bottom: 1px solid color-mix(in srgb, var(--lightgray) 65%, transparent);
}
.recent-notes li:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
}
.recent-notes .recent-meta {
  font-size: 0.78rem;
  color: var(--gray);
  margin-bottom: 0.2rem;
}
.recent-notes .recent-date {
  font-weight: 700;
  color: var(--darkgray);
}
.recent-notes .recent-folder-link {
  font-weight: 400;
  color: var(--secondary);
  background: none !important;
  padding: 0 !important;
  text-decoration: none !important;
}
.recent-notes .recent-folder-link:hover {
  color: var(--tertiary);
  text-decoration: none !important;
}
.recent-notes .recent-title-link {
  font-weight: 600;
  width: fit-content;
}
.recent-notes .recent-subtitle {
  margin: 0.2rem 0 0 0;
  font-size: 0.9rem;
  color: var(--darkgray);
}
`

export default (() => RecentNotes) satisfies QuartzComponentConstructor
