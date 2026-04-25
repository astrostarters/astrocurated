import { reverseArray } from "../helpers/array";

export interface Resource {
  date: string; // YYYY-MM-DD
  description: string;
  title: string;
  type: "article" | "integration" | "video";
  url: string;
}

const _resources: Resource[] = [
  {
    title: "My First Steps as an Astronaut",
    description:
      "The advantages of using the web framework Astro to manage my web dev blog.",
    url: "https://www.oidaisdes.org/blog/astro-framework-first-steps/",
    date: "2026-4-23",
    type: "article",
  },
  {
    title: "Dropping Astro's ClientRouter for web standards",
    description:
      "Astro's ClientRouter is a solid abstraction for complex apps. For a simple blog, it turned out to be a workaround for things the platform now does natively — and it was quietly breaking iOS Safari's Reader Mode.",
    url: "https://joost.blog/replacing-astro-clientrouter/",
    date: "2026-4-23",
    type: "article",
  },
  {
    title: "astro-llms-md",
    description:
      "Astro integration to generate llms.txt, llms-full.txt, and markdown files from your Astro site.",
    url: "https://github.com/tfmurad/astro-llms-md",
    date: "2026-4-23",
    type: "integration",
  },
  {
    title: "Motion-Heavy Astro + Svelte Portfolio with 100 Lighthouse",
    description:
      "Discover how I built a motion-heavy Astro + Svelte portfolio with Sanity, Tailwind and AI (Codex, Claude Code, Kilo Code) while scoring 100/100 in Lighthouse.",
    url: "https://www.shuvoanirbanroy.com/blog/motion-heavy-astro-svelte-portfolio-lighthouse-100",
    date: "2026-4-23",
    type: "article",
  },
];

export const resources = reverseArray(_resources);
