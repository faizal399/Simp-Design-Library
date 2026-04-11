import React, { useContext } from "react";
import { MdLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ComponentsContext } from "../context/ComponentsContext";
const Navbar = () => {
  const { dark, handleTheme } = useContext(ComponentsContext);

  return (
    <div
      className={`flex sticky selection:bg-black selection:text-white font-bold top-0 z-50 shadow-md   justify-between sm:text-2xl md:px-20 px-4 py-4 ${dark ? "bg-[#1A1A1A] text-white" : "bg-[#e6e6e6] text-black"} `}
    >
      <h1 className="bg-gradient-to-r  from-purple-400  to-indigo-500 bg-clip-text text-transparent text-nowrap ">
        <Link to={"/"}>Simp Design Library</Link>
      </h1>
      <div className="flex sm:text-xl text-sm  gap-2 md:gap-4">
        <button className="cursor-pointer" onClick={() => handleTheme()}>
          {dark ? (
            <MdLightMode />
          ) : (
            <span className="text-black">
              <IoMoon />
            </span>
          )}
        </button>
        <div className="flex justify-between items-center gap-2">
          <Link to={"/"}>Home</Link>
          <Link to={"/buttons"}>Buttons</Link>
          <Link to={"/cards"}>Cards</Link>
          <a className="ml-2 hover:scale-[1.1] transition-all duration-200" href="https://github.com/faizal399" target="__blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
