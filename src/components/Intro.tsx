import React from "react";
import Image from 'next/image'
import profilepic from '../Data/Images/Profile.png'

const Intro = () => {
  return (
    <div className="flex mb-10">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Prashant Kumar</h1>
        <p className="text-lg w-[90%]">I am from India and currently learning frontend development with React</p>
      </div>
      <div className="flex align-center justify-center ml-auto">
        <Image src={profilepic} height="50px" width="200px"></Image>
      </div>
    </div>
  );
};

export default Intro;
