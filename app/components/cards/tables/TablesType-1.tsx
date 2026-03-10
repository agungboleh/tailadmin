import FilterButton from "../../buttons/Filter";
import SeeAllButton from "../../buttons/SeeAll";
import EcommerceTable from "../../tables/EcommerceTable";

export default function CardsTablesType1() {
    return (
        <div className="rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-white/3">
            <div className="rounded-xl p-6 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg">Recent Orders</p>
                    <div className="inline-flex gap-2">
                        <FilterButton />
                        <SeeAllButton />
                    </div>
                </div>
                <div className="max-w-full overflow-x-auto mt-2.5">
                    <EcommerceTable />
                </div>
            </div>
        </div>
    )
}