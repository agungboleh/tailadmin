import { BsDashLg } from "react-icons/bs";

interface MenuCategoryProps {
    title: string;
    isCollapsed: boolean;
    children: React.ReactNode;
}

export default function MenuCategory({ title, isCollapsed, children }: MenuCategoryProps) {
    return (
        <div>
            <p
                className={`mb-4 text-xs uppercase flex leading-5 text-gray-400 ${
                    isCollapsed ? "justify-center" : "justify-start px-6"
                }`}
            >
                {!isCollapsed ? title : <BsDashLg className="size-6" />}
            </p>

            <div
                className={`flex flex-col gap-2 text-sm ${
                    isCollapsed ? "px-3 items-center" : "px-6"
                }`}
            >
                {children}
            </div>
        </div>
    );
}

