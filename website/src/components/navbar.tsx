import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import DarkModeToggleButton from "./dark-mode-toggle";
import { ZephyrContext } from "./zephyr-context";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const zephyrContext = useContext(ZephyrContext);

  useEffect(() => {
    if (darkModeEnabled) {
      document.documentElement.classList.toggle("dark");
      zephyrContext?.setIsDarkModeEnabled(true);
    } else {
      document.documentElement.classList.remove("dark");
      zephyrContext?.setIsDarkModeEnabled(false);
    }
  }, [darkModeEnabled]);

  return (
    <div>
      <nav className="hidden lg:flex justify-center items-center gap-10 font-heading uppercase">
        {/* Dark mode toggle */}
        <DarkModeToggleButton
          darkModeEnabled={darkModeEnabled}
          setDarkModeEnabled={setDarkModeEnabled}
        />

        {/* Nav Items */}
        {navbarItems.map((item) => (
          <Link
            key={item.title.toLowerCase()}
            href={item.link}
            className="text-lg hover:font-bold hover:-translate-y-1 hover:cursor-pointer transition duration-300 ease-in-out"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex"
        >
          {mobileOpen ? (
            <MdClose className="text-3xl" />
          ) : (
            <FiMenu className="text-3xl" />
          )}
        </button>
      </div>
      <Dialog
        as="div"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className="z-30 flex h-full lg:hidden fixed right-0 top-10"
      >
        <DialogPanel
          transition
          className="z-30 bg-slate-600/10 backdrop-blur-lg w-72 -mx-5 my-5 shadow-lg rounded-xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-full"
        >
          <div className="p-10 flex flex-col gap-4 font-heading uppercase">
            {navbarItems.map((item) => (
              <Link
                href={item.link}
                key={item.title.toLowerCase()}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-semibold hover:font-bold hover:-translate-y-1 hover:cursor-pointer transition duration-300 ease-in-out"
              >
                {item.title}
              </Link>
            ))}
            <div className="flex gap-3 justify-start items-center">
              <p className="font-heading uppercase font-semibold">Dark Mode</p>
              <DarkModeToggleButton
                darkModeEnabled={darkModeEnabled}
                setDarkModeEnabled={setDarkModeEnabled}
              />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Navbar;
