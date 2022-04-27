import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getIndexPage } from "~/utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from "~/styles/index.module.scss";

const Index = ({ id, imageGrid, header, posts }) => (
  <>
    <Head>
      <title>Dogbasics - Puppy & dog traning</title>
      <meta name="description" content="Dogbasics - we love dogs" />
    </Head>

    <main className={styles.main}>
      <div className={styles.imageGrid}>
        {imageGrid.map((image, index) => (
          <div style={{ position: "relative" }}>
            <Image src={`https:${image.file.url}`} layout="fill" />
          </div>
        ))}
      </div>
      <h1>{header}</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div>
            <h2>{post.title}</h2>
            {documentToReactComponents(post.richText)}
            {post.link && <Link href={post.link}>{post.link}</Link>}
          </div>
        ))}
      </div>
    </main>
  </>
);

export async function getStaticProps() {
  const indexPage = await getIndexPage();

  return {
    props: {
      ...indexPage,
    },
  };
}

export default Index;
