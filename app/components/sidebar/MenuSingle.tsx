import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuSingleProps {
    icon: React.ReactNode;
    label: string;
    textColor?: string;
    collapsed?: boolean;
    href?: string;
    badge?: string;
}

export default function MenuSingle({
    icon ,
    label,
    textColor = "text-gray-700 dark:text-gray-200",
    collapsed = false,
    href = "#",
    badge,
}: MenuSingleProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        
        <Link
            href={href}
            className={`relative flex items-center py-2 rounded-md transition-colors
        ${collapsed ? "justify-center px-3" : "gap-3 px-3"}
        ${isActive
                    ? "bg-blue-100 dark:bg-blue-500/10 text-blue-500 dark:text-blue-400 font-semibold"
                    : `${textColor} hover:bg-gray-100 dark:hover:bg-white/5`
                }`}>
            {icon}
            {!collapsed && (
                <>
                    <span>{label}</span>
                    {badge && (
                        <span className="ml-auto absolute right-10  border border-green-300 bg-green-100 text-green-500 text-xs px-2 py-0.5 rounded-full">
                            {badge}
                        </span>
                    )}
                </>
            )}
        </Link>
    );
}
