import AccountSettingsButton from "../buttons/AccountSettings";
import EditProfileButton from "../buttons/EditProfile";
import SignOutButton from "../buttons/SignOut";
import SupportButton from "../buttons/Support";

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
                        <EditProfileButton />
                        <AccountSettingsButton />
                        <SupportButton />
                    </div>
                    <div>
                        <SignOutButton />
                    </div>
                </div>
            </div>
        </div>
    );
}