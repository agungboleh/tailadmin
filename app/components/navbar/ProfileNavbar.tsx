import { BsChevronDown } from "react-icons/bs";

export default function ProfileNavbar() {
    return (
        <div className="relative">
            <button className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400 cursor-pointer">
                <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
                    <img src="https://i.pravatar.cc/44?img=60" alt="Avatar" className="object-cover w-full h-full" />
                </span>
                <span className="block mr-2 font-medium text-sm">Agung</span>
                <BsChevronDown className="w-3 h-3 stroke-2" />
            </button>
        </div>
    )
};