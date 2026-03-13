"use client";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useCloseClickOut } from "../function/CloseClickOut";
import Link from "next/link";

export default function ActionButton() {
    const [isOpen, setIsOpen] = useState(false);
    const { buttonRef, dropdownRef } = useCloseClickOut(() => {
        setIsOpen(false);
    });

    return (
        <div className="relative">
            <button ref={buttonRef} onClick={() => setIsOpen(prev => !prev)}
                className="flex items-center text-gray-700 dark:text-gray-400 cursor-pointer">
                <BsThreeDotsVertical className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200" />
            </button>
            {isOpen && (
                <div ref={dropdownRef}>
                    <div className="absolute right-0 top-10 w-40 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg z-50">
                        <div className="p-2">
                            <div className="gap-0 flex flex-col">
                                <Link href="#" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white cursor-pointer">View More</Link>
                                <Link href="#" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white cursor-pointer">Delete</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
