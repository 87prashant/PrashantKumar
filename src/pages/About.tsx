import Main from "../components/Main";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TechLogo from "../components/TechLogo";
import ProjectCard from "src/components/ProjectCard";

const About = () => {
  return (
    <>
      <Header />
      <Main>
        <div className="text-4xl text-center font-black mb-14">About me</div>
        <div className="text-lg mb-4 text-center">
          Hi, My name is Prashant Kumar. I am from a small village near capital
          of India. I recently graduated with a computer science and engineering
          degree. I love to build things using tech and open-source projects are
          great medium for me to learn and apply things openly.
        </div>
        <div className="text-lg mb-4 text-center">
          I am currently contributing to{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.parabol.co/"
            className="underline text-blue-600"
          >
            Parabol
          </a>
          {", "}a free agile meeting tool for remote teams.
        </div>
        <div className="text-2xl font-bold mb-14 mt-8">Worked Wit</div>
        <TechLogo />
        <div id="all_projects" className="text-2xl font-bold mb-8">All Projects</div>
        <ProjectCard/>
      </Main>
      <Footer />
    </>
  );
};

export default About;
