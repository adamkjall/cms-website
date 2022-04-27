import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

import styles from "./styles.module.scss";

const Layout = ({ navigationProps, children }) => (
  <div className={styles.layout}>
    <Navbar navigationProps={navigationProps} />
    {children}
    <Footer />
  </div>
);

export default Layout;
