import { Link } from "react-router-dom";

const ProjectDisplay = ({ project }) => {
  const tagIcons = {
    Python: "fab fa-python",
    JavaScript: "fab fa-js-square",
    HTML: "fab fa-html5",
    CSS: "fab fa-css3-alt",
    React: "fab fa-react",
    NodeJS: "fab fa-node-js",
    SQL: "fas fa-database",
    R: "fas fa-chart-bar",
    Pandas: "/icons/Pandas.png",
    ArcGIS: "/icons/arcgis.png",
    StoryMaps: "/icons/storymaps.png",
  };

  return (
    <div className="column is-half">
      <Link to={`/projects/${project.slug}`}>
        <figure className="image is-5by4">
          {/* Replace next/image with a standard img */}
          <img
            src={project.image}
            alt={project.title}
            // style={{ }}
          />
        </figure>
        <p className="is-size-2 has-text-weight-medium mt-4 has-text-primary">
          {project.title}
        </p>
        <p className="is-size-5">{project.description}</p>
        <div className="field is-grouped is-multiline mt-4">
          {project.technologies.map((tag, index) => (
            <div className="control" key={index}>
              <div className="tags has-addons">
                {tagIcons[tag] && tagIcons[tag].startsWith("/") ? (
                  // Render custom icon
                  <span className="tag is-primary">
                    <img
                      src={tagIcons[tag]}
                      alt={tag}
                      style={{ width: "15px", height: "15px" }}
                    />
                  </span>
                ) : (
                  // Render FontAwesome icon
                  <span className="tag is-dark">
                    <span className="icon">
                      <i className={tagIcons[tag] || "fas fa-tag"}></i>
                    </span>
                  </span>
                )}
                <span className="tag is-primary is-light">{tag.trim()}</span>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ProjectDisplay;
