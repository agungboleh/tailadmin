import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import SidebarMenu from "./SidebarMenu";

interface SidebarProps {
  isExpanded: boolean;
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  isMobileOpen: boolean;
  setIsMobileOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({
  isExpanded,
  setIsHovered,
  isMobileOpen,
  setIsMobileOpen,
}: SidebarProps) {

  const handleHover = (value: boolean) => {
    if (!isMobileOpen) setIsHovered(value);
  };

  return (
    <div className="relative">
      <aside
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        className={`fixed top-0 left-0 z-20 flex flex-col h-screen bg-white dark:bg-gray-900
        text-gray-900 border-r border-gray-200 dark:border-gray-800
        transition-all duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        xl:translate-x-0
        ${isExpanded ? "w-72.5" : "w-22.5"}`}
      >
        <div className={`py-4.5 flex ${!isExpanded ? "lg:justify-center" : "px-6"}`}>
          <Link href="/" className="flex items-center gap-2">
            {isExpanded ? (
              <>
                <img src="/assets/images/logo/logo-black.svg" className="h-10 dark:hidden" />
                <img src="/assets/images/logo/logo-white.svg" className="h-10 hidden dark:block" />
              </>
            ) : (
              <img src="/assets/images/logo/logo.svg" width={40} height={40} />
            )}
          </Link>
        </div>

        <SidebarMenu isCollapsed={!isExpanded} />
      </aside>

      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-10 bg-gray-900/80 xl:hidden"
        />
      )}
    </div>
  );
}