import React, { useContext,  } from "react";
import { useNavigate } from "react-router-dom";
import { ComponentsContext } from "../context/ComponentsContext.jsx";

const Home = () => {
  
  const { components, dark } = useContext(ComponentsContext);



  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col selection:bg-black selection:text-white relative ${dark ? "bg-black" : "bg-[#e8e8e8]"} gap-4 h-screen justify-center items-center overflow-hidden min-h-screen`}
    >
      <div className="bg-indigo-800 absolute md:top-30 top-2 left-2 h-40 md:h-60 blur-2xl z-0 w-40 md:w-60 rounded-full "></div>
      <div className="bg-indigo-900 absolute md:bottom-30 bottom-10 right-10 h-40 md:h-60 blur-2xl z-0 w-40 md:w-60 rounded-full "></div>
      <div className="h-fit">
        <h1 className="bg-linear-to-r  from-purple-400  to-indigo-500 bg-clip-text text-transparent h-full pb-2 md:text-8xl text-5xl text-center relative z-30 font-bold">
          <button onClick={() => console.log(components)}>
            Simp Design Library
          </button>
        </h1>
        <h4
          className={`${dark ? "text-slate-300" : "text-slate-700"} text-center text-sm md:text-lg relative z-10 mb-6`}
        >
          A minimal and modern component library to build beautiful UI faster.
        </h4>
      </div>
      <button
        onClick={() => navigate("/buttons")}
        className="mt-8 px-8 py-3 rounded-full bg-linear-to-r from-purple-500 to-indigo-600 hover:scale-105 transition-all duration-300 font-medium shadow-lg cursor-pointer shadow-purple-500/30"
      >
        Explore Components
      </button>
    </div>
  );
};

export default Home;
