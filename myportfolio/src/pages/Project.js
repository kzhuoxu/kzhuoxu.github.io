import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Project = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // Assuming projects.json is in the public folder
        const response = await fetch('/projects.json');
        const data = await response.json();
        const foundProject = data.projects.find(p => p.slug === slug);
        setProject(foundProject);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <section className="hero is-small mx-6">
      <div className="hero-body columns is-vcentered">
        <div className="column is-two-thirds">
          <p className="is-size-1 has-text-weight-medium">{project.title}</p>
          <p className="is-size-4 has-text-weight-light pb-6">
            {project.description}
          </p>
          <div className="links">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="button is-primary mr-2"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button is-dark"
              >
                GitHub
              </a>
            )}
          </div>
          <div className="tags mt-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tag is-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="column is-one-third">
          <figure className="image">
            <img 
              src={project.image} 
              alt={project.title}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </figure>
        </div>
      </div>
      {project.iframeSrc && (
        <iframe
          src={project.iframeSrc}
          width="100%"
          height="800px"
          frameBorder="0"
          allowFullScreen
          title={project.title}
          style={{ marginTop: "20px" }}
        ></iframe>
      )}
    </section>
  );
};

export default Project;