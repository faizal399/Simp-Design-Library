import React, { useContext } from "react";
import { MdLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ComponentsContext } from "../context/ComponentsContext";
import SwitchNavigation from "./SwitchNavigation";
import { useAuth } from "../context/AuthContext";
import UserMenu from "./UserMenu";
const Navbar = () => {
  const { dark, handleTheme } = useContext(ComponentsContext);
  const { user, logout } = useAuth();

  return (
    <nav
      className={`flex sticky backdrop-blur-md bg-opacity-80 selection:bg-black selection:text-white font-bold top-0 z-50 shadow-md items-center  justify-between sm:text-2xl sm:px-6 md:px-12 lg:px-20 py-2 px-2 ${dark ? "bg-[#1A1A1A] text-white" : "bg-[#e6e6e6] text-black"} `}
    >
      <h1 className="bg-linear-to-r  from-purple-400  to-indigo-500 bg-clip-text text-sm sm:text-lg md:text-xl text-transparent text-nowrap ">
        <Link to={"/"}>Simp Design Library</Link>
      </h1>
      <div className="flex items-center sm:gap-3 md:gap-4 sm:text-xl text-sm  gap-2 ">
        <button
          onClick={handleTheme}
          className="
  relative flex items-center justify-center
  w-10 h-10
  rounded-full

  transition-all duration-300
  hover:scale-110
  active:scale-95
  cursor-pointer
  "
        >
          <span className="relative w-4 h-4 flex items-center justify-center">
            <MdLightMode
              className={`
      absolute text-yellow-400 text-sm
      transition-all duration-300 h-full w-full

      ${
        dark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90"
      }
      `}
            />

            <IoMoon
              className={`
      absolute text-black dark:text-white text-sm
      transition-all duration-300 h-full w-full

      ${
        !dark
          ? "opacity-100 scale-100 rotate-0"
          : "opacity-0 scale-50 -rotate-90"
      }
      `}
            />
          </span>
        </button>
        <div className="flex justify-between items-center gap-2">
          <SwitchNavigation />

          <a
            className="ml-2 hover:scale-[1.1] transition-all duration-200"
            href="https://github.com/faizal399"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          {user ? (
            <UserMenu />
          ) : (
            <Link
              to="/login"
              className="md:px-3 text-xs md:text-sm md:py-1 px-1 py-1 text-center rounded-lg border cursor-pointer  hover:scale-101 flex justify-center items-center font-bold transition-all gap-1 duration-300"
            >
              Login
              <span>
                <IoIosLogIn />
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
