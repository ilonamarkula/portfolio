function About() {
  return (
    <div className="about-section">
      <p className="subheading">Mitkä nettisivut nämä on??</p>

      <p className="about-text">
        Etsin mun ensimmäistä it-alan työpaikkaa. Tein nää sivut, jotta oppisin
        lisää web-ohjelmoinnista ja mulla ois paikka jossa näyttää osaamista.
        Täällä voin myös tuoda mun persoonaa helposti esiin.
      </p>

      <p className="subheading">Minusta</p>

      <div className="about-row">
        <div className="about-text">
          <p>
            Kirjoittaisin tähän mielelläni esseen siitä, kuinka maailmasta
            tehtäisiin parempi paikka tai kuinka ihana asia rakkaus on, mutta
            mun kannattaa tosiaan varmaan kirjoittaa ennemmin siitä, miksi mut
            kannattais palkata töihin..
          </p>

          <p>
            {" "}
            Tykkään aivoistani. Palaset loksahtavat niissä nopeasti kohdilleen
            ja siksi oonkin nopea oppimaan.{" "}
            <span className="dark-word">
              Osaan yhdistellä sieltä täältä oppimiani asioita yhdeksi
              kokonaisuudeksi
            </span>
            . Nautin ongelmanratkaisusta, liittyi se mihin tahansa. Tunnen
            itseni hyvin, tiedän tavat, joilla opin parhaiten ja osaan hyödyntää
            niitä. Jos en osaa jotain, kysyn apua enkä jää pulaan.
          </p>
        </div>
      </div>

      <div className="about-row">
        <div className="about-text">
          <p>
            {" "}
            Ajattelin aiemmin, että mun kirous työelämässä tulee olemaan se,
            miten mua kiinnostaa niin moni eri asia, enkä malttaisi valita vain
            yhtä. Nyt oon kuitenkin tajunnut, että kiinnostus ja uteliaisuus
            monia asioita kohtaan sekä monipuolinen osaaminen on mun vahvuus.{" "}
            <span className="dark-word">
              Ehkä mun ei tarvitsekaan löytää vain yhtä asiaa, jossa olisin
              erityisen hyvä, vaan tehtävä, jossa mun erilaisista vahvuuksista
              on hyötyä
            </span>
            . Unelmatyössäni pääsisin käyttämään mun ongelmanratkaisukykyä,
            matemaattista ajattelua, kirjoitustaitoa, luovuutta ja
            tunneälyä/ihmisosaamista .{" "}
          </p>
        </div>
      </div>
      <div className="about-row">
        <div className="about-text">
          <p>
            {" "}
            Tää tulee olemaan mun ensimmäinen it-alan työpaikka. Mua täytyy siis
            opettaa. Multa kuitenkin löytyy valmiudet ja halu oppia, sosiaaliset
            taidot on kunnossa ja tiimityöskentely tapahtuu hyvässä hengessä. En
            ole ehtinyt tottua mihinkään tiettyyn tapaan tehdä asioita ja jo
            opitusta on tunnetusti vaikeampi oppia pois.{" "}
            <span className="dark-word">
              Saatte opettaa mulle just teidän tavat ja tyylit tehdä asiat
            </span>
            .{" "}
          </p>
        </div>
      </div>
      <div className="about-row">
        <div className="about-text">
          <p>
            {" "}
            Lisäksi haluan loppuun flexata, etten tän tekstin kirjoittamiseen
            käyttänyt tekoälyä, kun se tuntuu nykyään olevan valitettavan
            harvinaista. Rakastan kirjoittamista ja lukemista, ja kirjoitustaito
            taitaa olla tälläkin alalla plussaa. :){" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
