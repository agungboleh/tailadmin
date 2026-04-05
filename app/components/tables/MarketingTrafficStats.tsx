import SparklineChart from "../charts/SparklineChart";
import TrendBadge from "../ui/badge/TrendBadge";
import { Table, TableRow, TableCell, TableBody } from "../ui/table/InterfaceTable";

export type TrendType =
    | "up"
    | "down"
    | "plus"
    | "minus";

interface Items {
    id: number;
    title: string;
    value: string;
    TrendType: TrendType;
    percentage: string;
    label: string;
    chart: React.ReactNode;
}

const tableData: Items[] = [
    {
        id: 1,
        title: "New Subscribers",
        value: "567K",
        TrendType: "plus",
        percentage: "3.85%",
        label: "then last Week",
        chart: <SparklineChart />,
    },
    {
        id: 2,
        title: "Conversion Rate",
        value: "276K",
        TrendType: "minus",
        percentage: "5.39%",
        label: "then last Week",
        chart: <SparklineChart />,
    },
    {
        id: 3,
        title: "Page Bounce Rate",
        value: "285",
        TrendType: "plus",
        percentage: "12.74%",
        label: "then last Week",
        chart: <SparklineChart />,
    },
];

export default function MarketingTrafficStats() {
    return (
        <div className="w-full overflow-x-auto pt-4">
            <Table className="min-w-max w-full">
                <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {tableData.map((Items) => (
                        <TableRow key={Items.id}>
                            <TableCell className="py-3">
                                <div className="flex flex-col gap-2">
                                    <div className="text-gray-500 text-sm dark:text-gray-400">
                                        {Items.title}
                                    </div>
                                    <div className="flex gap-4 items-center justify-between">
                                        <div>
                                            <div className="font-semibold text-gray-700 text-2xl dark:text-gray-200">
                                                {Items.value}
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <TrendBadge trend={Items.TrendType} variant="lightnb" className="font-lg">
                                                    {Items.percentage}
                                                </TrendBadge>
                                                <div className="text-xs">
                                                    {Items.label}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="font-bold text-gray-700 text-2xl dark:text-gray-200">
                                            {Items.chart}
                                        </div>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}