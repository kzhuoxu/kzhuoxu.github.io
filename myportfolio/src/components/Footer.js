const Footer = () => {
    return (
      <footer className="mx-6 mt-6 pb-6">
        <div className="is-size-3 has-text-weight-medium">Georgia Xu</div>
        <div className="columns is-vcentered mt-6">
          <div className="column is-one-quarter is-size-6">
            <div>Cornell Tech</div>
            <div>New York City, NY</div>
          </div>
          <div className="column is-one-quarter is-size-6">
            <div>
              <a
                href="https://github.com/kzhuoxu"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/zhuoqi-xu-2205891a4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p>
          © 2024 Georgia Xu. Powered by
          <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
            {" "}
            Bulma
          </a>
          .
        </p>
      </footer>
    );
  };
  
  export default Footer;
  