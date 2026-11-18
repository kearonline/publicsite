import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { getEffectiveDates, formatShortDate } from "../util/customDates"
import { classNames } from "../util/lang"

const ArticleMeta: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const text = fileData.text
  if (!text) return null

  const { published, updated, hidePublished, hideUpdated } = getEffectiveDates(fileData)
  const segments: any[] = []

  if (!hidePublished && published) {
    const pubStr = formatShortDate(published)
    if (pubStr) {
      segments.push(
        <strong class="meta-phrase">Published {pubStr}.</strong>,
      )
    }
  }

  if (!hideUpdated && updated) {
    const updStr = formatShortDate(updated)
    if (updStr) {
      segments.push(
        <span class="meta-phrase">Last updated {updStr}.</span>,
      )
    }
  }

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  const displayedTime = Math.max(1, Math.ceil(wordCount / 200))
  segments.push(<span class="meta-phrase">{displayedTime} min read.</span>)

  return (
    <p class={classNames(displayClass, "article-meta")}>
      {segments}
    </p>
  )
}

ArticleMeta.css = `
.article-meta {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.35rem;
  row-gap: 0.15rem;
  margin: 0.25rem 0 1rem 0;
  color: var(--darkgray);
  font-size: 0.84rem;
  line-height: 1.4;
}
.article-meta strong {
  color: inherit;
  font-weight: 700;
}
.article-meta .meta-phrase {
  white-space: nowrap;
}
`

export default (() => ArticleMeta) satisfies QuartzComponentConstructor
