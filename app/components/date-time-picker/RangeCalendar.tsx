"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { BsCalendar4 } from "react-icons/bs";
import "flatpickr/dist/flatpickr.css";

const Flatpickr = dynamic(() => import("react-flatpickr"), {
    ssr: false,
});

export default function RangeCalendar() {
    const fpRef = useRef<any>(null);

    return (
        <div className="relative inline-block lg:mt-0 mt-2.5">
            <BsCalendar4 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-200" />
            <Flatpickr
                ref={fpRef}
                options={{
                    mode: "range",
                    dateFormat: "M d",
                    position: "below",
                    monthSelectorType: "static",
                }}
                className="w-40 rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                placeholder="Select Date..."
            />
        </div>
    );
}