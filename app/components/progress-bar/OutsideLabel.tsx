interface ProgressBarOutsideLabelProps {
  value: number;
}

export default function ProgressBarOutsideLabel({ value }: ProgressBarOutsideLabelProps) {
  return (
    <div className="flex w-full max-w-35 items-center gap-3">
      <div className="relative block h-2 w-full max-w-25 rounded-sm bg-gray-200 dark:bg-gray-700">
        <div
          className="absolute left-0 top-0 flex h-full items-center justify-center rounded-sm bg-blue-500 text-xs font-medium text-white"
          style={{ width: `${value}%` }}
        ></div>
      </div>

      <p className="font-medium text-gray-700 text-sm dark:text-white/90">
        {value}%
      </p>
    </div>
  );
}