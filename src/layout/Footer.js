const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-left">
              {/* social */}
              <div className="social-links">
                  <a target="_blank" rel="noreferrer" href="https://github.com/tarupathak">
                    <i aria-hidden="true" className="fab fa-github" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/taru-pathak-747660247/">
                    <i aria-hidden="true" className="fab fa-linkedin" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.behance.net/tarupathak">
                    <i aria-hidden="true" className="fab fa-behance" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/PathakTaru2002">
                    <i aria-hidden="true" className="fab fa-twitter" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/taru_pathak/">
                    <i aria-hidden="true" className="fab fa-instagram" />
                  </a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">
              <div
                className="copyright-text"
              >
                © 2022 Taru Pathak. All Rights Reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
              <div
                className="copyright-text"
              >
                Developed by <strong>Taru Pathak</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
