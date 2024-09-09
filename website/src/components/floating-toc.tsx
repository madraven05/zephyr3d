import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { MdOutlineManageSearch } from "react-icons/md";

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface FloatingTOCProps {
  items: TOCItem[];
}

const FloatingTOC: React.FC<FloatingTOCProps> = ({items}) => {

  return (
    <div className="z-10 fixed top-20 right-5 p-3 backdrop-blur-sm bg-slate-500/20 dark:bg-slate-500/40 hover:bg-slate-600/70 dark:hover:bg-slate-500/40 focus:bg-slate-600/70 transition ease-in-out duration-300 rounded-xl shadow-sm">
      <Popover>
        <PopoverButton>
          <MdOutlineManageSearch className="text-3xl" />
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="divide-y divide-slate-600/5 w-72 -mx-5 my-8 backdrop-blur-md shadow-lg rounded-xl text-base transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <div className="bg-slate-600/40 dark:bg-slate-500/40 p-6">
            <ul className="list-inside">
              {items.map((item) => (
                <li
                  key={item.id}
                  className={`pl-${(item.level - 1) * 4} text-${
                    item.level == 1
                      ? "xl font-semibold"
                      : item.level == 2
                        ? "lg font-semibold"
                        : "base"
                  }`}
                  style={{ marginLeft: `${(item.level - 1) * 16}px` }}
                >
                  <a
                    href={`#${item.id}`}
                    className="hover:-translate-y-0.5 transition duration-300 ease-in-out"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default FloatingTOC;
