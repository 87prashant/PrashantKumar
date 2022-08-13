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
  return (
    <div className="flex flex-wrap items-center justify-center">
      <Image src={ReactLogo} height="80px" width="80px" />
      <Image src={NextJsLogo} height="60px" width="60px" />
      <Image src={JavascriptLogo} height="60px" width="60px" />
      <Image src={TypescriptLogo} height="60px" width="60px" />
      <Image src={GraphQlLogo} height="60px" width="60px" />
      <Image src={RelayLogo} height="60px" width="60px" />
      <Image src={JavaLogo} height="60px" width="60px" />
      <Image src={MaterialUILogo} height="60px" width="60px" />
      {/* <div className="group"> */}
      <Image src={GitLogo} height="60px" width="60px" />
      {/* <div className="group-hover:scale-100 scale-0 ">Git</div>
      </div> */}
    </div>
  );
};

export default TechLogo;
