import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

/**
 *
 * The sidebar layout that will be used by all the pages
 * in the documentation
 */
const SidebarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="lg:ml-72 px-10 py-8 w-full">{children}</main>
    </div>
  );
};

export default SidebarLayout;
