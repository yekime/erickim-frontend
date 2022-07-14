import React from "react";
import "../../App.css";
import ProjectCards from "../ProjectCards";
import IntroSection from "../IntroSection";
import { useRef } from "react";
import { Element } from "react-scroll";

function Home() {
  const cardsRef = useRef(null);
  return (
    <>
      <IntroSection cardsRef={cardsRef} />
      <Element name="projects">
        <ProjectCards />
      </Element>
    </>
  );
}

export default Home;
