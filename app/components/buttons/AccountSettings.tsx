import { BsGear } from "react-icons/bs";

export default function AccountSettingsButton() {
    return (
        <button onClick={() => window.location.href = "/account-settings"} className="cursor-pointer w-full py-2 rounded-lg font-medium text-sm transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-200 hover:text-gray-800 hover:dark:text-white">
            <div className="flex items-center gap-2.5 mx-5">
                <span className="text-sm"><BsGear size={20}/></span>
                <span>Account Settings</span>
            </div>
        </button>
    );
}