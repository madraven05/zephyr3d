import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from 'next/link';
import React, { ReactNode } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

interface SidebarCollapsibleItemsProps {
    title: string,
    children: ReactNode;
}

const SidebarCollapsibleItems:React.FC<SidebarCollapsibleItemsProps> = ({title, children}) => {
  return (
    <Disclosure
      as="div"
      className="mb-2"
      defaultOpen={false}
    >
      <DisclosureButton className="z-10 group rounded-lg flex w-full justify-between items-center">
        <p className="flex justify-center items-center gap-2 font-heading uppercase hover:font-semibold transition duration-300 ease-in-out">
          {title}
        </p>
        <FaAngleDown className="transition duration-200 ease-in-out group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel transition className="mt-2 ml-4 duration-200 transition ease-in-out data-[closed]:-translate-y-3 data-[closed]:opacity-0">
        <ul>{children}</ul>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default SidebarCollapsibleItems