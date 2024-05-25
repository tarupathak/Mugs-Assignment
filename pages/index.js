import dynamic from "next/dynamic";
import Link from "next/link";
import ContactForm from "../src/components/ContactForm";
import TestimonialSlider from "../src/components/TestimonialSlider";
import Layout from "../src/layout/Layout";

const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section className="section section-started">
        <div className="container">
          {/* Hero Started */}
          <div className="hero-started">
            <div className="slide">
              <img src="assets/images/profile.jpg" alt="" />
              <span className="circle circle-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="749px"
                  height="375px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#ff8059"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#3aafc9"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b9d1e4"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="121px"
                  height="241px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#676cdb"
                    d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="232px"
                  height="117px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 208, 65)"
                    d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                  />
                </svg>
              </span>
            </div>
            <div className="content">
              <div className="titles">
                <div className="subtitle">
                  FULLSTACK DEVELOPER AND UI/UX DESIGNER
                </div>
                <h2 className="title">Taru Pathak</h2>
              </div>
              <div className="description">
                <p>
                  I am a developer proficient in both front-end and back-end
                  technologies, as well as a UI/UX designer, residing in the
                  Delhi NCR region.
                </p>
               
              </div>
            </div>
            <div className="info-list">
              <ul>
                <li>
                  Born in <strong>Prayagraj</strong>
                </li>
                <li>
                  Experience <strong>Fresher</strong>
                </li>
                <li>
                  Date of Birth <strong>19 October 2002</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-1"
        id="about-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">About Me</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
              {/* Section numbers */}
              <div className="numbers-items">
                <div className="numbers-item">
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-check-circle" />
                  </div>
                  <div className="num">6</div>
                  <div className="title">
                    Completed <br />
                    Project
                  </div>
                </div>
                <div className="numbers-item">
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-smile-beam" />
                  </div>
                  <div className="num">4</div>
                  <div className="title">
                    Happy <br />
                    Clients
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Section Profile */}
              <div className="profile-box">
                <div className="text">
                  <p>
                    Hi there! I'm Taru Pathak, a passionate third-year BTech
                    student with a strong background in Full Stack Development.
                  </p>
                  <p>
                    As a Full Stack Developer, I specialize in crafting dynamic
                    and user-friendly web and mobile applications. My expertise
                    lies in building sleek and responsive front-end experiences
                    using React.js and React Native.On the back-end, I harness
                    the power of Node.js and Express.js to create robust and
                    scalable server-side solutions, ensuring seamless
                    integration between the front and back ends of my projects.
                    I'm currently on the lookout for exciting opportunities in
                    the field of front-end development. If you're seeking a
                    developer who can transform your ideas into engaging and
                    interactive user interfaces, feel free to connect with me!
                  </p>

                  <a href="#contact-section" className="btn">
                    <span>Contact Me</span>
                  </a>
                  {/* <div className="signature">
                    <img src="assets/images/signature.png" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-parallax section-parallax-2"
        id="resume-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">My Resume</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div className="text">
                <p>
                  As a seasoned frontend developer, I bring expertise in
                  React.js, Next.js, Tailwind CSS, and responsive web design,
                  cultivated through impactful roles at Neolen Technologies,
                  Localville, and Srchout Software. My proficiency in crafting
                  visually appealing and user-friendly interfaces has
                  consistently elevated the overall user experience across
                  diverse projects, showcasing my dedication to delivering
                  high-quality code within specified timelines. On the backend,
                  I command a robust skill set encompassing MongoDB, Express.js,
                  and Node.js. This comprehensive stack empowers me to
                  seamlessly integrate frontend and backend components, ensuring
                  the development of scalable and resilient applications. My
                  adeptness in React Native further extends my capabilities to
                  encompass holistic mobile app development.
                </p>
              </div>
              {/* Skills */}
              <div className="skills-items">
                <div className="p-title">SKILLS</div>
                <div className="skills-item">
                  <div className="name">ReactJS and NextJS</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">NodeJS and ExpressJS</div>
                  <div className="dots dots-80">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">80%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">HTML & CSS</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Javascript</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Git/Github</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Redux</div>
                  <div className="dots dots-90">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">90%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Wordpress</div>
                  <div className="dots dots-80">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">80%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">C/C++</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">MongoDB</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">Git/Github</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
                <div className="skills-item">
                  <div className="name">C/C++</div>
                  <div className="dots dots-95">
                    <div className="dots-row">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="value">
                    <span className="num">95%</span>
                  </div>
                </div>
              </div>
              {/* Services */}
              <div className="p-title">SERVICES</div>
              <div className="services-items">
                <div className="services-col">
                  <div className="services-item">
                    <div className="icon">
                      <i aria-hidden="true" className="fab fa-chrome" />
                    </div>
                    <div className="title">Web development</div>
                    <div className="text">
                      <p>
                        Modern and mobile-ready website that will help you reach
                        all of your marketing.
                      </p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div>
                <div className="services-col">
                  <div className="services-item">
                    <div className="icon">
                      <i aria-hidden="true" className="fab fa-soundcloud" />
                    </div>
                    <div className="title">UI/UX Designing</div>
                    <div className="text">
                      <p>Designing web and app pages, wireframing etc.</p>
                    </div>
                    <a href="#contact-section" className="lnk">
                      order now
                    </a>
                  </div>
                </div>
              </div>
              {/* History */}
              <div className="history-left">
                <div className="history-items">
                  <div className="p-title">EDUCATION</div>
                  <div className="history-item">
                    <div className="date">2019-2021</div>
                    <div className="name">Class 11th and 12th</div>
                    <div className="subname">D.P. Public School</div>
                  </div>
                  <div className="history-item">
                    <div className="date">2021-2025</div>
                    <div className="name">
                      Dr. APJ Abdul Kalam Technical University
                    </div>
                    <div className="subname">
                      Bachelor of Technology (Electronics and Communication
                      Engineering)
                    </div>
                    <div className="subname">Ghaziabad</div>
                  </div>
                </div>
              </div>
              <div className="history-right">
                <div className="history-items">
                  <div className="p-title">EXPERIENCE</div>
                  <div className="history-item">
                    <div className="date">
                      October 2023 - March 2023 (Remote)
                    </div>
                    <div className="name">Neolen Technologies.</div>
                    <div className="subname">Frontend Developer</div>
                    <div className="text">
                      <p>
                        Elevated a sleek company website UI designed in Figma
                        using Next.js, Tailwind CSS, Bootstrap, Rsuite, and
                        Axios for seamless API integration.
                      </p>
                    </div>
                  </div>
                  <div className="history-item">
                    <div className="date">May 2023 - June 2023</div>
                    <div className="name">LocalVille</div>
                    <div className="subname">React Developer</div>
                    <div className="text">
                      <p>
                        Crafted a responsive company website UI with ReactJS,
                        integrating backend APIs via Axios, and harmonizing
                        design coherence using Rsuite, Bootstrap, and MUI,
                        collaboratively implemented through Figma.
                      </p>
                    </div>
                  </div>
                  <div className="history-item">
                    <div className="date">SRL Life</div>
                    <div className="name">December 2022 - January 2023</div>
                    <div className="subname">
                      Frontend Developer and UI/UX Designer
                    </div>
                    <div className="text">
                      <p>
                        Developed the SRL Life website interface on WordPress
                        and Elementor, seamlessly integrating Figma, Canva, and
                        Adobe Photoshop for cohesive design and content
                        consistency, ensuring a unified and functional online
                        presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear" />
              {/* Button CV */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/10INXt1xUBZaxJXS4oKqKm4zKArJLYIkW/view?usp=sharing"
                className="btn"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-5"
        id="works-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">My Projects</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div className="text">
                <p>
                  A Collection of my favorites project I’ve developed recently.
                  Feeling great while sharing here.
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop />
        </div>
      </section>
      
      <section className="section no-padding-top section-parallax section-parallax-4">
        <div className="container">
        <div className="m-titles">
            <h2 className="m-title">My Certificates</h2>
          </div>
          {/* Testimonials */}
          <TestimonialSlider />
        </div>
      </section>
    
      
      <ContactForm />
    </Layout>
  );
};
export default Index;
