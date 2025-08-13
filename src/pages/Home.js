import ilona2 from "../ilona2.png";
import "../App.css";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home">
      <Header isHome={true} />
      <img src={ilona2} className="me" alt="ilona2" />
    </div>
  );
}

export default Home;
/*const Komponentti = () => {
  return <p>Ilona Markula</p>;
};*/
