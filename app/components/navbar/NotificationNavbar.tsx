import { useState } from "react";
import { BsBell } from "react-icons/bs";


export default function NotificationNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [notifying, setNotifying] = useState(true);
    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function closeDropdown() {
        setIsOpen(false);
    }

    const handleClick = () => {
        toggleDropdown();
        setNotifying(false);
    };
    return (
        <div className="relative">
            <button onClick={handleClick} className="relative flex items-center justify-center cursor-pointer border rounded-full h-11 w-11 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800 hover:text-gray-700 hover:dark:text-white">
                <span className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-red-500 flex ${notifying ? '' : 'hidden'}`}>
                    <span className="absolute inline-flex w-full h-full bg-red-300 rounded-full opacity-75 animate-ping"></span>
                </span>
                <BsBell className="w-5 h-5" />
            </button>
        </div>
    )
};