import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeMode } from "../function/ThemeMode";

export default function ToggleTheme() {
  const { isDarkMode, useThemeMode } = ThemeMode();

  return (
    <button
      onClick={useThemeMode}
      className="relative flex items-center justify-center cursor-pointer border rounded-full h-11 w-11 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800 hover:text-gray-700 hover:dark:text-white">
      {isDarkMode ? (
        <BsSun size={20} />
      ) : (
        <BsMoon size={20} />
      )}
    </button>
  )
};