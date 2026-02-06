import { BsThreeDotsVertical } from "react-icons/bs";

interface ToggleMoreProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ToggleMore({ isOpen, onToggle }: ToggleMoreProps) {
  return (
    <button onClick={onToggle} aria-label="Open more menu" aria-expanded={isOpen}
      className="cursor-pointer flex items-center justify-center w-11 h-11 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-500 dark:text-gray-400">
      <BsThreeDotsVertical className={`text-xl transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`} />
    </button>
  );
}
