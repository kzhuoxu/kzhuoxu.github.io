import { useEffect, useState } from "react";
import ProjectDisplay from "../components/ProjectDisplay";

const Home = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/projects.json"); // Assuming `projects.json` is in the `public/` folder
      const data = await response.json();
      setProjects(data.projects || []); // Adjust this based on your JSON structure
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="hero is-small mx-6">
          <div className="hero-body columns is-vcentered">
            <div className="column is-two-thirds">
              <p className="is-size-1 has-text-weight-medium">
                Georgia Xu is a full-stack data scientist that turns
                data into insights.
              </p>
            </div>
            <div className="column is-one-third">
              <figure className="image">
                <img
                  src="/images/startup-life-concept-illustration.jpg"
                  alt="Startup Life Illustration"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="hero is-medium is-info">
          <div className="hero-body is-vcentered mx-6">
            <div className="columns">
              <p className="column is-half is-size-2 has-text-weight-medium">
                Recent Projects
              </p>
            </div>
            <div className="columns is-multiline is-8 mt-6">
              {projects.map((project) => (
                <ProjectDisplay
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
