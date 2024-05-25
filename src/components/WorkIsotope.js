import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const WorkIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-items", {
        itemSelector: ".works-col",

        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-6 sorting-branding sorting-photo ">
            <div className="works-item">
              <a>
                <span className="image">
                  <span className="img">
                    <img src="assets/images/work4.jpg" alt="Funds4Good" />
                    <span className="overlay" />
                  </span>
                </span>
                <span className="desc">
                  <span className="text-xl text-black">Funds4Good</span>
                  <span className="category">I developed a frontend application facilitating low or zero-interest loans and charity donations for those in need. The platform allows users to bookmark loan requests, view detailed loan applications, and apply for assistance by providing their reasons. It also includes a system for validating recipients through identity proof verification, ensuring the authenticity of applicants. This user-friendly interface aims to streamline the process of providing financial support to those who need it most. You can check out the project on GitHub: [GitHub Link].</span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-6 sorting-branding sorting-ui-ux-design ">
            <div className="works-item">
              <a>
                <span className="image">
                  <span className="img">
                    <img src="assets/images/work2.jpg" alt="Gooir" />
                    <span className="overlay" />
                  </span>
                </span>
                <span className="desc">
                  <span className="name">Gooir</span>
                  <span className="category">
                    Branding
                    <br />
                    UI UX Design
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-6 sorting-development sorting-ui-ux-design ">
            <div className="works-item">
              <Link href="/work-single">
                <a>
                  <span className="image">
                    <span className="img">
                      <img src="assets/images/work7.jpg" alt="Explore" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span className="name">Explore</span>
                    <span className="category">
                      Development
                      <br />
                      UI UX Design
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-6 sorting-branding sorting-photo ">
            <div className="works-item">
              <Link href="/work-single">
                <a>
                  <span className="image">
                    <span className="img">
                      <img src="assets/images/work1.jpg" alt="Mozar" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span className="name">Mozar</span>
                    <span className="category">
                      Branding
                      <br />
                      Photography
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-6 sorting-branding sorting-photo ">
            <div className="works-item">
              <Link href="/work-single">
                <a>
                  <span className="image">
                    <span className="img">
                      <img src="assets/images/single8.jpg" alt="Stay Fit" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span className="name">Stay Fit</span>
                    <span className="category">
                      Development
                      <br />
                      UI UX Design
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-6 sorting-branding sorting-photo ">
            <div className="works-item">
              <Link href="/work-single">
                <a>
                  <span className="image">
                    <span className="img">
                      <img src="assets/images/single6.jpg" alt="Kana" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span className="name">Kana</span>
                    <span className="category">
                      Development
                      <br />
                      Photography
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default WorkIsotope;
