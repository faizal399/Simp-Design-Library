import React from "react";
import SocialShare from "./SocialShare";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t px-6 py-10 bg-white dark:bg-black text-black dark:text-white">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* About */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This project is part of my journey as a Frontend Developer, where I
            build and share reusable UI components using React and Tailwind CSS.
            My goal is to simplify UI development and help developers create
            modern interfaces faster.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 sm:text-center lg:text-left">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <a
                href="mailto:faizalsheikh399@gmail.com"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/faizal-sheikh-187648hu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-3 sm:text-center lg:text-left">
          <h2 className="text-lg font-semibold">Follow Me</h2>
          <SocialShare />
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Faizal Sheikh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;