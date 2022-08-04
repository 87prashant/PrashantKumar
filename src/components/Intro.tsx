import React from "react";
import Image from "next/image";
import ProfilePic from "../Data/Images/Profile_Cropped.png";

const Intro = () => {
  return (
    <div className="flex items-center justify-center mb-16">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Prashant Kumar</h1>
        <p className="text-lg">
          I am from India and currently learning frontend development with
          React/Next.js using Typescript. Familiar with Graphql, Relay, and
          Emotion.js.
        </p>
      </div>
      <div>
        <Image src={ProfilePic} layout="fixed" height="100px" width="100px"></Image>
      </div>
    </div>
  );
};

export default Intro;
