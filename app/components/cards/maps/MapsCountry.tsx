import CountryMap, { MarkerCountry } from "@/app/components/maps/CountryMap";
import ProgressBarOutsideLabel from "@/app/components/progress-bar/OutsideLabel";

export type CountryStat = {
    flag: string;
    name: string;
    customers: string;
    progress: number;
};

interface CardsMapsCountryProps {
    header: React.ReactNode;
}

interface MarkerCountryProps {
    markers: MarkerCountry[]
}

interface CountryStatProps {
    countries: CountryStat[];
}
type Props = CardsMapsCountryProps & MarkerCountryProps & CountryStatProps

export default function CardsMapsCountry({ header, markers, countries }: Props) {
    return (
        <div className="rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-white/3">
            <div className="rounded-xl p-6 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
                {header}
                <div className="relative">
                    <div className="flex justify-center px-4 py-6 my-6 overflow-hidden border border-gray-200 rounded-2xl dark:border-gray-700 sm:px-6">
                        <div id="mapOne" className="mapOne map-btn -mx-4 -my-6 h-53 w-63 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-167 lg:w-158.5 xl:w-98.25 2xl:w-138.5">
                            <CountryMap markers={markers} />
                        </div>
                    </div>
                    <div className="space-y-5">
                        {countries.map((country, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="items-center w-full rounded-full max-w-8">
                                        <img src={country.flag} alt={country.name} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm dark:text-white/90">
                                            {country.name}
                                        </p>
                                        <span className="block text-gray-500 text-xs dark:text-gray-400">
                                            {country.customers} Customers
                                        </span>
                                    </div>
                                </div>
                                <ProgressBarOutsideLabel value={country.progress} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}