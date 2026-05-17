import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ComponentsContext } from "../context/ComponentsContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { motion } from "motion/react";
const Home = () => {
  const { components, dark } = useContext(ComponentsContext);

  const { user } = useAuth();

  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col selection:bg-black selection:text-white relative ${dark ? "bg-black" : "bg-[#e8e8e8]"} gap-4 justify-center items-center overflow-hidden min-h-screen py-20`}
    >
      <motion.div
        animate={{
          x: [0, 40, -10, 55, 0],
          y: [0, 33, 22, 40, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [1, 0.7, 0.5, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
        className="bg-indigo-800 absolute md:top-30 top-2 left-2 h-40 md:h-60 blur-2xl z-0 w-40 md:w-60 pointer-events-none rounded-full "
      ></motion.div>
      <motion.div
        animate={{
          x: [0, 23, 40, 55, 0],
          y: [0, 35, 22, 40, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [1, 0.7, 0.5, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
        className="bg-indigo-900 absolute md:bottom-30 bottom-10 right-10 h-40 md:h-60 blur-2xl z-0 w-40 md:w-60 pointer-events-none rounded-full "
      ></motion.div>
      <div className="h-fit">
        <h1 className="bg-linear-to-r  from-purple-400  to-indigo-500 bg-clip-text text-transparent h-full pb-2 md:text-8xl text-5xl text-center relative z-30 font-bold">
          <button onClick={() => console.log(components)}>
            Simp Design Library
          </button>
        </h1>
        {/* {user && (
          <p className="text-center font-semibold">
            Welcome back {user.identities[1].identity_data.full_name}
          </p>
        )} */}
        <h4
          className={`${dark ? "text-slate-300" : "text-slate-700"} text-center text-sm md:text-lg relative z-10 mb-6`}
        >
          A minimal and modern component library crafted to help developers
          build beautiful, responsive, and interactive user interfaces faster.
        </h4>
        <p
          className={`${
            dark ? "text-slate-400" : "text-slate-600"
          } w-1/2 mx-auto text-center text-xs sm:text-sm md:text-base leading-relaxed`}
        >
          Explore reusable UI components with smooth animations, modern layouts,
          hover effects, dark mode support, and clean Tailwind CSS styling —
          designed for portfolios, SaaS applications, dashboards, and modern web
          apps.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-2 text-xs md:text-sm">
          <span
            className={`px-3 py-1 rounded-full ${dark ? "bg-white/10 text-white" : "bg-black/10"} hover:scale-[1.01] cursor-pointer border border-white/10 backdrop-blur-sm`}
          >
            Responsive Design
          </span>

          <span
            className={`px-3 py-1 rounded-full ${dark ? "bg-white/10 text-white" : "bg-black/10"} hover:scale-[1.01] cursor-pointer border border-white/10 backdrop-blur-sm`}
          >
            Tailwind CSS
          </span>

          <span
            className={`px-3 py-1 rounded-full ${dark ? "bg-white/10 text-white" : "bg-black/10"} hover:scale-[1.01] cursor-pointer border border-white/10 backdrop-blur-sm`}
          >
            Motion Animations
          </span>

          <span
            className={`px-3 py-1 rounded-full ${dark ? "bg-white/10 text-white" : "bg-black/10"} hover:scale-[1.01] cursor-pointer border border-white/10 backdrop-blur-sm`}
          >
            Dark Mode
          </span>

          <span
            className={`px-3 py-1 rounded-full ${dark ? "bg-white/10 text-white" : "bg-black/10"} hover:scale-[1.01] cursor-pointer border border-white/10 backdrop-blur-sm`}
          >
            Reusable Components
          </span>
        </div>
      </div>
      <button
        onClick={() => navigate("/buttons")}
        className="mt-10 px-8 py-3 rounded-full bg-linear-to-r from-purple-500 to-indigo-600 hover:scale-105 transition-all duration-300 font-medium shadow-lg cursor-pointer shadow-purple-500/30"
      >
        Explore Components
      </button>
    </div>
  );
};

export default Home;
