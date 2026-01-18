import Link from "next/link";
import MenuSidebar from "./MenuSidebar";
import { Dispatch, SetStateAction, useState } from "react";

interface SidebarProps {
  isExpanded: boolean;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isExpanded, setIsHovered }: SidebarProps) {

  return (
    <div className="min-h-screen xl:flex">
      <aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed flex flex-col top-0 px-6 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-10 border-r border-gray-200 ${isExpanded ? "w-72.5" : "w-22.5"}`}>
        <div className={`py-5 flex ${!isExpanded ? "lg:justify-center" : "justify-start"
          }`}>
          <Link href="/" className="flex items-center gap-2">
            {isExpanded ? (
              <>
                <img src="/assets/images/logo/logo-black.svg" alt="Logo" className="w-40 h-auto dark:hidden" />
                <img src="/assets/images/logo/logo-white.svg" alt="Logo" className="w-40 h-auto hidden dark:block" />
              </>
            ) : (<img src="/assets/images/logo/logo.svg" alt="Logo" width={32} height={32} />
            )}
          </Link>
        </div>
        <MenuSidebar isCollapsed={!isExpanded} />
      </aside>
    </div>
  )
}