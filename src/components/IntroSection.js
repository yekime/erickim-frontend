import "../App.css";
// import { Button } from "./Button";
import { Link } from "react-scroll";
import "./IntroSection.css";

function IntroSection(props) {
  return (
    <div className="intro-container">
      <video
        className="background-video"
        src="videos/video-1.mp4"
        autoPlay
        loop
        muted
      />
      <h1>Hi, I'm Eric</h1>
      <p>
        I'm a Senior at Cornell University
        <br />
        studying Physics and CS.
      </p>
      <div className="intro-btns">
        <Link
          activeClass="active"
          to="projects"
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
