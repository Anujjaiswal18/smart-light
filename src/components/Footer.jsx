import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='w-full md:h-52 lg:h-72 bg-[url("/images/Footer.png")] bg-cover'>
      <div className="flex">
        <span className=" block p-4 ps-6 md:pt-10 md:ps-24 pb-4 lg:ps-32 lg:pt-10 ">
          <img
            className="w-24  md:w-32 lg:w-36"
            src="public\images\smart lights_logo.svg"
            alt="logo"
          />
        </span>
        <ul className=" flex gap-2 pt-3 md:ms-40 md:pt-10 text-white lg:pt-10 md:gap8 lg:gap-8 lg:ms-96">
          <li>Products</li>
          <li className=" hidden md:block lg:block">Software services</li>
          <Link to="https://www.linkedin.com/in/Anuj-jaiswal7">
          
          <li>Follow Us</li>
          </Link>
        </ul>
      </div>
      <hr className=" w-44 ms-5 md:w-96 lg:w-[40vw] md:mt-10 md:ms-20 lg:mt-24 lg:ms-32" />
      <div className="text-white ms-5  w-64 md:w-96 md:ms-20 lg:ms-32 lg:mt-4 lg:w-96  flex justify-between text-sm md:text-base lg:text-lg ">
        <span className="text-xs md:text-base lg:text-lg">Privacy Policy</span>|
        <span className="text-xs md:text-base lg:text-lg">
          Term & condition
        </span>
        |<span className="text-xs md:text-base lg:text-lg">Cookie Policy</span>
      </div>
    </div>
  );
};

export default Footer;
