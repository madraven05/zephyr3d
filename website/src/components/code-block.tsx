import React, {
  DetailedHTMLProps,
  DetailsHTMLAttributes,
  HTMLAttributes,
} from "react";

import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";
import { FaAngleDown, FaCode } from "react-icons/fa6";

type CodeBlockProps = HTMLAttributes<HTMLElement>;

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {

  return (
    <Disclosure
      as="div"
      className="p-5 bg-slate-50/5 backdrop-blur-sm  overflow-auto shadow-md w-full rounded-xl"
      defaultOpen={true}
    >
      <DisclosureButton className="z-10 group rounded-lg flex w-full justify-between items-center">
        <span className="flex justify-center items-center gap-2 font-semibold">
          <FaCode />
          Code
        </span>
        <FaAngleDown className="transition duration-200 ease-in-out group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel transition className="mt-5 transition duration-800 ease-in-out data-[closed]:-translate-y-2 data-[closed]:opacity-0">
        <pre>{children}</pre>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default CodeBlock;
