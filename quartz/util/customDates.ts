import { QuartzPluginData } from "../plugins/vfile"

export function parseFrontmatterDate(raw: unknown): Date | undefined {
  if (!raw) return undefined
  if (raw instanceof Date && !isNaN(raw.getTime())) return raw
  const str = String(raw).trim()
  if (!str) return undefined
  // Parse YYYY-MM-DD in local time to prevent off-by-one UTC shifts
  const ymd = str.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (ymd) {
    return new Date(Number(ymd[1]), Number(ymd[2]) - 1, Number(ymd[3]), 12, 0, 0)
  }
  const parsed = new Date(str)
  return isNaN(parsed.getTime()) ? undefined : parsed
}

export function getEffectiveDates(fileData: QuartzPluginData): {
  published?: Date
  updated?: Date
  hidePublished: boolean
  hideUpdated: boolean
} {
  const fm = (fileData.frontmatter ?? {}) as Record<string, unknown>

  const published =
    parseFrontmatterDate(fm.published) ??
    parseFrontmatterDate(fm.created) ??
    parseFrontmatterDate(fm.date) ??
    fileData.dates?.created ??
    fileData.dates?.published

  const updated =
    parseFrontmatterDate(fm.updated) ??
    parseFrontmatterDate(fm.modified) ??
    parseFrontmatterDate(fm.lastmod) ??
    fileData.dates?.modified

  const hidePublished = fm.hidePublished === true || fm.hidePublished === "true"
  const hideUpdated = fm.hideUpdated === true || fm.hideUpdated === "true"

  return { published, updated, hidePublished, hideUpdated }
}

export function formatShortDate(date?: Date): string {
  if (!date || isNaN(date.getTime()) || date.getTime() === 0) return ""
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
