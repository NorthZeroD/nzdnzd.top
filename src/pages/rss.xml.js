import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "NZD's Blog",
    description: ":D",
    site: context.site,
    trailingSlash: false,
    stylesheet: "/rss/pretty-feed-v3.xsl",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      //   description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
