import Layout from "~/components/Layout";
import { getNavigationAndFooter } from "~/utils/contentful";

import "~/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export async function getStaticProps() {
  const layoutProps = await getNavigationAndFooter();

  return {
    props: {
      layoutProps,
    },
  };
}

export default App;
