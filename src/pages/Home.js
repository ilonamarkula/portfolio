import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import ilona2 from "../ilona2.png";
import "../App.css";

function Home() {
  return (
    <div className="home">
      <h1 className="name">ILONA MARKULA</h1>
      <p className="title">Future Cyber Specialist</p>

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

      <a
        className="linkedin-button"
        href="https://www.linkedin.com/in/ilona-markula"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
      <img src={ilona2} className="me" alt="ilona2" />
    </div>
  );
}

export default Home;
