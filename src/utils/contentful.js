import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space,
  accessToken,
});

export async function getIndexPage() {
  const entries = await client.getEntries({ content_type: "indexPage" });
  if (entries?.items) {
    const indexPage = entries.items[0];

    const { imageGrid, header, posts } = indexPage.fields;

    return {
      id: indexPage.sys.id,
      imageGrid: transformItems(imageGrid),
      header: header,
      posts: transformItems(posts),
    };
  }
}

export async function getNavigationAndFooter() {
  const entry = await client.getEntry("2GdzQwUHZE6MJxUTbtIpoU");
  console.log("entry", entry);
}

// helpers
const transformItems = (items) =>
  items
    ? items.map((item) => ({
        id: item.sys.id,
        ...item.fields,
      }))
    : [];

const transformItem = (item) => ({
  id: item.sys.id,
  ...item.fields,
});
