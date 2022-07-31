import "../../../App.css";
// import { Button } from "./Button";
import { Link } from "react-scroll";
import "./IntroSection.css";

function IntroSection(props) {
  return (
    <div className="intro-container">
      {/* <video
        className="background-video"
        src="videos/sunset.mp4"
        autoPlay
        loop
        muted
      /> */}
      {/* <div className="background-video"> */}
      <img className="background-video" src={"videos/me1.jpeg"} />
      {/* <img src={"videos/blues.png"} /> */}
      {/* </div> */}
      <h1>Hi, I'm Eric</h1>
      <p>
        I'm a Senior at Cornell University
        <br />
        studying Physics and CS.
      </p>
      <div className="intro-links">
        <a
          className="social-icon-link"
          href="https://drive.google.com/file/d/1oIbiJULzko_MwNIslHz3d_e25-z_gZmA/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
        <a
          className="social-icon-link"
          href="https://github.com/yekime"
          target="_blank"
        >
          <i className="fab fa-github" />
        </a>
        <a
          className="social-icon-link"
          href="https://linkedin.com/in/yekime"
          target="_blank"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
      <div className="intro-btns">
        <Link
          activeClass="active"
          to="experiences"
          spy={true}
          smooth={true}
          offset={-56}
          duration={1000}
        >
          <div className="btns btn--large">
            <div className="center">
              <i className="fa fa-chevron-down -text-align"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IntroSection;
