import { BsSun, BsMoon } from "react-icons/bs";
import { ThemeMode } from "../function/ThemeMode";

export default function ThemeModeButton({ className = "" }) {
  const { isDarkMode, useThemeMode } = ThemeMode();

  return (
    <button
      onClick={useThemeMode}
      className={`absolute top-5 right-5 cursor-pointer p-3.5 rounded-full transition-transform hover:scale-125
        bg-blue-500 dark:bg-white ${className}`}
    >
      {isDarkMode ? (
        <BsSun size={20} className="text-neutral-900" />
      ) : (
        <BsMoon size={20} className="text-white" />
      )}
    </button>
  );
}