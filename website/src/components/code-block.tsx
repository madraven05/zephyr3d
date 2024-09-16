import React, { HTMLAttributes, useEffect, useState } from "react";

import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";
import Prism from "prismjs";
import { FaAngleDown, FaCode } from "react-icons/fa6";

type CodeBlockProps = HTMLAttributes<HTMLElement>;

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) Prism.highlightAll();
  }, [isOpen]);

  return (
    <Disclosure
      as="div"
      className="p-5 bg-slate-50/5 backdrop-blur-sm  overflow-auto shadow-md w-full rounded-xl"
      defaultOpen={true}
    >
      {({ open }) => {
        setIsOpen(open);
        return (
          <>
            <DisclosureButton className="z-10 group rounded-lg flex w-full justify-between items-center">
              <span className="flex justify-center items-center gap-2 font-semibold">
                <FaCode />
                Code
              </span>
              <FaAngleDown className="transition duration-200 ease-in-out group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="relative mt-5 transition duration-800 ease-in-out data-[closed]:-translate-y-2 data-[closed]:opacity-0"
            >
              <div className="absolute flex inset-0 justify-center items-center bg-black/10 backdrop-blur-lg rounded-lg z-30">
                <div>
                  <h3>Coming soon!</h3>
                </div>
              </div>
              <pre className="relative">{children}</pre>
            </DisclosurePanel>
          </>
        );
      }}
    </Disclosure>
  );
};

export default CodeBlock;
