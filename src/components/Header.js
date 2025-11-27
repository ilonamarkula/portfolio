import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  if (isHome) {
    return null;
  }
  return (
    <header className="header-layout">
      <h1 className="name">ILONA MARKULA</h1>

      <nav className="menu-buttons">
        <Link className="nav-button" to="/">
          Home
        </Link>
        <Link className="nav-button" to="/about">
          About
        </Link>
        <Link className="nav-button" to="/resume">
          Resume
        </Link>
        <Link className="nav-button" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
