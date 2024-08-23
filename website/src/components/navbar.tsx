import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navbarItems = [
    {
      title: "Getting Started",
      link: "/getting-started",
    },
    {
      title: "Docs",
      link: "/docs",
    },
    {
      title: "Components",
      link: "/components",
    },
  ];
  return (
    <nav className="flex gap-10 px-10 py-5 text-white font-heading uppercase">
        {navbarItems.map(item => (
            <Link href={item.link} className="hover:font-bold hover:-translate-y-1 hover:cursor-pointer transition duration-300 ease-in-out">{item.title}</Link>
        ))}
    </nav>
  );
};

export default Navbar;
