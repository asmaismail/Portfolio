import React from "react";
import Intro from "../Components/Intro";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience/index"
import Contact from "../Components/Contact/index"


const HomePage = () => {
  return (
    <>
      <Intro />
      <Skills />
      <Experience/>
      <Contact/>
    </>
  );
};

export default HomePage;
