import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space,
  accessToken,
});

export async function getIndexPage() {
  const entries = await client.getEntries({ content_type: "indexPage" });
  const navigationProps = await getNavigation();

  if (entries?.items) {
    const indexPage = entries.items[0];

    const { imageGrid, header, posts } = indexPage.fields;

    return {
      id: indexPage.sys.id,
      imageGrid: transformItems(imageGrid),
      header: header,
      posts: transformItems(posts),
      navigationProps,
    };
  }
}

export async function getNavigation() {
  const entry = await client.getEntry({ content_type: "navigationMenu" });

  if (entry?.fields) {
    const navigationProps = entry.fields.navigationElements;

    return navigationProps;
  }
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
