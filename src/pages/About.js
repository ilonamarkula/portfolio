import meitsi from "../meitsi.png";

function About() {
  return (
    <div className="about-section">
      <p className="subheading">About me!</p>
      <p className="about-text">
        Moikka! Oon Ilona, vitun epätoivonen tytsy joka ois valmis myymään
        vaikka persettä et pääsee oman alan töihin en jaksa enää kaupan alan
        töitä!:)
      </p>

      <img src={meitsi} className="meitsi" alt="meitsi" />
    </div>
  );
}

export default About;
