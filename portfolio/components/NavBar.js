import Link from "next/link";

const NavBar = () => {
    return (
        <nav
            className="navbar mx-6 mt-6 pb-6"
            role="navigation"
            aria-label="main navigation"
            // style={{ borderBottom: "1px solid white" }}
        >
            <div className="navbar-brand">
                <a className="navbar-item is-size-3 has-text-weight-medium" href="/">
                    Georgia Xu
                </a>
            </div>
            <div className="navbar-menu is-active is-size-5">
                <div className="navbar-start">
                    <div className="navbar-item"></div>
                </div>

                <div className="columns">
                    <div className="navbar-end">
                        <a className="navbar-item" href="/#projects">Projects</a>
                    </div> 

                    <div className="navbar-end">
                        {/* TODO: Blogs? */}
                        <a className="navbar-item" href="/#blog">Blog</a>
                    </div>

                    <div className="navbar-end">
                        {/* TODO: Link to footer */}
                        <a className="navbar-item" href="/#footer">Contact</a>
                    </div>
                </div>
                
            </div>
        </nav>
    );
};

export default NavBar;
