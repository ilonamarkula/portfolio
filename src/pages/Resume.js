import alppimaisema4 from "../alppimaisema4.jpeg";
import alppimaisema6 from "../alppimaisema6.jpeg";
import ilonaalppi1 from "../ilonaalppi1.jpeg";
import ilonaalppi3 from "../ilonaalppi3.jpeg";
import ilonaalppi4 from "../ilonaalppi4.jpeg";
import vildakahvila from "../vildakahvila.jpeg";
import vildakiero from "../vildakiero.jpeg";
import vildakirja from "../vildakirja.jpeg";
import vildapallas from "../vildapallas.jpeg";
import vildasateenkaari from "../vildasateenkaari.jpeg";
import lumipuuruka from "../lumipuuruka.jpeg";
import nakke from "../nakke.jpeg";

function Resume() {
  return (
    <div className="whole-museum">
      <p className="subheading">Vapaalla</p>

      <div className="museum">
        <img src={ilonaalppi1} className="museo" alt="" />
        <img src={vildakirja} className="museo" alt="" />
        <img src={alppimaisema6} className="museo" alt="" />

        <img src={vildakahvila} className="museo" alt="" />
        <img src={ilonaalppi3} className="museo" alt="" />
        <img src={vildakiero} className="museo" alt="" />

        <img src={alppimaisema4} className="museo" alt="" />
        <img src={nakke} className="museo" alt="" />
        <img src={ilonaalppi4} className="museo" alt="" />

        <img src={vildapallas} className="museo" alt="" />
        <img src={lumipuuruka} className="museo" alt="" />
        <img src={vildasateenkaari} className="museo" alt="" />
      </div>
    </div>
  );
}
export default Resume;
