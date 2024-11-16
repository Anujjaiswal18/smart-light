import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  
  return (
    <>
    <nav className="w-full relative bg-black text-white h-12 border-b border-slate-800 flex lg:h-16">
      <span className="p-4 ps-6 md:ps-20 pb-4 lg:ps-28 ">
        <img
          className="w-28  md:w-32 lg:w-44"
          src="public\images\smart lights_logo.svg"
          alt="logo"
        />
      </span>
      <div className="hidden md:block w-[22%] lg:w-[30%] xl:w-[40%]"></div>
      <ul className=" hidden text-sm md:flex cursor-pointer gap-5 justify-center items-center text-sm lg: text-base">
        <li>Home</li>
        <li>Products</li>
        <li>Software Service</li>
        <Link to="/login">
          <button className="bg-blue-700 text-white py-1 px-4 ">Login</button>
        </Link>
      </ul>
      <IoMdMenu  className=" absolute top-1 right-5  w-9 h-10 me-0 block md:hidden lg:hidden xl:hidden" />
      
    </nav>
   
    </>
  );
};

export default NavBar;
