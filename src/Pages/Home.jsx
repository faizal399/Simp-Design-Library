import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ComponentsContext } from "../context/ComponentsContext.jsx";

import { useAuth } from "../context/AuthContext.jsx";
import { motion } from "motion/react";
import WordsPullUp from "../Components/WordsPullUp.jsx";
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
        className="bg-indigo-800 text absolute md:top-30 top-2 left-2 h-40 md:h-60 blur-2xl z-0 w-40 md:w-60 pointer-events-none rounded-full "
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
        <div
          className={`font-bold md:text-8xl text-4xl ${dark ? "text-[#e8e8e8]" : "text-black"}`}
        >
          <WordsPullUp>Simp Design Library</WordsPullUp>
        </div>
        {/* {user && (
          <p className="text-center font-semibold">
            Welcome back {user.identities[1].identity_data.full_name}
          </p>
        )} */}
        <motion.h4
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className={`${dark ? "text-slate-300" : "text-slate-700"} text-center text-sm md:text-lg relative z-10 mb-6`}
        >
          A minimal and modern component library crafted to help developers
          build beautiful, responsive, and interactive user interfaces faster.
        </motion.h4>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`${
            dark ? "text-slate-400" : "text-slate-600"
          } w-1/2 mx-auto text-center text-xs sm:text-sm md:text-base leading-relaxed`}
        >
          Explore reusable UI components with smooth animations, modern layouts,
          hover effects, dark mode support, and clean Tailwind CSS styling —
          designed for portfolios, SaaS applications, dashboards, and modern web
          apps.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-2 text-xs md:text-sm"
          initial={{
            opacity: 0,
            filter: "blur(5px)",
            y: 15,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{duration:0.9,ease:"easeInOut"}}
        >
          <span
            className={`px-3 py-1 rounded-full ${dark ? "bg-white/10 text-white" : "bg-black/10"} hover:scale-[1.01] cursor-pointer border border-white/10 backdrop-blur-md `}
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
        </motion.div>
      </div>
      <motion.button
        initial={{ y: 40, opacity: 0 }}
        animate={{
          y: [40, 0, -6, 0],
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        onClick={() => navigate("/components")}
        className="mt-10 px-8 py-3 rounded-full bg-white hover:scale-102 transition-all duration-300 font-medium shadow-lg cursor-pointer  hover:shadow-purple-500/30"
      >
        Explore Components
      </motion.button>
    </div>
  );
};

export default Home;
