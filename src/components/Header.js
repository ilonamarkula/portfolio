import { Link } from "react-router-dom";
import App from "../App";

function Header({ isHome }) {
  return (
    <header className={`Header ${isHome ? "home-layout" : "default-layout"}`}>
      <h1 className="name">ILONA MARKULA</h1>
      {isHome && <p className="title">Future Cyber Specialist</p>}
      <nav className="menu-buttons">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
