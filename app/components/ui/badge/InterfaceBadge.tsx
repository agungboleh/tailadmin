type BadgeVariant = "light" | "solid";
type BadgeSize = "sm" | "md";
export type BadgeColor =
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "light"
    | "dark"

interface BadgeProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    color?: BadgeColor;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
    variant = "light",
    color = "primary",
    size = "md",
    startIcon,
    endIcon,
    children,
}) => {
    const baseStyles =
        "inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium";

    const sizeStyles = {
        sm: "text-xs",
        md: "text-sm",
    };

    const variants = {
        light: {
            primary: "bg-blue-100 text-blue-500 dark:bg-blue-100 dark:text-blue-500",
            secondary: "bg-purple-100 text-purple-500 dark:bg-purple-100 dark:text-purple-500",
            success: "bg-green-100 text-green-500 dark:bg-green-100 dark:text-green-500",
            error: "bg-red-100 text-red-500 dark:bg-red-50 dark:text-red-500",
            warning: "bg-yellow-100 text-yellow-500 dark:bg-yellow-100 dark:text-yellow-500",
            info: "bg-orange-100 text-orange-500 dark:bg-orange-100 dark:text-orange-500",
            light: "bg-pink-100 text-pink-500 dark:bg-pink-100 dark:text-pink-500",
            dark: "bg-gray-100 text-gray-500 dark:bg-gray-100 dark:text-gray-500",
        },
        solid: {
            primary: "bg-blue-500 text-blue-100 dark:bg-blue-500 dark:text-blue-100",
            secondary: "bg-purple-500 text-purple-100 dark:bg-purple-500 dark:text-purple-100",
            success: "bg-green-500 text-green-100 dark:bg-green-500 dark:text-green-100",
            error: "bg-red-500 text-red-100 dark:bg-red-500 dark:text-red-100",
            warning: "bg-yellow-500 text-yellow-100 dark:bg-yellow-500 dark:text-yellow-100",
            info: "bg-orange-500 text-orange-100 dark:bg-orange-500 dark:text-orange-100",
            light: "bg-pink-500 text-pink-100 dark:bg-pink-500 dark:text-pink-100",
            dark: "bg-gray-500 text-gray-100 dark:bg-gray-500 dark:text-gray-100",
        },
    };

    const sizeClass = sizeStyles[size];
    const colorStyles = variants[variant][color];

    return (
        <span className={`${baseStyles} ${sizeClass} ${colorStyles}`}>
            {startIcon && <span className="mr-1">{startIcon}</span>}
            {children}
            {endIcon && <span className="ml-1">{endIcon}</span>}
        </span>
    );
};

export default Badge;
