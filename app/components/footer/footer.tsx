export default function Footer({ isExpanded }: { isExpanded: boolean }) {
    return (
        <footer className={`bottom-0 right-0 z-40 flex justify-center px-4 py-3 bg-white dark:bg-gray-900 
        border-t border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 text-xs text-gray-500 dark:text-gray-100 ${isExpanded ? "xl:ml-72.5" : "xl:ml-22.5"}`}
        >Copyright © 2026 TailAdmin. All rights reserved
        </footer>
    );
}