import Layout from "~/components/Layout";

import "~/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Layout navigationProps={pageProps.navigationProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
