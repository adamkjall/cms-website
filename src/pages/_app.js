import Layout from "../components/Layout";

import "../styles/globals.css";
import "../styles/index.scss";
import "../styles/layout.scss";
import "../styles/navbar.scss";
import "../styles/footer.scss";

function App({ Component, pageProps }) {
  return (
    <Layout navigationProps={pageProps.navigationProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
