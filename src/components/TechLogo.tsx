import React from "react";
import LogoArray from "../Data/Logo/LogoArray"
import Image from "next/image";

const TechLogo = () => {
  const AllLogos = LogoArray.map((Logo:typeof LogoArray[0], key: number) => {
    return (
      <div key={key} className="group mx-6 cursor-pointer">
        <Image src={Logo?.src} height="60px" width="60px" />
        <div className="text-center transition-all ease duration-450 font-bold text-sm group-hover:scale-100 scale-0">
          {Logo.title1}
          <br />
          {Logo.title2}
        </div>
      </div>
    )
  })
  return (
    <div className="flex flex-wrap items-center justify-center">
      {AllLogos}
    </div>
  );
};

export default TechLogo;
