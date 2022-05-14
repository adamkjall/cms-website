const Navbar = ({ navigation }) => (
  <nav className="navbar">
    <ul>
      {navigation?.categories.map((category) => (
        <li>{category?.name}</li>
      ))}
    </ul>
    <h1>Navbar</h1>
  </nav>
);

export default Navbar;
