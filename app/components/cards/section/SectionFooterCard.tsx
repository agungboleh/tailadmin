interface SectionFooterCardProps {
    items: ValueItem[];
}

interface ValueItem {
    label: string;
    value: string;
}

export default function SectionFooterCard({ items }: SectionFooterCardProps) {
    return (
        <div className="flex items-center justify-center gap-6">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-5 sm:gap-8">
                    <div>
                        <p className="flex items-center justify-center gap-1 text-lg font-semibold text-gray-800 dark:text-white/90">
                            {item.value}
                        </p>
                        <p className="mb-1 text-center text-gray-500 text-xs dark:text-gray-400">
                            {item.label}
                        </p>
                    </div>
                    {index < items.length - 1 && (
                        <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>
                    )}
                </div>
            ))}
        </div>
    )
}