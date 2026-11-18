export interface FeaturedItem {
  /** Exact slug of the note (lowercase, hyphenated, no .md extension) */
  slug: string
  /** Optional custom label; if omitted, uses the note's frontmatter title */
  label?: string
}

export const featuredConfig = {
  /** Static badge text on the left */
  badge: "FEATURED",
  /** Duration in seconds for one full scroll cycle (higher = slower) */
  speedSeconds: 40,
  /** Ordered list of highlighted pages */
  /** Below slug add "label:" to customize */
  items: [
    {
      slug: "In-the-city/Los-Angeles-City-Hall-tracker/Mayor-Raman's-first-100-days",
    },
    {
      slug: "In-the-city/Civic-engagement-methods",
    },
    {
      slug: "In-the-city/Neighborhood-sign-generator",
    },
    {
      slug: "In-the-world/Path-to-60",
      label: "Democrats' 2028 path to 60 Senate seats"
    },
  ] satisfies FeaturedItem[],
}
