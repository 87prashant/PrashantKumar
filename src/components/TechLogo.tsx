import React from "react";
import GitLogo from "../Data/Logo/git.svg";
import GraphQlLogo from "../Data/Logo/icons8-graphql.svg";
import JavaLogo from "../Data/Logo/java.svg";
import JavascriptLogo from "../Data/Logo/javascript-seeklogo.com.svg";
import MaterialUILogo from "../Data/Logo/icons8-material-ui.svg";
import ReactLogo from "../Data/Logo/icons8-react-40.svg";
import TypescriptLogo from "../Data/Logo/icons8-typescript.svg";
import NextJsLogo from "../Data/Logo/next-js-logo-seeklogo.com.jpg";
import RelayLogo from "../Data/Logo/svgviewer-output.svg";

import Image from "next/image";

const TechLogo = () => {
    //Todo: make define className with below repeated property and use it to remove repetition.
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="group mx-6 cursor-pointer">
        <Image src={ReactLogo} height="60px" width="60px" />
        <div className="text-center transition-all ease duration-450 font-bold text-sm group-hover:scale-100 scale-0 ">
          <br />
          React
        </div>
      </div>
      <div className="group mx-6 cursor-pointer">
        <Image src={NextJsLogo} height="60px" width="60px" />
        <div className="text-center transition-all ease duration-450 font-bold text-sm group-hover:scale-100 scale-0 ">
          <br />
          NextJs
        </div>
      </div>
      <div className="group mx-6 cursor-pointer">
        <Image src={JavascriptLogo} height="60px" width="60px" />
        <div className="text-center transition-all ease duration-450 font-bold text-sm group-hover:scale-100 scale-0 ">
          Java
          <br />
          Script
        </div>
      </div>
      <div className="group mx-6 cursor-pointer">
        <Image src={TypescriptLogo} height="60px" width="60px" />
        <div className="text-center transition-all ease duration-450 font-bold text-sm group-hover:scale-100 scale-0 ">
          Type
          <br />
          Script
        </div>
      </div>
      <div className="group mx-6 cursor-pointer">
        <Image src={GraphQlLogo} height="60px" width="60px" />
        <div className="text-center transition-all ease duration-450 font-bold text-sm group-hover:scale-100 scale-0 ">
          <br />
          Graphql
        </div>
      </div>
      <div className="group mx-6 cursor-pointer">
        <Image src={RelayLogo} height="60px" width="60px" />
        <div className="text-center transition-all ease duration-450 font-bold text-sm group-hover:scale-100 scale-0 ">
          <br />
          Relay
        </div>
      </div>
      <div className="group mx-6 cursor-pointer">
        <Image src={JavaLogo} height="60px" width="60px" />
        <div className="text-center transition-all ease duration-450 font-bold text-sm group-hover:scale-100 scale-0 ">
          <br />
          Java
        </div>
      </div>
      <div className="group mx-6 cursor-pointer">
        <Image src={MaterialUILogo} height="60px" width="60px" />
        <div className="text-center transition-all ease duration-450 font-bold text-sm group-hover:scale-100 scale-0 ">
          <br />
          MUI
        </div>
      </div>
      <div className="group mx-6 cursor-pointer">
        <Image src={GitLogo} height="60px" width="60px" />
        <div className="text-center transition-all ease duration-450 font-bold text-sm group-hover:scale-100 scale-0 ">
          <br />
          Git
        </div>
      </div>
    </div>
  );
};

export default TechLogo;
