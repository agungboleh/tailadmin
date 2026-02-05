"use client";

import { BsXLg } from "react-icons/bs";
import Link from "next/link";
import ViewAllNotificationButton from "../buttons/ViewAllNotification";

interface NotificationItem {
    name: string;
    subject: string;
    text: string;
    time: string;
    img: string;
    href?: string;
}

interface DropdownNotificationProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

const notifications: NotificationItem[] = [
    {
        name: "Terry Franci",
        subject: "New Project",
        text: "requests permission to change Project - Ngantner App",
        time: "5 min ago",
        img: "https://i.pravatar.cc/50?img=11",
        href: "/chat",
    },
    {
        name: "Alena Franci",
        subject: "New Project",
        text: "requests permission to change Project - Ngantner App",
        time: "8 min ago",
        img: "https://i.pravatar.cc/50?img=32",
        href: "/chat",
    },
    {
        name: "Jocelyn Kenter",
        subject: "New Project",
        text: "requests permission to change Project - Ngantner App",
        time: "24 min ago",
        img: "https://i.pravatar.cc/50?img=5",
        href: "/chat",
    },
    {
        name: "Brandon Philips",
        subject: "New Project",
        text: "requests permission to change Project - Ngantner App",
        time: "1 hr ago",
        img: "https://i.pravatar.cc/50?img=14",
        href: "/chat",
    },
];

export default function DropdownNotification({
    isOpen,
    onClose,
    className = "",
}: DropdownNotificationProps) {
    if (!isOpen) return null;

    return (
        <div className={`absolute right-0 top-15 w-90 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg z-50 ${className}`}>
            <div className="flex items-center justify-between mx-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Notification
                </span>
                <button onClick={onClose} aria-label="Close notification" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    <BsXLg size={18} />
                </button>
            </div>
            <div className="max-h-96 overflow-y-auto"> {notifications.map((n) => {
                const content = (
                    <div className="flex items-start gap-3 px-5 py-3">
                        <img src={n.img} alt={n.name} className="w-10 h-10 rounded-full" />
                        <div className="flex-1 text-sm text-gray-800 dark:text-gray-200">
                            <div className="font-semibold">{n.name}</div>
                            <div className="font-light">{n.text}</div>
                            <div className="mt-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                <span className="font-medium">{n.subject}</span>
                                <span>{n.time}</span>
                            </div>
                        </div>
                    </div>);

                return (
                    <div key={`${n.name}-${n.time}`} className="border-b border-gray-100 dark:border-gray-700 last:border-0 transition mx-5">
                        <div className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">{n.href ? (<Link href={n.href}>{content}</Link>) : (content)}</div>
                    </div>);
            })}
            </div>
            <div className="mx-5 pb-5 border-t border-gray-200 dark:border-gray-700">
                <ViewAllNotificationButton />
            </div>
        </div>
    );
}
