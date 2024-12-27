const ProjectDisplay = ({ project }) => {
  return (
    // TODO: add tag and description to the project display
      <div className="column is-half">
        <figure className="image is-5by4">
          <img src={project.image} />
        </figure>
        <p className="is-size-2 has-text-weight-medium mt-4">{project.title}</p>
      </div>
  );
};

export default ProjectDisplay;