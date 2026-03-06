import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import ActionButton from "../../buttons/Action";
import RadialBarChart from "../../charts/RadialBarChart";

export default function CardsChartType2() {
    return (
        <div className="rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-white/3">
            <div className="rounded-xl p-6 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
                <div className="flex justify-between">
                    <p className="font-semibold text-lg">Monthly Target</p>
                    <ActionButton />
                </div>
                <p className="text-sm text-gray-500">Target you've set for each month</p>
                <div className="relative">
                    <RadialBarChart data={[75.55]} />
                    <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[95%] rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-500/15 dark:text-green-500">
                        +10%
                    </span>
                </div>
                <p className="mx-auto mt-10 w-full max-w-95 text-center text-sm text-gray-500 sm:text-base">
                    You earn $3287 today, it's higher than last month. Keep up your good
                    work!
                </p>
            </div>
            <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-6">
                <div>
                    <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
                        Target
                    </p>
                    <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                        $20K <BsArrowDown size={16} className="text-red-500" />
                    </p>
                </div>
                <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>
                <div>
                    <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
                        Revenue
                    </p>
                    <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                        $20K <BsArrowUp size={16} className="text-green-500" />
                    </p>
                </div>
                <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>
                <div>
                    <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
                        Today
                    </p>
                    <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                        $20K <BsArrowUp size={16} className="text-green-500" />
                    </p>
                </div>
            </div>
        </div>
    )
}