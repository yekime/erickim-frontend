import React from "react";
import "../../App.css";
import ProjectCards from "./landing-page/ProjectCards";
import ExperienceCards from "./landing-page/ExperienceCards";
import IntroSection from "./landing-page/IntroSection";

function Home() {
  return (
    <>
      <IntroSection />
      <ExperienceCards />
      <ProjectCards />
    </>
  );
}

export default Home;
