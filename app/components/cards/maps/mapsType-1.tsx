import ActionButton from "@/app/components/buttons/Action";
import CountryMap from "@/app/components/maps/CountryMap";
import ProgressBarOutsideLabel from "@/app/components/progress-bar/OutsideLabel";

export default function MapsIconType1() {
    return (
        <div className="rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-white/3">
            <div className="rounded-xl p-6 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
                <div className="flex justify-between">
                    <p className="font-semibold text-lg">Customers Demographic</p>
                    <ActionButton />
                </div>
                <p className="text-sm text-gray-500">Number of customer based on country</p>
                <div className="relative">
                    <div className="flex justify-center px-4 py-6 my-6 overflow-hidden border border-gray-200 rounded-2xl dark:border-gray-700 sm:px-6">
                        <div id="mapOne" className="mapOne map-btn -mx-4 -my-6 h-53 w-63 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-167 lg:w-158.5 xl:w-98.25 2xl:w-138.5">
                            <CountryMap />
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="items-center w-full rounded-full max-w-8">
                                    <img src="https://cdn-icons-png.flaticon.com/128/197/197374.png" alt="usa" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm dark:text-white/90">
                                        USA
                                    </p>
                                    <span className="block text-gray-500 text-xs dark:text-gray-400">
                                        2,379 Customers
                                    </span>
                                </div>
                            </div>
                            <ProgressBarOutsideLabel value={79} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="items-center w-full rounded-full max-w-8">
                                    <img src="https://cdn-icons-png.flaticon.com/128/197/197560.png" alt="france" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm dark:text-white/90">
                                        France
                                    </p>
                                    <span className="block text-gray-500 text-xs dark:text-gray-400">
                                        589 Customers
                                    </span>
                                </div>
                            </div>
                            <ProgressBarOutsideLabel value={23} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}