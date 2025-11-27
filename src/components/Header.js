import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import App from "../App";
import { FaLinkedin } from "react-icons/fa";
import ilona2 from "../ilona2.png";
import { SlSocialLinkedin } from "react-icons/sl";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className={`Header ${isHome ? "home-layout" : "default-layout"}`}>
      <h1 className="name">ILONA MARKULA</h1>
      {isHome && <p className="title">Future Cyber Specialist</p>}

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

      {isHome && (
        <>
          <a
            className="linkedin-button"
            href="https://www.linkedin.com/in/ilona-markula"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <img src={ilona2} className="me" alt="ilona2" />
        </>
      )}
    </header>
  );
}

export default Header;

/*<FaLinkedin size={30} />*/
