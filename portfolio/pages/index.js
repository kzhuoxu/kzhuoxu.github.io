// import ClassLink from "../components/ClassLink";
import { useEffect, useState } from "react";
import ProjectDisplay from "../components/ProjectDisplay";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const response = await fetch("/api/projects");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <main>
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
                <Image src="/images/startup-life-concept-illustration.jpg" />
              </figure>
            </div>
          </div>
        </section>

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
                ></ProjectDisplay>
              ))}
            </div>
          </div>
        </section>

        <section></section>
      </main>
    </div>
  );
}
