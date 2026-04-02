interface SectionHeaderProps {
    value: string;
    caption: string;
}

export default function SectionContentCard({ value, caption }: SectionHeaderProps) {
    return (
        <div className="flex items-center mt-5">
            <div className="z-10 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </div>
            <div>
                <span className="font-bold text-3xl px-2">{value}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{caption}</span>
            </div>
        </div>
    )
}