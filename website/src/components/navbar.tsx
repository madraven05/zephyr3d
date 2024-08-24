import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";

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

  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    if (darkModeEnabled) {
      document.documentElement.classList.toggle("dark");
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, [darkModeEnabled]);

  return (
    <nav className="flex justify-center items-center gap-10 text-white font-heading uppercase">
      {/* Dark mode toggle */}
      <div className="flex justify-center items-center gap-2">
        {!darkModeEnabled ? (
          <MdOutlineWbSunny className="text-xl" />
        ) : (
          <MdOutlineDarkMode className="text-xl" />
        )}
        <Switch
          onChange={setDarkModeEnabled}
          checked={darkModeEnabled}
          className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
          />
        </Switch>
      </div>

      {/* Nav Items */}
      {navbarItems.map((item) => (
        <Link
          href={item.link}
          className="text-lg hover:font-bold hover:-translate-y-1 hover:cursor-pointer transition duration-300 ease-in-out"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
