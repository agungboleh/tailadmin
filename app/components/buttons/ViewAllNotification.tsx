export default function ViewAllNotificationButton() {
    return (
        <button onClick={() => window.location.href = "/chat"} className="cursor-pointer mt-5 w-full py-2 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-sm transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white">
            View All Notifications
        </button>
    );
}