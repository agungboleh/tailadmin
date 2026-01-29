interface DropdownNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function DropdownNotification({ isOpen, onClose, children, className }: DropdownNotificationProps) {
    return (
        <div className={`absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white dark:bg-gray-800 z-50 ${isOpen ? 'block' : 'hidden'} ${className}`}>
            {children}
        </div>
    )
}