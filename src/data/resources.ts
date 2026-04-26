import { reverseArray } from "../helpers/array";

type Type = "article" | "integration" | "video" | "theme";

export interface Resource {
  date: string; // YYYY-MM-DD
  description: string;
  title: string;
  type: Type;
  url: string;
}

export const emojis: Record<Type, string> = {
  article: "📖",
  integration: "⚙️",
  video: "🍿",
  theme: "🦚",
};

const _resources: Resource[] = [
  {
    title: "Astro SEO: the definitive guide",
    description:
      "Eighteen years after 'WordPress SEO: the definitive guide,' here's the Astro version — the full SEO stack for 2026, from JSON-LD to agent discovery.",
    type: "article",
    url: "https://joost.blog/astro-seo-complete-guide/",
    date: "2026-04-26",
  },
  {
    title: "astro-llms-md",
    description:
      "Astro integration to generate llms.txt, llms-full.txt, and markdown files from your Astro site.",
    type: "integration",
    url: "https://github.com/tfmurad/astro-llms-md",
    date: "2026-04-26",
  },
  {
    title: "astro-click-to-source",
    description:
      "Astro integration for Alt+Click to open source files in your editor during development.",
    type: "integration",
    url: "https://github.com/invisible1988/astro-click-to-source",
    date: "2026-04-26",
  },
  {
    title: "Astro Candlelight",
    description: "A medieval manuscript theme for Astro Starlight.",
    type: "theme",
    url: "https://github.com/anaxite/astro-candlelight",
    date: "2026-04-26",
  },
  {
    title: "Dropping Astro's ClientRouter for web standards",
    description:
      "Astro's ClientRouter is a solid abstraction for complex apps. For a simple blog, it turned out to be a workaround for things the platform now does natively — and it was quietly breaking iOS Safari's Reader Mode.",
    type: "article",
    url: "https://joost.blog/replacing-astro-clientrouter/",
    date: "2026-04-26",
  },
];

export const resources = reverseArray(_resources);
