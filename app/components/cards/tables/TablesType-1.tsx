import { BsSliders } from "react-icons/bs";
import EcommerceTable from "../../tables/EcommerceTable";
import ButtonBasic from "../../buttons/ButtonBasic";
import ButtonLeftIcon from "../../buttons/ButtonLeftIcon";

export default function CardsTablesType1() {
    return (
        <div className="rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-white/3">
            <div className="rounded-xl p-6 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg">Recent Orders</p>
                    <div className="inline-flex gap-2">
                        <ButtonLeftIcon icon={<BsSliders size={16} />} name={"Filter"} type="button" classbutton="cursor-pointer rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200" classcontent="flex items-center gap-2 mx-3"/>
                        <ButtonBasic name={"See All"} type="button" link="" className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200"/>
                    </div>
                </div>
                <div className="max-w-full overflow-x-auto mt-2.5">
                    <EcommerceTable />
                </div>
            </div>
        </div>
    )
}