import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "/Users/kevin/publicsite/quartz/components/types"
import { classNames } from "/Users/kevin/publicsite/quartz/util/theme"

function Subtitle({ fileData, displayClass }: QuartzComponentProps) {
  // Grab the dynamic subtitle from the page frontmatter
  const subtitle = fileData.frontmatter?.subtitle

  if (subtitle) {
    return <p class={classNames(displayClass, "page-subtitle")}>{subtitle}</p>
  }
  return null
}

Subtitle.css = `
.page-subtitle {
  font-size: 0.9rem;
  color: var(--gray);
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
  font-style: italic;
}
`

export default (() => Subtitle) satisfies QuartzComponentConstructor