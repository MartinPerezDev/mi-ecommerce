import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="brand">
        <img src="/img/sony-logo.svg" alt="logo sony" />
      </Link>
      <ul>
        <li>
          <Link to="/categorias/auriculares">Auriculares</Link>
        </li>
        <li>
          <Link to="/categorias/televisores">Televisores</Link>
        </li>
        <li>
          <Link to="/categorias/camaras">Camaras</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
