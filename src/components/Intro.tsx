import React from "react";
import Image from "next/image";
import ProfilePic from "../Data/Images/Profile_Cropped.png";

const Intro = () => {
  return (
    <div className="relative left-0 mb-10">
      <div className="flex flex-col z-10">
        <h1 className="text-2xl font-bold mb-4">Prashant Kumar</h1>
        <p className="text-lg w-[70%]">
          I am from India and currently learning frontend development with React
        </p>
      </div>
      <div className="absolute right-0 top-0 flex align-center justify-center z-5">
        <Image src={ProfilePic} height="100px" width="100px"></Image>
      </div>
    </div>
  );
};

export default Intro;
