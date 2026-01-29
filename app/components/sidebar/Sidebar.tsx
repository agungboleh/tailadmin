import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import SidebarMenu from "./SidebarMenu";

interface SidebarProps {
  isExpanded: boolean;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  isMobileOpen: boolean;
}

export default function Sidebar({
  isExpanded,
  setIsHovered,
  isMobileOpen
}: SidebarProps) {

  return (
    <div className="min-h-screen xl:flex">
      <aside
        onMouseEnter={() => !isMobileOpen && setIsHovered(true)}
        onMouseLeave={() => !isMobileOpen && setIsHovered(false)}
        className={`
          fixed top-0 left-0 z-20
          flex flex-col h-screen
          bg-white dark:bg-gray-900
          text-gray-900 dark:border-gray-800
          border-r border-gray-200
          transition-all duration-300 ease-in-out

          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0

          ${isExpanded ? "w-72.5" : "w-22.5"}
        `}>
        <div className={`py-4.5 flex ${!isExpanded ? "lg:justify-center" : "justify-start px-6"
          }`}>
          <Link href="/" className="flex items-center gap-2">
            {isExpanded ? (
              <>
                <img src="/assets/images/logo/logo-black.svg" alt="Logo" className="w-auto h-10 dark:hidden" />
                <img src="/assets/images/logo/logo-white.svg" alt="Logo" className="w-auto h-10 hidden dark:block" />
              </>
            ) : (<img src="/assets/images/logo/logo.svg" alt="Logo" width={40} height={40} />
            )}
          </Link>
        </div>
        <SidebarMenu isCollapsed={!isExpanded} />
      </aside>
      {isMobileOpen && (
        <div className="fixed inset-0 z-10 bg-gray-900/80 xl:hidden"></div>
      )}
    </div>
  )
}