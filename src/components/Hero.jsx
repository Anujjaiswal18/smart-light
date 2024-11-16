import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className='h-64 md:h-80 text-white w-full   bg-[url("/images/Hero_section.png")] bg-cover
     bg-no-repeat bg-center lg:h-96'
    >
      <span className="pt-4 md:text-base  font-sans text-slate-200 block text-center pt-12 lg:pt-16">
        Smart Lighting Solutions
      </span>
      <span className="block text-sm text-center md:text-2xl block text-center  pt-2 font-sans text-slate-400 ">
        Bringing A New Perspective To Street Lights
        <br /> And The Cities Of Tomorrow.
      </span>
      <div className="flex items-center justify-center mt-4">
      <Link to="/login">
        <button className="bg-blue-700 text-white py-1 px-4 md:px-6 ">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
