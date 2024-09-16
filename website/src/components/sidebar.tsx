import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { HTMLAttributes, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MdArrowBackIos, MdArrowForwardIos, MdClose } from "react-icons/md";
import { sidebarNavItems } from "@/utils/data";
import SidebarCollapsibleItems from "./sidebar-collapsible-items";

export type NavChildItem = {
  title: string;
  link?: string;
  childItems?: NavChildItem[];
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
                  <>
                    {!Object.hasOwn(n, "childItems") ? (
                      <li key={n.title.toLowerCase()} className="mb-2">
                        <Link
                          className="hover:font-semibold transition ease-out duration-300"
                          href={n.link!}
                        >
                          {n.title}
                        </Link>
                      </li>
                    ) : (
                      <SidebarCollapsibleItems title={n.title}>
                        {n.childItems?.map((c) => (
                          <li key={c.title.toLowerCase()} className="mb-2">
                            <Link
                              className="hover:font-semibold transition ease-out duration-300 text-sm"
                              href={c.link!}
                            >
                              {c.title}
                            </Link>
                          </li>
                        ))}
                      </SidebarCollapsibleItems>
                    )}
                  </>
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
        className="flex flex-grow items-start justify-start lg:hidden fixed left-0 top-10"
      >
        <DialogPanel
          transition
          className="z-30 bg-slate-600/10 flex flex-col items-start justify-start px-10 py-10 font-heading uppercase backdrop-blur-lg h-screen w-72  my-8 shadow-lg rounded-xl transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-x-full"
        >
          <button
            onClick={() => setOpenMobileSidebar(false)}
            className="fixed top-4 right-4"
          >
            <MdClose className="text-2xl " />
          </button>
          <ul className="flex flex-col gap-3">
            {sidebarNavItems[pageName as string].map((item) => (
              <>
                <p className="text-gray-300 font-heading">{item.category}</p>
                <div>
                  {item.navItems.map((n) => (
                    <>
                      {!Object.hasOwn(n, "childItems") ? (
                        <li key={n.title.toLowerCase()} className="mb-2">
                          <Link
                            className="hover:font-semibold transition ease-out duration-300"
                            href={n.link!}
                          >
                            {n.title}
                          </Link>
                        </li>
                      ) : (
                        <SidebarCollapsibleItems title={n.title}>
                          {n.childItems?.map((c) => (
                            <li key={c.title.toLowerCase()} className="mb-2">
                              <Link
                                className="hover:font-semibold transition ease-out duration-300 text-sm"
                                href={c.link!}
                              >
                                {c.title}
                              </Link>
                            </li>
                          ))}
                        </SidebarCollapsibleItems>
                      )}
                    </>
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
