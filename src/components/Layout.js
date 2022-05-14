import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ navigationProps, children }) => (
  <div className="layout">
    <Navbar navigationProps={navigationProps} />
    {children}
    <Footer />
  </div>
);

export default Layout;
