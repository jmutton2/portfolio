import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        <a href="/resume.pdf">
          <span type="button" className="btn btn--outline">
            Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
