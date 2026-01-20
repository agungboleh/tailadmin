import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface MenuDropdownProps {
    icon: React.ReactNode;
    label: string;
    isOpen: boolean;
    onClick: () => void;
    subItems: { label: string; href: string; subBadge: string }[];
    badge?: string;
    collapsed?: boolean;
}

export default function MenuDropdown({
    icon,
    label,
    isOpen,
    onClick,
    subItems,
    badge,
    collapsed,
}: MenuDropdownProps) {
    const pathname = usePathname();
    const isParentActive = subItems.some((sub) => pathname === sub.href);

    return (
        <div>
            <button
                onClick={onClick}
                className={`relative w-full flex items-center py-2.5 rounded-lg transition-colors
          ${collapsed ? "justify-center px-0" : "justify-between px-3"}
          ${isParentActive
                        ? "bg-blue-50 dark:bg-white text-blue-500 dark:text-brand-light font-semibold"
                        : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                    } `} >
                <div className="flex items-center gap-3">
                    {icon}
                    {!collapsed && (
                        <>
                            <span>{label}</span>
                            {badge && (
                                <span className="ml-auto absolute right-10 border border-green-300 bg-green-100 text-green-500 text-xs px-2 py-0.5 rounded-full">
                                    {badge}
                                </span>
                            )}
                        </>
                    )}
                </div>
                {!collapsed &&
                    (isOpen ? <BsChevronUp size={14} /> : <BsChevronDown size={14} />)}
            </button>
            {!collapsed && isOpen && (
                <div className="ml-9 mt-1 space-y-1">
                    {subItems.map((sub, i) => {
                        const isActive = pathname === sub.href;

                        return (
                            <Link
                                key={i}
                                href={sub.href}
                                className={`block px-2 py-2 rounded-md text-sm transition
                                    ${isActive
                                        ? "bg-blue-50 dark:bg-white text-blue-500 dark:text-brand-light font-semibold"
                                        : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                                    }`}>
                                <div className="flex justify-between">
                                    {sub.label}
                                    {sub.subBadge && (
                                        <span
                                            className={`ml-auto mr-1 text-xs px-2 py-0.5 rounded-full ${sub.subBadge === "PRO"
                                                ? "border border-yellow-300 bg-yellow-100 text-yellow-500"
                                                : "border border-green-300 bg-green-100 text-green-500"
                                                }`}>
                                            {sub.subBadge}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
