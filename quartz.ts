import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as Component from "./quartz/components"

const config = await loadQuartzConfig()
export default config

const baseLayout = await loadQuartzLayout()

// Find ArticleTitle in your existing beforeBody list and insert Subtitle right after it
const beforeBody = [...baseLayout.defaultContentPageLayout.beforeBody]
const titleIndex = beforeBody.findIndex((c) => c.name === "ArticleTitle")
if (titleIndex !== -1) {
  beforeBody.splice(titleIndex + 1, 0, Component.Subtitle())
} else {
  beforeBody.unshift(Component.Subtitle())
}

export const layout = {
  ...baseLayout,
  defaultContentPageLayout: {
    ...baseLayout.defaultContentPageLayout,
    beforeBody,
  },
}
