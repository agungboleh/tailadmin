import { BsList, BsXLg } from "react-icons/bs";

interface ToggleSidebarProps {
  onToggleDesktop: () => void;
  onToggleMobile: () => void;
  isMobileOpen: boolean;
}

export default function ToggleSidebar({
  onToggleDesktop,
  onToggleMobile,
  isMobileOpen
}: ToggleSidebarProps) {

  return (
    <>
      <button onClick={onToggleDesktop} aria-label="Toggle Sidebar" className="hidden xl:flex items-center justify-center w-11 h-11 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-lg cursor-pointer"> <BsList className="w-5 h-5" />
      </button>
      <button onClick={onToggleMobile} aria-label={isMobileOpen ? "Close Sidebar" : "Open Sidebar"} className="flex xl:hidden items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-lg cursor-pointer"> {isMobileOpen ? <BsXLg className="w-5 h-5" /> : <BsList className="w-5 h-5" />}
      </button>
    </>
  );
}
