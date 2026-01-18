import { BsCalendar, BsDashLg, BsFillGridFill, BsGrid, BsGripHorizontal, BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import ItemMenu from "./ItemMenu";
import ItemMenuDropdown from "./ItemMenuDropdown";

interface MenuSidebarProps {
    isCollapsed: boolean;
}
export default function MenuSidebar({ isCollapsed }: MenuSidebarProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar mt-3 lg:mt-6">
            <nav className="mb-6">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className={`mb-4 text-xs uppercase flex leading-5 text-gray-400 ${isCollapsed
                            ? "lg:justify-center"
                            : "justify-start"
                            }`} >
                            {!isCollapsed ? (
                                "Menu"
                            ) : (
                                <BsDashLg className="size-6" />
                            )}
                        </p>
                        <div className="flex flex-col gap-2 text-sm">
                            <ItemMenuDropdown
                                icon={<BsFillGridFill size={20} />}
                                label="Dashboard"
                                isOpen={open}
                                onClick={() => setOpen(!open)}
                                subItems={[
                                    { label: "Ecommerce", href: "/dashboard", subBadge: "" },
                                    { label: "Analytics", href: "/analytics", subBadge: "" },
                                    { label: "Marketing", href: "/marketing", subBadge: "" },
                                    { label: "CRM", href: "/crm", subBadge: "" },
                                    { label: "Stocks", href: "/stocks", subBadge: "" },
                                    { label: "SaaS", href: "/saas", subBadge: "NEW" },
                                    { label: "Logistics", href: "/subBadge", subBadge: "NEW" },
                                ]}
                            />
                            <ItemMenu
                                icon={<BsCalendar size={20} />}
                                label="Calendar"
                                collapsed={isCollapsed}
                                href="/calendar"
                                badge="NEW"
                            />
                            <ItemMenu
                                icon={<BsPersonCircle size={20} />}
                                label="User Profile"
                                collapsed={isCollapsed}
                                href="/profile"
                                badge=""
                            />
                            
                            {/* <MenuItemDropdown
                            title={"Dashboard"}
                            icon={<BsGrid size={20} />}
                            badge="NEW"
                            subMenus={[
                                { label: "Ecommerce", href: "/ecommerce", active: true, badge: "New" },
                                { label: "Analytics", href: "/analytics", active: true, badge: "New" },
                                ]} />
                            <MenuItemDropdown
                                title="AI Assistant"
                                icon={<BsRobot size={20} />}
                                badge="NEW"
                                active={true}
                                subMenus={[
                                    { label: "Ecommerce", href: "/ecommerce", active: true, badge: "New" },
                                    { label: "Analytics", href: "/analytics", badge: "New" },
                                    { label: "Marketing", href: "/marketing", badge: "New" },
                                ]}
                            /> */}
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg px-4 py-2 text-sm text-neutral-500"
                                >
                                    Menu Item {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};