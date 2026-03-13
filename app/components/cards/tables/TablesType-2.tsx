"use client";

import { BsArrowRight } from "react-icons/bs";
import ActionButton from "../../buttons/Action";
import ButtonRightIcon from "../../buttons/ButtonRightIcon";
import AnalyticsTable1 from "../../tables/AnalyticsTableType-1";

interface CardsTablesType2Props {
    title: string;
}

const tableData = [
    { id: 1, source: "Google", value: "4.7K" },
    { id: 2, source: "Facebook", value: "3.4K" },
    { id: 3, source: "Threads", value: "2.9K" },
    { id: 4, source: "Google", value: "1.5K" },
];

export default function CardsTablesType2({ title }: CardsTablesType2Props) {
    return (
        <div className="rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-white/3">
            <div className="rounded-xl p-6 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg">{title}</p>
                    <ActionButton />
                </div>
                <div className="max-w-full overflow-x-auto mt-2.5">
                    <AnalyticsTable1 headers={["Source", "Visitors"]} data={tableData} />
                </div>
                <div>
                    <ButtonRightIcon icon={<BsArrowRight size={20} />} name={"Channels Report"} type="button" classbutton="cursor-pointer mt-5 w-full py-2 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-sm transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white" classcontent="flex items-center gap-2.5 justify-center mx-0" />
                </div>
            </div>
        </div>
    )
}