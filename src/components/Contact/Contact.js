import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <a href={`mailto:${contact.email}`}>
      <span type="button" className="btn btn--outline">
        Email me
      </span>
    </a>
  );
};

export default Contact;
