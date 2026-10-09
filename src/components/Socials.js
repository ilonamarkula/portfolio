import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Socials({ email }) {
  return (
    <div className="socials">
      <a
        className="icon-button"
        href="https://www.linkedin.com/in/ilona-markula"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        className="icon-button"
        href="https://github.com/ilonamarkula"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>

      {email && (
        <a
          className="email-icon"
          href="mailto:ilona.markula@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail size={34} />
        </a>
      )}
    </div>
  );
}

export default Socials;
