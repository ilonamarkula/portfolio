import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Header() {
  const [hidden, setHidden] = useState(true);
  const { width } = useWindowDimensions();

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
      <a className="name" href="#home">
        ILONA MARKULA
      </a>

      <nav className="menu-buttons">
        <a className="nav-button" href="#home">
          Koti
        </a>
        <a className="nav-button" href="#about">
          Tietoa
        </a>
        <a className="nav-button" href="#resume">
          Museo
        </a>
        <a className="nav-button" href="#contact">
          Ota yhteyttä
        </a>
      </nav>
      {width < 667 && (
        <a href="#home">
          <FaArrowUp size={30} className="arrow" />
        </a>
      )}
    </header>
  );
}

export default Header;
