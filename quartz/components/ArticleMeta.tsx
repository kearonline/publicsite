import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { getEffectiveDates, formatShortDate } from "../util/customDates"
import { classNames } from "../util/lang"

const ArticleMeta: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const text = fileData.text
  if (!text) return null

  const { published, updated, hidePublished, hideUpdated } = getEffectiveDates(fileData)
  const parts: any[] = []

  if (!hidePublished && published) {
    const pubStr = formatShortDate(published)
    if (pubStr) {
      parts.push(<strong>Published {pubStr}.</strong>)
    }
  }

  if (!hideUpdated && updated) {
    const updStr = formatShortDate(updated)
    if (updStr) {
      parts.push(<span>Last updated {updStr}.</span>)
    }
  }

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  const displayedTime = Math.max(1, Math.ceil(wordCount / 200))
  parts.push(<span>{displayedTime} min read.</span>)

  return (
    <p class={classNames(displayClass, "article-meta")}>
      {parts.map((part, idx) => (
        <>
          {idx > 0 && " "}
          {part}
        </>
      ))}
    </p>
  )
}

ArticleMeta.css = `
.article-meta {
  margin: 0.25rem 0 1rem 0;
  color: var(--darkgray);
  font-size: 0.9rem;
}
.article-meta strong {
  color: inherit;
  font-weight: 700;
}
`

export default (() => ArticleMeta) satisfies QuartzComponentConstructor
