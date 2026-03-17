"use client";

import { BsArrowRight } from "react-icons/bs";
import ActionButton from "../../buttons/Action";
import ButtonRightIcon from "../../buttons/ButtonRightIcon";
import AnalyticsTable1 from "../../tables/AnalyticsTableType-1";

interface CardsTablesType3Props {
    title: string;
}

const tableData = [
    { id: 1, source: "tailadmin.com", value: "4.7K" },
    { id: 2, source: "preview.tailadmin.com", value: "3.4K" },
    { id: 3, source: "docs.tailadmin.com", value: "2.9K" },
    { id: 4, source: "component.tailadmin.com", value: "1.5K" },
];

export default function CardsTablesType3({ title }: CardsTablesType3Props) {
    return (
        <div>
            <div className="rounded-xl p-6 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg">{title}</p>
                    <ActionButton />
                </div>
                <div className="max-w-full overflow-x-auto mt-2.5">
                    <AnalyticsTable1 headers={["Source", "Pageview"]} data={tableData} />
                </div>
                <div>
                    <ButtonRightIcon icon={<BsArrowRight size={20} />} name={"Channels Report"} type="button" classbutton="cursor-pointer mt-5 w-full py-2 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-sm transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white" classcontent="flex items-center gap-2.5 justify-center mx-0" />
                </div>
            </div>
        </div>
    )
}