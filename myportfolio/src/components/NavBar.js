import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar mx-6 mt-6 pb-6"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-3 has-text-weight-medium">
          Georgia Xu
        </Link>
      </div>
      <div className="navbar-menu is-active is-size-5">
        <div className="navbar-start">
          <div className="navbar-item"></div>
        </div>

        <div className="columns">
          <div className="navbar-end">
            <Link to="/#projects" className="navbar-item">
              Projects
            </Link>
          </div>

          <div className="navbar-end">
            {/* LinkedIn is an external link */}
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/zhuoqi-xu-2205891a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="navbar-end">
            {/* GitHub is an external link */}
            <a
              className="navbar-item"
              href="https://github.com/kzhuoxu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
