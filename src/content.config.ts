import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    textAlign: z.enum(["start", "center", "end"]).default("start"),
    // description: z.string(),
    // author: z.string(),
    // image: z.object({
    //   url: z.string(),
    //   alt: z.string(),
    // }),
    // tags: z.array(z.string()),
  }),
});
export const collections = { blog };
