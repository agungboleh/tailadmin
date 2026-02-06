"use client";

import ToggleSidebar from "./ToggleSidebar";
import SearchNavbar from "./SearchNavbar";
import ToggleTheme from "./ToggleTheme";
import NotificationNavbar from "./NotificationNavbar";
import ProfileNavbar from "./ProfileNavbar";
import ToggleMore from "./ToggleMore";
import { useState } from "react";

interface NavbarProps {
    toggleSidebar: () => void;
    isExpanded: boolean;
    toggleSidebarMobile: () => void;
    isMobileOpen: boolean;
}

export default function Navbar({
    toggleSidebar,
    isExpanded,
    toggleSidebarMobile,
    isMobileOpen = false,
}: NavbarProps) {
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
    const [hasUnreadNotification, setHasUnreadNotification] = useState(true);
    return (
        <div className={`z-50 sticky top-0 transition-all duration-300 ease-in-out ${isExpanded ? "xl:ml-72.5" : "lg:ml-22.5"}
            }`}>
            <header className="flex w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="flex flex-col grow xl:flex-row xl:px-6">
                    <div className="flex items-center justify-between w-full gap-2 px-6 py-3 sm:gap-4 xl:justify-normal xl:border-b-0 xl:px-0 border-b border-gray-200 dark:border-gray-800">
                        <ToggleSidebar onToggleDesktop={toggleSidebar} onToggleMobile={toggleSidebarMobile} isMobileOpen={isMobileOpen} />
                        <SearchNavbar />
                        <div className="xl:hidden">
                            <img src="/assets/images/logo/logo-black.svg" alt="Logo" className="w-auto h-7.5 dark:hidden" />
                            <img src="/assets/images/logo/logo-white.svg" alt="Logo" className="w-auto h-7.5 hidden dark:block" />
                        </div>
                        <div className="xl:hidden">
                            <ToggleMore
                                isOpen={isMoreMenuOpen}
                                onToggle={() => setIsMoreMenuOpen(v => !v)}
                            />
                        </div>
                    </div>
                    <div className="hidden items-center justify-between w-full gap-4 px-6 py-3 xl:flex shadow-theme-md xl:justify-end xl:px-0 xl:shadow-none">
                        <div className="flex items-center gap-2 2xsm:gap-3">
                            <ToggleTheme />
                            <NotificationNavbar
                                notifying={hasUnreadNotification}
                                setNotifying={setHasUnreadNotification}
                            />
                        </div>
                        <ProfileNavbar />
                    </div>
                    {isMoreMenuOpen && (
                        <div className="xl:hidden sticky z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-3 animate-slideDown">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <ToggleTheme />
                                    <NotificationNavbar
                                        notifying={hasUnreadNotification}
                                        setNotifying={setHasUnreadNotification}
                                    />
                                </div>
                                <ProfileNavbar />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}