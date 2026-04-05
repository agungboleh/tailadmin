import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

type TrendVariant = "lightnb" | "light" | "solid";

export type TrendType =
    | "up"
    | "down"
    | "plus"
    | "minus";

interface TrendBadgeProps {
    variant?: TrendVariant;
    trend: TrendType;
    className?: string;
    children?: React.ReactNode;
}

const trendIcons = {
    up: <BsArrowUpShort size={20} />,
    down: <BsArrowDownShort size={20} />,
    plus: "+",
    minus: "-",
};

const variants = {
    lightnb: {
        up: "text-green-600 dark:text-green-400",
        plus: "text-green-600 dark:text-green-400",
        down: "text-red-600 dark:text-red-400",
        minus: "text-red-600 dark:text-red-400",
    },
    light: {
        up: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        plus: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
        down: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
        minus: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    },
    solid: {
        up: "bg-green-500 text-green-100 dark:bg-green-500 dark:text-green-100",
        plus: "bg-green-500 text-green-100 dark:bg-green-500 dark:text-green-100",
        down: "bg-red-500 text-red-100 dark:bg-red-500 dark:text-red-100",
        minus: "bg-red-500 text-red-100 dark:bg-red-500 dark:text-red-100",
    },
};

const TrendBadge: React.FC<TrendBadgeProps> = ({
    variant = "light",
    trend,
    className = "",
    children,
}) => {

    const icon = trendIcons[trend];
    const color = variants[variant][trend];

    return (
        <span className={`${color} ${className}`}>
            {icon}
            {children}
        </span>
    );
};

export default TrendBadge;