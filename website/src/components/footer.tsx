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
          <h1 className="text-4xl">Zephyr3D</h1>
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
        <p>Getting Started</p>
        <p>Components</p>
        <p>Templates</p>
      </div>
    </div>
  );
};

export default Footer;
