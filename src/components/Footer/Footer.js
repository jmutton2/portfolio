import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../../portfolio";
import Contact from "../Contact/Contact";
import "./Footer.css";
import { contact } from "../../portfolio";
import "../Contact/Contact.css";

const Footer = () => {
  const { resume, social } = about;
  return (
    <footer className="footer">
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn btn--outline">
          Email me
        </span>
      </a>
      <div>
        <a href={social.github} aria-label="github" className="link link--icon">
          <GitHubIcon />
        </a>
        <a
          href={social.linkedin}
          aria-label="linkedin"
          className="link link--icon"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
