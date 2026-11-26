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
      slug: "Running-logs/Mayor-Raman's-first-100-days",
    },
    {
      slug: "Reference-libraries/Civic-engagement",
      label: "Civic engagement methods",
    },
        {
      slug: "Reference-libraries/Homeless-services",
      label: "Homeless services ecosystem",
    },
        {
      slug: "Reference-libraries/Nonprofit-rolodex",
      label: "Local nonprofit rolodex",
    },
    {
      slug: "Open-tools/Neighborhood-sign-generator",
    },
  ] satisfies FeaturedItem[],
}
