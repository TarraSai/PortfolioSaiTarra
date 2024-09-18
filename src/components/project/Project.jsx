
import './project.css'
import {projectData} from '../Data'
function Projects() {
  

  return (
    <div className="container my-5" >
        <div className="text-center toppadding"><h1>My Projects</h1></div>
      {projectData.map((project, index) => (
        <div
          key={index}
          className="row  justify-content-center mb-4 pt-5"
          style={{ borderBottom: "1px solid #ddd " }}
        >
          <div className="col-md-3 pt-3 ">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="img-fluid border border-dark rounded-3"
            />
          </div>
          <div className="col-md-4">
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <a href={project.link} className="btn btn-primary pb-3">
              Visit Code →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
