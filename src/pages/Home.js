import hymy from "../hymy.png";
import "../App.css";
import Socials from "../components/Socials";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="name">ILONA MARKULA</h1>
        <p className="title">Future Cyber Specialist</p>

        <nav className="menu-buttons">
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

        <Socials />
      </div>

      <img src={hymy} className="me" alt="ilona2" />
    </div>
  );
}

export default Home;
