import TrendBadge from "../../ui/badge/TrendBadge";

interface SectionHeaderProps {
    title: string;
    caption?: string;
    rightContent?: React.ReactNode;
    simple?: boolean;
    className?: string;
}

export default function SectionHeaderCard({
    title,
    caption,
    rightContent,
    simple = false,
    className = "items-start",
}: SectionHeaderProps) {
    if (simple) {
        return (
            <div className="flex justify-between items-center">
                <p className="font-semibold text-lg text-gray-700 dark:text-gray-200">{title}</p>
                <div className="flex items-center gap-2 flex-wrap">
                    {rightContent}
                </div>
            </div>
        );
    }

    return (
        <div className="mb-4">
            <div className={`flex justify-between gap-4 flex-wrap min-w-0 ${className ?? ""}`}>
                <div className="min-w-0">
                    <p className="font-semibold text-lg text-gray-700 dark:text-gray-200">
                        {title}
                    </p>
                    {caption && (
                        <p className="text-sm text-gray-500 mt-1">
                            {caption}
                        </p>
                    )}
                </div>
                {rightContent && (
                    <div className="flex gap-2 items-center flex-wrap max-w-full">
                        {rightContent}
                    </div>
                )}
            </div>
        </div>
    );
}