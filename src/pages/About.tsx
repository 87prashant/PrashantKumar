import Main from "../components/Main";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Main>
        <div className="text-3xl font-black mb-6">About me</div>
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
          </a>{", "}
          a free agile meeting tool for remote teams.
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default About;
