import StackedColumnsChart from "../../charts/StackedColumnsChart";

interface ChartStackedColumnsProps {
    header: React.ReactNode;
    series: {
        name: string;
        data: number[];
    }[];
    categories: string[];
}

export default function ChartStackedColumns({ header, series, categories }: ChartStackedColumnsProps) {
    return (
        <div className="border rounded-xl px-6 pt-6 border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
            {header}
            <div className="relative w-full">
                <StackedColumnsChart series={series} categories={categories} />
            </div>
        </div>
    );
}