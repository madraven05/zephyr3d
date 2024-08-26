import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { HTMLAttributes, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MdArrowBackIos, MdArrowForwardIos, MdClose } from "react-icons/md";

export type NavChildItem = {
  title: string;
  link: string;
};

export type NavItem = {
  category: string;
  navItems: NavChildItem[];
};

export type SidebarNavItems = {
  [navItem: string]: NavItem[];
};

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const router = useRouter();
  var pageName = "";
  if (router.pathname.includes("components")) {
    pageName = "components";
  } else {
    pageName = "dev";
  }

  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  const sidebarNavItems: SidebarNavItems = {
    components: [
      {
        category: "Data Display",
        navItems: [
          {
            title: "Product Card",
            link: "/docs/components/product-card",
          },
        ],
      },
      {
        category: "Visual Components",
        navItems: [
          {
            title: "Particle Wave",
            link: "/docs/components/particle-wave",
          },
          {
            title: "Particled Mesh",
            link: "/docs/components/",
          },
        ],
      },
    ],
    dev: [
      {
        category: "Basic Usage",
        navItems: [
          {
            title: "Getting Started",
            link: "/dev/",
          },
        ],
      },
      {
        category: "Other",
        navItems: [
          {
            title: "FAQ",
            link: "/dev/",
          },
          {
            title: "Contributing",
            link: "/dev/",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <aside className="sm:hidden lg:block hidden fixed w-72 h-screen overflow-auto py-8 px-7 bg-slate-800/10 dark:bg-slate-700/10 shadow-lg rounded-md text-white font-heading uppercase">
        {/* side nav */}
        <ul className="flex flex-col gap-3">
          {sidebarNavItems[pageName as string].map((item) => (
            <>
              <p className="text-gray-300 font-heading">{item.category}</p>
              <div>
                {item.navItems.map((n) => (
                  <li className="mb-2">
                    <Link href={n.link}>{n.title}</Link>
                  </li>
                ))}
              </div>
              <div className="w-full h-0.5 bg-white/10"></div>
            </>
          ))}
        </ul>
      </aside>
      <div
        onClick={() => setOpenMobileSidebar(!openMobileSidebar)}
        className={`lg:hidden fixed z-30 p-2 ${
          openMobileSidebar ? "hidden" : "flex"
        } justify-center items-center top-1/2 left-0 shadow-lg bg-slate-500/10 backdrop-blur-lg h-24 rounded-r-xl`}
      >
        <MdArrowForwardIos className="text-xl animate-pulse font-semibold" />
      </div>
      <Dialog
        as="div"
        open={openMobileSidebar}
        onClose={() => setOpenMobileSidebar(false)}
        className="flex flex-grow lg:hidden fixed left-0 top-10"
      >
        <DialogPanel
          transition
          className="z-30 bg-slate-600/20 p-10 font-heading uppercase backdrop-blur-lg h-screen w-full -mx-5 my-10 shadow-lg rounded-xl transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-x-full"
        >
          <button
            onClick={() => setOpenMobileSidebar(false)}
            className="fixed top-5 right-5"
          >
            <MdClose className="text-3xl text-white/80" />
          </button>
          <ul className="flex flex-col gap-3">
            {sidebarNavItems[pageName as string].map((item) => (
              <>
                <p className="text-gray-300 font-heading">{item.category}</p>
                <div>
                  {item.navItems.map((n) => (
                    <li className="mb-2">
                      <Link onClick={() => setOpenMobileSidebar(false)} href={n.link}>{n.title}</Link>
                    </li>
                  ))}
                </div>
                <div className="w-full h-0.5 bg-white/10"></div>
              </>
            ))}
          </ul>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Sidebar;
