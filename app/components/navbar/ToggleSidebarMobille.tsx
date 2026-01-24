import { BsList, BsXLg } from "react-icons/bs";

interface ToggleSidebarMobileProps {
  onToggle: () => void;
  isMobileOpen: boolean;
}

export default function ToggleSidebarMobile({
  onToggle,
  isMobileOpen
}: ToggleSidebarMobileProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-center
                 w-10 h-10 lg:w-11 lg:h-11
                 text-gray-500 dark:text-gray-400
                 border border-gray-200 dark:border-gray-800
                 rounded-lg cursor-pointer
                 z-99999 xl:hidden"
      aria-label={isMobileOpen ? "Close Sidebar" : "Open Sidebar"}
    >
      {isMobileOpen
        ? <BsXLg className="w-5 h-5" />
        : <BsList className="w-5 h-5" />
      }
    </button>
  );
}
