import { Table, TableHeader, TableRow, TableCell, TableBody } from "../ui/table/InterfaceTable";

interface DataLists {
    id: number;
    source: string;
    visitors: string;
}

const tableData: DataLists[] = [
    {
        id: 1,
        source: "Google",
        visitors: "4.7K",
    },
    {
        id: 2,
        source: "Google",
        visitors: "4.7K",
    },
    {
        id: 3,
        source: "Google",
        visitors: "4.7K",
    },
    {
        id: 4,
        source: "Google",
        visitors: "4.7K",
    },
];

export default function AnalyticsTopChannels() {
    return (
        <div className="max-w-full overflow-x-auto">
            <Table>
                <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                    <TableRow>
                        <TableCell isHeader className="py-3 font-medium text-gray-700 text-start text-sm dark:text-gray-300">
                            Source
                        </TableCell>
                        <TableCell isHeader className="py-3 font-medium text-gray-700 text-end text-sm dark:text-gray-300">
                            Visitors
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {tableData.map((DataLists) => (
                        <TableRow key={DataLists.id}>
                            <TableCell className="py-3 text-gray-500 text-sm dark:text-gray-400 text-start">
                                {DataLists.source}
                            </TableCell>
                            <TableCell className="py-3 text-gray-500 text-sm dark:text-gray-400 text-end">
                                {DataLists.visitors}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}