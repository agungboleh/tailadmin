import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemMenuProps {
    icon: React.ReactNode;
    label: string;
    textColor?: string;
    collapsed?: boolean;
    href?: string;
    badge?: string;
}

export default function ItemMenu({
    icon,
    label,
    textColor = "text-gray-700 dark:text-gray-200",
    collapsed = false,
    href = "#",
    badge,
}: ItemMenuProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`flex items-center py-2 rounded-md transition-colors
        ${collapsed ? "justify-center px-0" : "gap-3 px-3"}
        ${isActive
                    ? "bg-blue-100 dark:bg-blue-500/10 text-blue-500 dark:text-blue-400 font-semibold"
                    : `${textColor} hover:bg-gray-200 dark:hover:bg-gray-800`
                }`}>
            {icon}
            <div className="flex justify-between w-full">
                {!collapsed && <span>{label}</span>}
            {!collapsed && badge && (
                <span className="ml-auto bg-green-100 text-green-500 text-xs px-2 py-1 rounded-full">
                    {badge}
                </span>
            )}
            </div>
            
        </Link>
    );
}
