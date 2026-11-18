import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Subtitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const subtitle = fileData.frontmatter?.subtitle
  if (!subtitle) {
    return null
  }

  return <p class={classNames(displayClass, "article-subtitle")}>{String(subtitle)}</p>
}

Subtitle.css = `
.article-subtitle {
  margin: 0.25rem 0 1.25rem 0;
  font-size: 1.15rem;
  font-weight: 400;
  color: var(--darkgray);
  line-height: 1.4;
}
`

export default (() => Subtitle) satisfies QuartzComponentConstructor
