import { BsBriefcase, BsCalendar4, BsCardChecklist, BsCart3, BsChatText, BsDashLg, BsEnvelope, BsFiles, BsGrid, BsHeadset, BsLayoutWtf, BsPerson, BsPieChart, BsPlug, BsRobot, BsTable } from "react-icons/bs";
import { useState } from "react";
import MenuSingle from "./MenuSingle";
import MenuDropdown from "./MenuDropdown";

interface SidebarMenuProps {
    isCollapsed: boolean;
}
export default function SidebarMenu({ isCollapsed }: SidebarMenuProps) {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    return (
        <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar mt-3 lg:mt-6">
            <nav className="mb-6">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className={`mb-4 text-xs uppercase flex leading-5 text-gray-400 ${isCollapsed
                            ? "lg:justify-center"
                            : "justify-start px-6"
                            }`} >
                            {!isCollapsed ? (
                                "Main"
                            ) : (
                                <BsDashLg className="size-6" />
                            )}
                        </p>
                        <div className="flex flex-col gap-2 text-sm px-6">
                            <MenuDropdown
                                icon={<BsGrid size={20} />}
                                label="Dashboard"
                                isOpen={openMenu === "Dashboard"}
                                onClick={() => setOpenMenu(openMenu === "Dashboard" ? null : "Dashboard")}
                                collapsed={isCollapsed}
                                badge=""
                                subItems={[
                                    { label: "Ecommerce", href: "/dashboard", subBadge: "" },
                                    { label: "Analytics", href: "/analytics", subBadge: "" },
                                    { label: "Marketing", href: "/marketing", subBadge: "" },
                                    { label: "CRM", href: "/crm", subBadge: "" },
                                    { label: "Stocks", href: "/stocks", subBadge: "" },
                                    { label: "SaaS", href: "/saas", subBadge: "NEW" },
                                    { label: "Logistics", href: "/logistics", subBadge: "NEW" },
                                ]}
                            />
                            <MenuDropdown
                                icon={<BsRobot size={20} />}
                                label="AI Assistant"
                                isOpen={openMenu === "AI Assistant"}
                                onClick={() => setOpenMenu(openMenu === "AI Assistant" ? null : "AI Assistant")}
                                collapsed={isCollapsed}
                                badge="NEW"
                                subItems={[
                                    { label: "Text Generator", href: "/text-generator", subBadge: "" },
                                    { label: "Image Generator", href: "/image-generator", subBadge: "" },
                                    { label: "Code Generator", href: "/code-generator", subBadge: "" },
                                    { label: "Video Generator", href: "/video-generator", subBadge: "" },
                                ]}
                            />
                            <MenuDropdown
                                icon={<BsCart3 size={20} />}
                                label="E-commerce"
                                isOpen={openMenu === "E-commerce"}
                                onClick={() => setOpenMenu(openMenu === "E-commerce" ? null : "E-commerce")}
                                collapsed={isCollapsed}
                                badge="NEW"
                                subItems={[
                                    { label: "Products", href: "/products-list", subBadge: "" },
                                    { label: "Add Product", href: "/add-product", subBadge: "" },
                                    { label: "Billing", href: "/billing", subBadge: "" },
                                    { label: "Invoices", href: "/invoices", subBadge: "" },
                                    { label: "Single Invoice", href: "/single-invoice", subBadge: "" },
                                    { label: "Create Invoice", href: "/create-invoice", subBadge: "" },
                                    { label: "Transactions", href: "/transactions", subBadge: "" },
                                    { label: "Single Transaction", href: "/single-transaction", subBadge: "" },
                                ]}
                            />
                            <MenuSingle
                                icon={<BsCalendar4 size={20} />}
                                label="Calendar"
                                collapsed={isCollapsed}
                                href="/calendar"
                                badge=""
                            />
                            <MenuSingle
                                icon={<BsPerson size={20} />}
                                label="User Profile"
                                collapsed={isCollapsed}
                                href="/profile"
                                badge=""
                            />
                            <MenuDropdown
                                icon={<BsBriefcase size={20} />}
                                label="Task"
                                isOpen={openMenu === "Task"}
                                onClick={() => setOpenMenu(openMenu === "Task" ? null : "Task")}
                                collapsed={isCollapsed}
                                badge=""
                                subItems={[
                                    { label: "List", href: "/task-list", subBadge: "PRO" },
                                    { label: "Kanban", href: "/task-kanban", subBadge: "PRO" },
                                ]}
                            />
                            <MenuDropdown
                                icon={<BsCardChecklist size={20} />}
                                label="Forms"
                                isOpen={openMenu === "Forms"}
                                onClick={() => setOpenMenu(openMenu === "Forms" ? null : "Forms")}
                                collapsed={isCollapsed}
                                badge=""
                                subItems={[
                                    { label: "Form Elements", href: "/form-elements", subBadge: "" },
                                    { label: "Form Layout", href: "/form-layout", subBadge: "PRO" },
                                ]}
                            />
                            <MenuDropdown
                                icon={<BsTable size={20} />}
                                label="Tables"
                                isOpen={openMenu === "Tables"}
                                onClick={() => setOpenMenu(openMenu === "Tables" ? null : "Tables")}
                                collapsed={isCollapsed}
                                badge=""
                                subItems={[
                                    { label: "Basic Tables", href: "/basic-tables", subBadge: "" },
                                    { label: "Data Tables", href: "/data-tables", subBadge: "PRO" },
                                ]}
                            />
                            <MenuDropdown
                                icon={<BsFiles size={20} />}
                                label="Pages"
                                isOpen={openMenu === "Pages"}
                                onClick={() => setOpenMenu(openMenu === "Pages" ? null : "Pages")}
                                collapsed={isCollapsed}
                                badge=""
                                subItems={[
                                    { label: "File Manager", href: "/file-manager", subBadge: "" },
                                    { label: "Pricing Tables", href: "/pricing-tables", subBadge: "" },
                                    { label: "FAQ", href: "/faq", subBadge: "" },
                                    { label: "API Keys", href: "/api-keys", subBadge: "NEW" },
                                    { label: "Integrations", href: "/integrations", subBadge: "NEW" },
                                    { label: "Blank Page", href: "/blank", subBadge: "" },
                                    { label: "404 Error", href: "/error-404", subBadge: "" },
                                    { label: "500 Error", href: "/error-500", subBadge: "" },
                                    { label: "503 Error", href: "/error-503", subBadge: "" },
                                    { label: "Coming Soon", href: "/coming-soon", subBadge: "" },
                                    { label: "Maintenance", href: "/maintenance", subBadge: "" },
                                    { label: "Success", href: "/success", subBadge: "" },
                                ]}
                            />
                        </div>
                    </div>
                    <div>
                        <p className={`mb-4 text-xs uppercase flex leading-5 text-gray-400 ${isCollapsed
                            ? "lg:justify-center"
                            : "justify-start px-6"
                            }`} >
                            {!isCollapsed ? (
                                "Support"
                            ) : (
                                <BsDashLg className="size-6" />
                            )}
                        </p>
                        <div className="flex flex-col gap-2 text-sm px-6">
                            <MenuSingle
                                icon={<BsChatText size={20} />}
                                label="Chat"
                                collapsed={isCollapsed}
                                href="/chat"
                                badge=""
                            />
                            <MenuDropdown
                                icon={<BsHeadset size={20} />}
                                label="Support Ticket"
                                isOpen={openMenu === "Support Ticket"}
                                onClick={() => setOpenMenu(openMenu === "Support Ticket" ? null : "Support Ticket")}
                                collapsed={isCollapsed}
                                badge="NEW"
                                subItems={[
                                    { label: "Ticket List", href: "/support-tickets", subBadge: "" },
                                    { label: "Ticket Reply", href: "/support-ticket-reply", subBadge: "" },
                                ]}
                            />
                            <MenuDropdown
                                icon={<BsEnvelope size={20} />}
                                label="Email"
                                isOpen={openMenu === "Email"}
                                onClick={() => setOpenMenu(openMenu === "Email" ? null : "Email")}
                                collapsed={isCollapsed}
                                badge=""
                                subItems={[
                                    { label: "Inbox", href: "/inbox", subBadge: "" },
                                    { label: "Details", href: "/inbox-details", subBadge: "" },
                                ]}
                            />
                        </div>
                    </div>
                    <div>
                        <p className={`mb-4 text-xs uppercase flex leading-5 text-gray-400 ${isCollapsed
                            ? "lg:justify-center"
                            : "justify-start px-6"
                            }`} >
                            {!isCollapsed ? (
                                "Others"
                            ) : (
                                <BsDashLg className="size-6" />
                            )}
                        </p>
                        <div className="flex flex-col gap-2 text-sm px-6">
                            <MenuDropdown
                                icon={<BsPieChart size={20} />}
                                label="Charts"
                                isOpen={openMenu === "Charts"}
                                onClick={() => setOpenMenu(openMenu === "Charts" ? null : "Charts")}
                                collapsed={isCollapsed}
                                badge=""
                                subItems={[
                                    { label: "Line Chart", href: "/line-chart", subBadge: "PRO" },
                                    { label: "Bar Chart", href: "/bar-chart", subBadge: "PRO" },
                                    { label: "Pie Chart", href: "/pie-chart", subBadge: "PRO" },
                                ]}
                            />
                            <MenuDropdown
                                icon={<BsLayoutWtf size={20} />}
                                label="UI Elements"
                                isOpen={openMenu === "UI Elements"}
                                onClick={() => setOpenMenu(openMenu === "UI Elements" ? null : "UI Elements")}
                                collapsed={isCollapsed}
                                badge=""
                                subItems={[
                                    { label: "Alerts", href: "/alerts", subBadge: "" },
                                    { label: "Avatar", href: "/avatar", subBadge: "" },
                                    { label: "Badge", href: "/badge", subBadge: "" },
                                    { label: "Breadcrumb", href: "/breadcrumb", subBadge: "" },
                                    { label: "Buttons", href: "/buttons", subBadge: "" },
                                    { label: "Buttons Group", href: "/buttons-group", subBadge: "" },
                                    { label: "Cards", href: "/cards", subBadge: "" },
                                    { label: "Carousel", href: "/carousel", subBadge: "" },
                                    { label: "Dropdowns", href: "/dropdowns", subBadge: "" },
                                    { label: "Images", href: "/images", subBadge: "" },
                                    { label: "Links", href: "/links", subBadge: "" },
                                    { label: "List", href: "/list", subBadge: "" },
                                    { label: "Modals", href: "/modals", subBadge: "" },
                                    { label: "Notification", href: "/notification", subBadge: "" },
                                    { label: "Pagination", href: "/pagination", subBadge: "" },
                                    { label: "Popovers", href: "/popovers", subBadge: "" },
                                    { label: "Progressbar", href: "/progress-bar", subBadge: "" },
                                    { label: "Ribbons", href: "/ribbons", subBadge: "" },
                                    { label: "Spinners", href: "/spinners", subBadge: "" },
                                    { label: "Tabs", href: "/tabs", subBadge: "" },
                                    { label: "Tooltips", href: "/tooltips", subBadge: "" },
                                    { label: "Videos", href: "/videos", subBadge: "" }
                                ]}
                            />
                            <MenuDropdown
                                icon={<BsPlug size={20} />}
                                label="Authentication"
                                isOpen={openMenu === "Authentication"}
                                onClick={() => setOpenMenu(openMenu === "Authentication" ? null : "Authentication")}
                                collapsed={isCollapsed}
                                badge=""
                                subItems={[
                                    { label: "Sign In", href: "/sign-in", subBadge: "" },
                                    { label: "Sign Up", href: "/sign-up", subBadge: "" },
                                    { label: "Reset Password", href: "/reset-password", subBadge: "" },
                                    { label: "Two Step Verification", href: "/two-step-verification", subBadge: "" },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};