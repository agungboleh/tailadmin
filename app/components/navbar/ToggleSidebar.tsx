import { BsList } from "react-icons/bs";

interface ToggleSidebarProps {
  onToggle: () => void;
}

export default function ToggleSidebar({ onToggle }: ToggleSidebarProps) {
    return (
        <button onClick={onToggle} className="items-center justify-center  w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 flex dark:text-gray-400 lg:h-11 lg:w-11 xl:border cursor-pointer" aria-label="Toggle Sidebar">
            <BsList className="w-5 h-5" />
        </button>
    )
};