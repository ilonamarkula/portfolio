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
            Mua kiinnostaa useat eri asiat ja voisin nähdä itseni monenlaisessa
            työssä. Kyberturvallisuus on kuitenkin noussut ykköseksi.
            <span className="dark-word">
              Tietoturvan parissa työskenteleminen tuntuisi yhteiskunnallisesti
              merkittävältä ja pääsisin hyödyntämään useita vahvuuksiani.
            </span>{" "}
            Uskon, että mun ongelmanratkaisukyvystä, matemaattisesta
            ajattelusta, kirjoitustaidosta, luovuudesta ja
            tunneälystä/ihmisosaamisesta olisi kaikista hyötyä. Olisi unelma
            päästä käyttämään juuri niitä osana omaa työtäni.
          </p>

          <p>
            Tää tulee olemaan mun ensimmäinen it-alan työpaikka. Mua täytyy siis
            opettaa. Multa kuitenkin löytyy valmiudet ja{" "}
            <span className="dark-word">halu oppia</span>, sosiaaliset taidot on
            kunnossa ja tiimityöskentely tapahtuu hyvässä hengessä. En ole
            ehtinyt tottua mihinkään tiettyyn tapaan tehdä asioita ja jo
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
            käyttänyt tekoälyä, kun kirjoitustaito ja luovuus tuntuu nykyään
            olevan valitettavan harvinaista. En kuitenkaan välttele tekoälyä,
            vaan hyödynnän sitä sopivissa paikoissa esim. oppimisen tukena. :){" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
