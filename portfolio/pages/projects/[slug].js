import fs from "fs/promises";
import path from "path";
import Image from "next/image";


export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "projects.json");
  const data = await fs.readFile(filePath);
  const projects = JSON.parse(data).projects;

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false }; // fallback: false ensures 404 for unknown slugs
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "projects.json");
  const data = await fs.readFile(filePath);
  const projects = JSON.parse(data).projects;

  const project = projects.find((p) => p.slug === params.slug);

  return { props: { project } };
}

const ProjectPage = ({ project }) => {
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
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
          <div className="tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="column is-one-third">
          <figure className="image">
            <Image src={project.image} alt={project.title} />
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
          style={{ marginTop: "20px" }}
        ></iframe>
      )}
    </section>
  );
};

export default ProjectPage;
