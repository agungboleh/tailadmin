import { BsArrowRight } from "react-icons/bs";
import ButtonRightIcon from "../../buttons/ButtonRightIcon";

interface CardTablelistProps {
    header: React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
}

export default function CardTablelist({ header, content, footer }: CardTablelistProps) {
    return (
        <div>
            <div className="p-6 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-white/3 text-gray-700 dark:text-gray-200">
                {header}
                <div className="max-w-full overflow-x-auto mt-5">
                    {content}
                </div>
                <div>
                    {footer}
                </div>
            </div>
        </div>
    )
}