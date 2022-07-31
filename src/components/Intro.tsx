import React from "react";
import Image from 'next/image'
import ProfilePic from '../Data/Images/Profile.png'

const Intro = () => {
  return (
    <div className="relative left-0 mb-10">
      <div className="flex flex-col z-10">
        <h1 className="text-2xl font-bold mb-6">Prashant Kumar</h1>
        <p className="text-lg w-[80%]">I am from India and currently learning frontend development with React</p>
      </div>
      <div className="absolute right-[-50px] top-0 flex align-center justify-center z-5">
        <Image src={ProfilePic} height="100px" width="200px"></Image>
      </div>
    </div>
  );
};

export default Intro;
