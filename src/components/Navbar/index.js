import styles from "./styles.module.scss";

const Navbar = ({ navigationProps }) => (
  <nav className={styles.navbar}>
    <ul>
      {navigationProps.map((navigationData) => (
        <li>{navigationData.fields.title}</li>
      ))}
    </ul>
    <h1>Navbar</h1>
  </nav>
);

export default Navbar;
