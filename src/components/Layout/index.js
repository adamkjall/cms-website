import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

import styles from "./styles.module.scss";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
