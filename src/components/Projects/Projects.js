import { projects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.css";

const Projects = () => {
  // const [selection, setSelection] = useState("all");

  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      {/* <div className="projects__grid center">
        <span type="button" className="btn btn--outline">
          All
        </span>
        <span type="button" className="btn btn--outline">
          Personal
        </span>
        <span type="button" className="btn btn--outline">
          nca
        </span>
        <span type="button" className="btn btn--outline">
          Highmark
        </span>
      </div> */}

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={project} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
