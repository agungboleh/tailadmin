import ToggleSidebar from "./ToggleSidebar";
import SearchNavbar from "./SearchNavbar";
import ToggleTheme from "./ToggleTheme";
import NotificationNavbar from "./NotificationNavbar";
import ProfileNavbar from "./ProfileNavbar";
import ToggleSidebarMobile from "./ToggleSidebarMobille";

interface NavbarProps {
    toggleSidebar: () => void;
    isExpanded: boolean;
    toggleSidebarMobile: () => void;
    isMobileOpen: boolean;

}

export default function Navbar({ toggleSidebar, isExpanded, toggleSidebarMobile, isMobileOpen = false }: NavbarProps) {
    return (
        <div className={`z-50 sticky top-0 transition-all duration-300 ease-in-out ${isExpanded ? "xl:ml-72.5" : "lg:ml-22.5"}
            }`}>
            <header className="flex w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="flex flex-col grow xl:flex-row xl:px-6">
                    <div className="hidden xl:block">
                        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 sm:gap-4 xl:justify-normal xl:border-b-0 xl:px-0 lg:py-4">
                            <ToggleSidebar onToggle={toggleSidebar} />
                            <SearchNavbar />
                        </div>
                    </div>
                    <div className="block xl:hidden">
                        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 sm:gap-4 xl:justify-normal xl:border-b-0 xl:px-0 lg:py-4">
                            <ToggleSidebarMobile onToggle={toggleSidebarMobile} isMobileOpen={isMobileOpen} />
                            <>
                                <img src="/assets/images/logo/logo-black.svg" alt="Logo" className="w-auto h-7.5 dark:hidden" />
                                <img src="/assets/images/logo/logo-white.svg" alt="Logo" className="w-auto h-10 hidden dark:block" />
                            </>
                            <ToggleSidebarMobile onToggle={toggleSidebarMobile} isMobileOpen={isMobileOpen} />
                        </div>
                    </div>
                    <div className="hidden items-center justify-between w-full gap-4 px-5 py-4 xl:flex shadow-theme-md xl:justify-end xl:px-0 xl:shadow-none">
                        <div className="flex items-center gap-2 2xsm:gap-3">
                            <ToggleTheme />
                            <NotificationNavbar />
                        </div>
                        <ProfileNavbar />
                    </div>
                </div>
            </header>
        </div>
    );
}