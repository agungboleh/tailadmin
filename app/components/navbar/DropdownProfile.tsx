import { BsBoxArrowLeft, BsGear, BsPerson, BsQuestionCircle } from "react-icons/bs";
import ButtonLeftIcon from "../buttons/ButtonLeftIcon";

interface DropdownProfileProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DropdownProfile({ isOpen,
}: DropdownProfileProps) {
    if (!isOpen) return null;
    return (
        <div className="absolute right-0 top-14 w-65 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg z-50">
            <div className="p-4">
                <div className="flex flex-col gap-2">
                    <div>
                        <div className="font-semibold text-gray-700 dark:text-gray-200">Agung Bayu Saputro</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">agung.bayu.saputro@email.com</div>
                    </div>
                    <div className="py-3 gap-2 flex flex-col border-y border-gray-200 dark:border-gray-700">
                        <ButtonLeftIcon icon={<BsPerson size={20} />} name={"Edit Profile"} type="button" link={"/profile"} classbutton="cursor-pointer w-full py-2 rounded-lg font-medium text-sm transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-200 hover:text-gray-800 hover:dark:text-white" classcontent="flex items-center gap-2.5 mx-5" />
                        <ButtonLeftIcon icon={<BsGear size={20} />} name={"Account Settings"} type="button" link={"/account-settings"} classbutton="cursor-pointer w-full py-2 rounded-lg font-medium text-sm transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-200 hover:text-gray-800 hover:dark:text-white" classcontent="flex items-center gap-2.5 mx-5" />
                        <ButtonLeftIcon icon={<BsQuestionCircle size={20} />} name={"Support"} type="button" link={"/support"} classbutton="cursor-pointer w-full py-2 rounded-lg font-medium text-sm transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-200 hover:text-gray-800 hover:dark:text-white" classcontent="flex items-center gap-2.5 mx-5" />
                    </div>
                    <div>
                        <ButtonLeftIcon icon={<BsBoxArrowLeft size={20} />} name={"Sign Out"} type="button" link={"/sign-in"} classbutton="cursor-pointer w-full py-2 rounded-lg font-medium text-sm transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-200 hover:text-gray-800 hover:dark:text-white" classcontent="flex items-center gap-2.5 mx-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}