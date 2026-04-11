import React from "react";
import SocialShare from "./SocialShare";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="h-[25vh] border-t  w-full grid grid-cols-3 gap-2 p-4 ">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-center font-semibold">About Me</h1>
        <p className="text-sm text-gray-600">
          This project is part of my journey as a Frontend Developer, where I
          build and share reusable UI components using React and Tailwind CSS.
          My goal is to simplify UI development and help developers create
          modern interfaces faster.
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-center font-semibold">Quick Links</h1>
        <ul className="text-center ">
          <li className="hover:underline cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <a  href="mailto:faizalsheikh399@gmail.com"
            target="__blank">Contact</a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a href="www.linkedin.com/in/faizal-sheikh-187648hu" target="__blank">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-semibold">Follow Me</h1>
        <SocialShare />
      </div>
    </div>
  );
};

export default Footer;
