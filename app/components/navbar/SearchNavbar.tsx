import { BsSearch } from "react-icons/bs";

export default function SearchNavbar() {
    return (
        <div className="hidden xl:block">
            <form>
                <div className="relative">
                    <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2"><BsSearch className="text-gray-500" /></span>
                    <input className="h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-blue-300 focus:outline-hidden focus:ring-3 focus:ring-blue-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder:text-white/30 dark:focus:border-blue-800 xl:w-107.5"
                        placeholder="Search or type command..."
                        type="text"
                    >
                    </input>
                </div>
            </form>
        </div>
    )
};