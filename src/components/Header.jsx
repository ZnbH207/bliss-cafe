import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="brand">
        <img src={logo} alt="Bliss Cafe Logo" className="header-logo" />
        <h1 className="logo">BLISS CAFE</h1>
      </NavLink>

      <input type="checkbox" id="menu-toggle" />

      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776;
      </label>

      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Menu
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
