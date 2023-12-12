import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <div className="brand">
        <img src="/img/sony-logo.svg" alt="logo sony" />
      </div>
      <ul>
        <li>
          <a href="">Auriculares</a>
        </li>
        <li>
          <a href="">Televisores</a>
        </li>
        <li>
          <a href="">Camaras</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
