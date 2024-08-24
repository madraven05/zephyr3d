import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navbarItems = [
    {
      title: "Dev",
      link: "/dev",
    },

    {
      title: "Components",
      link: "/docs/components",
    },
  ];
  return (
    <nav className="flex justify-center items-center gap-10 text-white font-heading uppercase">
        {navbarItems.map(item => (
            <Link href={item.link} className="text-lg hover:font-bold hover:-translate-y-1 hover:cursor-pointer transition duration-300 ease-in-out">{item.title}</Link>
        ))}
    </nav>
  );
};

export default Navbar;
