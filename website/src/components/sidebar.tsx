import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { HTMLAttributes } from "react";

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
  var pageName = '';
  if(router.pathname.includes("components")) {
    pageName = 'components';
  } else {
    pageName = 'dev';
  }

  const sidebarNavItems: SidebarNavItems = {
    components: [
      {
        category: "Data Display",
        navItems: [
          {
            title: "Product Card",
            link: "/docs/components/product-card",
          },
          {
            title: "Particled Mesh",
            link: "/docs/components/",
          },
          {
            title: "Particled Mesh",
            link: "/docs/components/",
          },
        ],
      },
      {
        category: "Feedback",
        navItems: [
          {
            title: "Product Card",
            link: "/docs/components/",
          },
          {
            title: "Particled Mesh",
            link: "/docs/components/",
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
    <aside className="sm:hidden lg:block hidden fixed w-72 h-screen overflow-auto py-8 px-7 bg-slate-800/10 shadow-lg rounded-md text-white font-heading uppercase">
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
  );
};

export default Sidebar;
