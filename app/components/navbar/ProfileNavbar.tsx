import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import DropdownProfile from "./DropdownProfile";
import { useCloseClickOut } from "../function/CloseClickOut";

export default function ProfileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { buttonRef, dropdownRef } = useCloseClickOut(() => {
        setIsOpen(false);
    });

    return (
        <div className="relative">
            <button ref={buttonRef} onClick={() => setIsOpen(prev => !prev)}
                className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400 cursor-pointer">
                <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
                    <img src="https://i.pravatar.cc/44?img=60" alt="Avatar" className="object-cover w-full h-full" />
                </span>
                <span className="block mr-2 font-semibold text-sm">Agung</span>
                <BsChevronDown className={`w-3 h-3 stroke-2 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {isOpen && (
                <div ref={dropdownRef}> <DropdownProfile isOpen={isOpen} onClose={() => setIsOpen(false)} />
                </div>
            )}
        </div>
    );
}
