import Socials from "../components/Socials";

function Contact() {
  return (
    <div className="contact">
      <p className="subheading">Ota ihmeessä yhteyttä :)</p>
      <a href="mailto:ilona.markula@gmail.com" className="email">
        ilona.markula@gmail.com
      </a>
      <Socials email />
    </div>
  );
}
export default Contact;
