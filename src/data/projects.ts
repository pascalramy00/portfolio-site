import type { Project } from "@/types";

import {
  WordPress,
  WooCommerce,
  WPML,
  RankMath,
  NextJS,
  TailwindCSS,
  FramerMotion,
  Vercel,
  ReactJS,
  TypeScript,
  NodeJS,
  Prisma,
  Zod,
  PostgreSQL,
} from "./technologies";

export const projects: Project[] = [
  {
    title: "Dashly",
    description: "Story-first SaaS reporting platform",
    story:
      "Dashly is a narrative reporting platform for creating structured, publishable reports with rich storytelling and computed data snapshots.",
    features: [
      "story-first reporting",
      "narrative block editor",
      "computed data blocks",
      "snapshot-based publishing",
      "immutable published snapshots",
      "responsive UI",
    ],
    videoUri: "/videos/dashly_demo.mp4",
    stack: [
      NextJS,
      ReactJS,
      TypeScript,
      TailwindCSS,
      NodeJS,
      PostgreSQL,
      Prisma,
      Zod,
      Vercel,
    ],
    date: new Date("December 2025"),
    url: "https://www.dashly-demo.dev",
  },
  {
    title: "My Portfolio",
    description: "Next.js Portfolio Site",
    story:
      "This is a story. It all started when dr.peabrain drew me at my desk.",
    features: ["animated", "dark mode", "responsive", "interactive"],
    videoUri: "/videos/portfolio_site_demo_encoded.mp4",
    stack: [NextJS, ReactJS, TypeScript, TailwindCSS, FramerMotion, Vercel],
    date: new Date("January 2025"),
    url: "https://pascalramy.com",
  },
  {
    title: "New Milanes",
    description: "Wordpress E-Commerce Site",
    story:
      "Hired by CAPi, a digital creative agency, to build their design for New Milanes, an italian fashion brand.",
    features: [
      "localization",
      "automated label printing",
      "dynamic tax calculation",
      "deep customization",
    ],
    videoUri: "/videos/new_milanes_demo_encoded.mp4",
    stack: [WordPress, WooCommerce, WPML, RankMath],
    date: new Date("December 2024"),
    url: "https://newmilanes.com",
  },
];
