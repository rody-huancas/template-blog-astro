import { getCollection } from "astro:content";

export async function getAllTags() {
  const post = await getCollection("blog");
  return Array.from(
    new Set(
      post
        .map((post) => post.data.tags)
        .flat()
        .sort()
    )
  );
}
