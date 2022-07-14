import React from "react";
import Navbar from "../Navbar";
import "../../App.css";
import ProjectCards from "../ProjectCards";
import IntroSection from "../IntroSection";
import { useRef } from "react";

function Home() {
  const cardsRef = useRef(null);
  return (
    <>
      <Navbar />
      <IntroSection cardsRef={cardsRef} />
      <ProjectCards />
    </>
  );
}

export default Home;
