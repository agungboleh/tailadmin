import { BsRobot, BsChevronDown, BsCart3 } from "react-icons/bs";
import { useState } from "react";
import MenuItemDropdown from "./MenuItemDropdown";

export default function MenuSidebar() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar mt-3 lg:mt-6">
            <nav className="mb-6">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="mb-4 text-xs uppercase flex leading-5 text-gray-400 justify-start">Menu</p>
                        <div className="flex flex-col gap-2 text-sm">
                            {/* {/* <MenuItemDropdown
                                title="Dashboard"
                                icon={<BsGrid size={20} />}
                                badge="New"
                                active={true}
                                subMenus={[
                                    { label: "Ecommerce", href: "/ecommerce", active: true, badge:"New" },
                                    { label: "Analytics", href: "/analytics", badge:"New"  },
                                    { label: "Marketing", href: "/marketing", badge:"New"  },
                                ]}
                            /> */}
                            <MenuItemDropdown
                                title="AI Assistant"
                                icon={<BsRobot size={20} />}
                                badge="New"
                                active={true}
                                subMenus={[
                                    { label: "Ecommerce", href: "/ecommerce", active: true, badge: "New" },
                                    { label: "Analytics", href: "/analytics", badge: "New" },
                                    { label: "Marketing", href: "/marketing", badge: "New" },
                                ]}
                            />
                            <button onClick={() => setOpen((prev) => !prev)} className="w-full px-3 py-2 rounded-lg text-neutral-700 cursor-pointer">
                                <div className="flex flex-row justify-between items-center gap-3">
                                    <div className="flex flex-row items-center gap-3">
                                        <BsRobot size={20} />
                                        <span>AI Assistant</span>
                                    </div>
                                    <BsChevronDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                                        }`} />
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                }`}>
                                <ul>
                                    sad
                                </ul>
                            </div>
                            <button className="w-full px-3 py-2 rounded-lg text-neutral-700 cursor-pointer">
                                <div className="flex flex-row justify-between items-center gap-3">
                                    <div className="flex flex-row items-center gap-3">
                                        <BsCart3 size={20} />
                                        <span>E-commerce</span>
                                    </div>
                                    <BsChevronDown />
                                </div>
                            </button>
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