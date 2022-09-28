import React from "react";
import Image from "next/image";
import ProfilePic from "../Data/Images/Profile_Cropped.png";

const Intro = () => {
  return (
    <div className="flex items-center justify-between mb-16">
      <div className="flex flex-col w-[80%]">
        <h1 className="text-3xl font-black mb-8">PRASHANT KUMAR</h1>
        <p className="text-lg">
          I am learning frontend development with React/Next.js using
          Typescript. Familiar with Graphql, Relay, and Emotion.js.
        </p>
        <a className="underline text-lg text-blue-700" href="mailto:87KumarPrashant@gmail.com">Send me an Email</a>
      </div>
      <div>
        <Image
          src={ProfilePic}
          layout="fixed"
          height="100px"
          width="100px"
        ></Image>
      </div>
    </div>
  );
};

export default Intro;
