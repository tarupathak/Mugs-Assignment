import Isotope from "isotope-layout";
import Link from "next/link";
import funds from "../../public/assets/Funds.png";
import blog from "../../public/assets/BlogSpeher.png";
import ccc from "../../public/assets/CCC.png";
import deafolio from "../../public/assets/Deafolio.png";
import shopify from "../../public/assets/Shopify.png";
import versatile from "../../public/assets/versatile.jpg";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-items", {
        itemSelector: ".works-col",
        //    layoutMode: "fitRows",
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
    //     return () => isotope.current.destroy();
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
        <div className="works-items works-list-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div className="works-item">
              <a>
                <span className="image">
                  <span className="img">
                    <Image src={funds} alt="funds" />
                    <span className="overlay" />
                  </span>
                </span>
                <span className="desc">
                  <span className="name">Funds4Good</span>
                  <span className="category">
                    I developed a frontend application for offering low/zero
                    interest loans and charity donations. Users can bookmark
                    loan requests, view applications, and apply by providing
                    reasons. The platform also validates recipients through
                    identity proofs to ensure authenticity.
                  </span>

                  <span>
                    <a href="https://github.com/Tech-Shreyansh/Funds4Good-WebApp-CodeX24">
                      {" "}
                      Github Link
                    </a>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div className="works-item">
              <a>
                <span className="image">
                  <span className="img">
                    <Image src={blog} alt="blog" />
                    <span className="overlay" />
                  </span>
                </span>
                <span className="desc">
                  <span className="name">BlogSpeher</span>
                  <span className="category">
                    Created a full-stack blog website enabling users to read,
                    create, and edit blogs with secure JWT token-based
                    authentication. Integrated React Router for smooth
                    navigation and offered RESTful APIs for efficient data
                    management. The platform ensures a seamless blogging
                    experience with robust security measures. Explore the
                    project on GitHub for further details.
                  </span>

                  <span>
                    <a href="https://github.com/tarupathak/BlogSphere">
                      Github Link
                    </a>
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div className="works-item">
              <a>
                <span className="image">
                  <span className="img">
                    <Image src={shopify} alt="shopify" />
                    <span className="overlay" />
                  </span>
                </span>
                <span className="desc">
                  <span className="name">Shopify</span>
                  <span className="category">
                    Built a full-stack shopping website integrating CRUD
                    features, React Router DOM, JWT authentication, RESTful
                    APIs, and MongoDB for data storage. The platform ensures
                    smooth navigation, secure user authentication, and efficient
                    data management. Explore the project on GitHub for further
                    insights.
                  </span>

                  <span>
                    <a href="https://github.com/tarupathak/Shopify-Frontend">
                      Github Frontend Link
                    </a>
                  </span>
                  <span>
                    <a href="https://github.com/tarupathak/Shopify-Backend">
                      Github Backend Link
                    </a>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div className="works-item">
              <a>
                <span className="image">
                  <span className="img">
                    <Image src={ccc} alt="ccc" />
                    <span className="overlay" />
                  </span>
                </span>
                <span className="desc">
                  <span className="name">Cloud Computing Cell Website</span>
                  <span className="category">
                    The website exhibits comprehensive event listings with a
                    registration portal, employing React JS, Rsuite, and
                    Bootstrap. Additionally, it highlights team member profiles,
                    focusing on their technical prowess. This platform offers a
                    seamless experience for event exploration and registration
                    while emphasizing the expertise of its team members.
                  </span>
                  <span>
                    <a href="https://github.com/tarupathak/CCC-Website">
                      Github Link
                    </a>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div className="works-item">
              <a>
                <span className="image">
                  <span className="img">
                    <Image src={deafolio} alt="deafolio" />
                    <span className="overlay" />
                  </span>
                </span>
                <span className="desc">
                  <span className="name">Deafolio</span>
                  <span className="category">
                    Created the frontend of a website where deaf individuals can
                    find jobs and explore various career opportunities. Built
                    using ReactJS and CSS, and integrated the backend using
                    Axios for seamless data communication. The site ensures
                    accessibility and a user-friendly experience for the deaf
                    community.
                  </span>

                  <span>
                    <a href="https://github.com/tarupathak/Deafolio">
                      Github Link
                    </a>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div className="works-item">
              <a>
                <span className="image">
                  <span className="img">
                    <Image src={versatile} alt="versatile" />
                    <span className="overlay" />
                  </span>
                </span>
                <span className="desc">
                  <span className="name">Versatile</span>
                  <span className="category">
                    Developed the frontend of an e-commerce website for tile
                    purchases using ReactJS, Rsuite, and CSS. Implemented
                    dynamic and responsive design features for an optimal user
                    experience. Integrated the backend using Axios for efficient
                    data fetching, ensuring seamless communication between the
                    client-side interface and the server.
                  </span>
                  <span>
                    <a href="https://github.com/tarupathak/Versatile.git">
                      Github Link
                    </a>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectIsotop;
