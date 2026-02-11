import { BsBriefcase, BsCalendar4, BsCardChecklist, BsCart3, BsChatText, BsEnvelope, BsFiles, BsGrid, BsHeadset, BsLayoutWtf, BsPerson, BsPieChart, BsPlug, BsRobot, BsTable } from "react-icons/bs";
import { useState } from "react";
import MenuSingle from "./MenuSingle";
import MenuDropdown from "./MenuDropdown";
import MenuCategory from "./MenuCategory";

interface SidebarMenuProps {
    isCollapsed: boolean;
}

export default function SidebarMenu({ isCollapsed }: SidebarMenuProps) {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const dropdownMenu = (menu: string) => { setOpenMenu(openMenu === menu ? null : menu); };

    return (
        <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar mt-3 lg:mt-6">
            <nav className="mb-15">
                <div className="flex flex-col gap-4">
                    <MenuCategory title="Main" isCollapsed={isCollapsed}>
                        <MenuDropdown
                            icon={<BsGrid size={20} />}
                            label="Dashboard"
                            isOpen={openMenu === "Dashboard"}
                            onClick={() => dropdownMenu("Dashboard")}
                            collapsed={isCollapsed}
                            subItems={[
                                { label: "Ecommerce", href: "/ecommerce" },
                                { label: "Analytics", href: "/analytics" },
                                { label: "Marketing", href: "/marketing" },
                                { label: "CRM", href: "/crm" },
                                { label: "Stocks", href: "/stocks" },
                                { label: "SaaS", href: "/saas", subBadge: "NEW" },
                                { label: "Logistics", href: "/logistics", subBadge: "NEW" },
                            ]}
                        />
                        <MenuDropdown
                            icon={<BsRobot size={20} />}
                            label="AI Assistant"
                            isOpen={openMenu === "AI Assistant"}
                            onClick={() => dropdownMenu("AI Assistant")}
                            collapsed={isCollapsed}
                            badge="NEW"
                            subItems={[
                                { label: "Text Generator", href: "/text-generator" },
                                { label: "Image Generator", href: "/image-generator" },
                                { label: "Code Generator", href: "/code-generator" },
                                { label: "Video Generator", href: "/video-generator" },
                            ]}
                        />
                        <MenuDropdown
                            icon={<BsCart3 size={20} />}
                            label="E-commerce"
                            isOpen={openMenu === "E-commerce"}
                            onClick={() => dropdownMenu("E-commerce")}
                            collapsed={isCollapsed}
                            badge="NEW"
                            subItems={[
                                { label: "Products", href: "/products-list" },
                                { label: "Add Product", href: "/add-product" },
                                { label: "Billing", href: "/billing" },
                                { label: "Invoices", href: "/invoices" },
                                { label: "Single Invoice", href: "/single-invoice" },
                                { label: "Create Invoice", href: "/create-invoice" },
                                { label: "Transactions", href: "/transactions" },
                                { label: "Single Transaction", href: "/single-transaction" },
                            ]}
                        />
                        <MenuSingle
                            icon={<BsCalendar4 size={20} />}
                            label="Calendar"
                            collapsed={isCollapsed}
                            href="/calendar"
                        />
                        <MenuSingle
                            icon={<BsPerson size={20} />}
                            label="User Profile"
                            collapsed={isCollapsed}
                            href="/profile"
                        />
                        <MenuDropdown
                            icon={<BsBriefcase size={20} />}
                            label="Task"
                            isOpen={openMenu === "Task"}
                            onClick={() => dropdownMenu("Task")}
                            collapsed={isCollapsed}
                            subItems={[
                                { label: "List", href: "/task-list", subBadge: "PRO" },
                                { label: "Kanban", href: "/task-kanban", subBadge: "PRO" },
                            ]}
                        />
                        <MenuDropdown
                            icon={<BsCardChecklist size={20} />}
                            label="Forms"
                            isOpen={openMenu === "Forms"}
                            onClick={() => dropdownMenu("Forms")}
                            collapsed={isCollapsed}
                            subItems={[
                                { label: "Form Elements", href: "/form-elements" },
                                { label: "Form Layout", href: "/form-layout", subBadge: "PRO" },
                            ]}
                        />
                        <MenuDropdown
                            icon={<BsTable size={20} />}
                            label="Tables"
                            isOpen={openMenu === "Tables"}
                            onClick={() => dropdownMenu("Tables")}
                            collapsed={isCollapsed}
                            subItems={[
                                { label: "Basic Tables", href: "/basic-tables" },
                                { label: "Data Tables", href: "/data-tables", subBadge: "PRO" },
                            ]}
                        />
                        <MenuDropdown
                            icon={<BsFiles size={20} />}
                            label="Pages"
                            isOpen={openMenu === "Pages"}
                            onClick={() => dropdownMenu("Pages")}
                            collapsed={isCollapsed}
                            subItems={[
                                { label: "File Manager", href: "/file-manager" },
                                { label: "Pricing Tables", href: "/pricing-tables" },
                                { label: "FAQ", href: "/faq" },
                                { label: "API Keys", href: "/api-keys", subBadge: "NEW" },
                                { label: "Integrations", href: "/integrations", subBadge: "NEW" },
                                { label: "Blank Page", href: "/blank" },
                                { label: "404 Error", href: "/error-404" },
                                { label: "500 Error", href: "/error-500" },
                                { label: "503 Error", href: "/error-503" },
                                { label: "Coming Soon", href: "/coming-soon" },
                                { label: "Maintenance", href: "/maintenance" },
                                { label: "Success", href: "/success" },
                            ]}
                        />
                    </MenuCategory>
                    <MenuCategory title="Support" isCollapsed={isCollapsed}>
                        <MenuSingle
                            icon={<BsChatText size={20} />}
                            label="Chat"
                            collapsed={isCollapsed}
                            href="/chat"
                        />
                        <MenuDropdown
                            icon={<BsHeadset size={20} />}
                            label="Support Ticket"
                            isOpen={openMenu === "Support Ticket"}
                            onClick={() => dropdownMenu("Support Ticket")}
                            collapsed={isCollapsed}
                            badge="NEW"
                            subItems={[
                                { label: "Ticket List", href: "/support-tickets" },
                                { label: "Ticket Reply", href: "/support-ticket-reply" },
                            ]}
                        />
                        <MenuDropdown
                            icon={<BsEnvelope size={20} />}
                            label="Email"
                            isOpen={openMenu === "Email"}
                            onClick={() => dropdownMenu("Email")}
                            collapsed={isCollapsed}
                            subItems={[
                                { label: "Inbox", href: "/inbox" },
                                { label: "Details", href: "/inbox-details" },
                            ]}
                        />
                    </MenuCategory>
                    <MenuCategory title="Others" isCollapsed={isCollapsed}>
                        <MenuDropdown
                            icon={<BsPieChart size={20} />}
                            label="Charts"
                            isOpen={openMenu === "Charts"}
                            onClick={() => dropdownMenu("Charts")}
                            collapsed={isCollapsed}
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
                            onClick={() => dropdownMenu("UI Elements")}
                            collapsed={isCollapsed}
                            subItems={[
                                { label: "Alerts", href: "/alerts" },
                                { label: "Avatar", href: "/avatar" },
                                { label: "Badge", href: "/badge" },
                                { label: "Breadcrumb", href: "/breadcrumb" },
                                { label: "Buttons", href: "/buttons" },
                                { label: "Buttons Group", href: "/buttons-group" },
                                { label: "Cards", href: "/cards" },
                                { label: "Carousel", href: "/carousel" },
                                { label: "Dropdowns", href: "/dropdowns" },
                                { label: "Images", href: "/images" },
                                { label: "Links", href: "/links" },
                                { label: "List", href: "/list" },
                                { label: "Modals", href: "/modals" },
                                { label: "Notification", href: "/notification" },
                                { label: "Pagination", href: "/pagination" },
                                { label: "Popovers", href: "/popovers" },
                                { label: "Progressbar", href: "/progress-bar" },
                                { label: "Ribbons", href: "/ribbons" },
                                { label: "Spinners", href: "/spinners" },
                                { label: "Tabs", href: "/tabs" },
                                { label: "Tooltips", href: "/tooltips" },
                                { label: "Videos", href: "/videos" }
                            ]}
                        />
                        <MenuDropdown
                            icon={<BsPlug size={20} />}
                            label="Authentication"
                            isOpen={openMenu === "Authentication"}
                            onClick={() => dropdownMenu("Authentication")}
                            collapsed={isCollapsed}
                            subItems={[
                                { label: "Sign In", href: "/sign-in" },
                                { label: "Sign Up", href: "/sign-up" },
                                { label: "Reset Password", href: "/reset-password" },
                                { label: "Two Step Verification", href: "/two-step-verification" },
                            ]}
                        />
                    </MenuCategory>
                </div>
            </nav>
        </div>
    )
};