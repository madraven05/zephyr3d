import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex flex-wrap gap-10 relative items-center justify-between  shadow-lg w-full p-16 backdrop-blur-lg bg-slate-500/10">
      {/* Left Panel */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-center gap-2">
          <img className="h-10" src="/assets/zephyr-icon.png" />
          <text className="font-heading uppercase font-semibold text-4xl">Zephyr3D</text>
        </div>
        <div className="flex flex-col gap-2">
          <p>Built by Pranshu Kumar Gond</p>
          {/* Icons */}
          <div className="flex gap-2 items-center justify-start">
            <a target="_blank" href="" className="hover:text-white hover:-translate-y-0.5 transition duration-200 ease-in-out">
              <FaGithub />
            </a>
            <a target="_blank" href="" className="hover:text-white hover:-translate-y-0.5 transition duration-200 ease-in-out">
              <FaTwitter />
            </a>
            <a target="_blank" className="hover:text-white hover:-translate-y-0.5 transition duration-200 ease-in-out" href="">
              <FaLinkedin />
            </a>
            <a target="_blank" className="hover:text-white hover:-translate-y-0.5 transition duration-200 ease-in-out" href="">
              <IoMdMail className="text-xl"/>
            </a>
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div className="mr-10 flex flex-col gap-2 items-start justify-start">
        <a className="hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-0.5">Getting Started</a>
        <a className="hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-0.5">Components</a>
        <a className="hover:font-semibold transition duration-300 ease-in-out hover:-translate-y-0.5">Templates</a>
      </div>
    </div>
  );
};

export default Footer;
