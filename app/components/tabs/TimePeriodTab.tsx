"use client";
import { useState } from "react";

export default function TimePeriodTab() {
    const [selected, setSelected] = useState<"optionOne" | "optionTwo" | "optionThree">("optionOne");
    const getButtonClass = (option: "optionOne" | "optionTwo" | "optionThree") =>
        selected === option
            ? "shadow-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
            : "text-gray-500 dark:text-gray-400";

    return (
        <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 dark:bg-gray-900 p-0.5">
            <button
                onClick={() => setSelected("optionOne")}
                className={`cursor-pointer px-3 py-2 font-medium w-full rounded-md text-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass("optionOne")}`} >
                Monthly
            </button>
            <button
                onClick={() => setSelected("optionTwo")}
                className={`cursor-pointer px-3 py-2 font-medium w-full rounded-md text-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass("optionTwo")}`} >
                Quarterly
            </button>
            <button
                onClick={() => setSelected("optionThree")}
                className={`cursor-pointer px-3 py-2 font-medium w-full rounded-md text-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass("optionThree")}`} >
                Annually
            </button>
        </div>
    );
};
