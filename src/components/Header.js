import { useEffect, useState } from "react";

function Header() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const home = document.getElementById("home");
    const homeHeight = home?.offsetHeight || 0;

    const onScroll = () => {
      setHidden(window.scrollY < homeHeight);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`header-layout ${hidden ? "hidden" : "visible"}`}>
      <h1 className="name">ILONA MARKULA</h1>

      <nav className="menu-buttons">
        <a className="nav-button" href="#home">
          Home
        </a>

        <a className="nav-button" href="#about">
          About
        </a>
        <a className="nav-button" href="#resume">
          Resume
        </a>
        <a className="nav-button" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
