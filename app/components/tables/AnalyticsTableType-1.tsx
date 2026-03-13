import { Table, TableHeader, TableRow, TableCell, TableBody } from "../ui/table/InterfaceTable";

interface List {
    id: number;
    source: string;
    value: string;
}

interface AnalyticsTable1Props {
    headers: string[];
    data: List[];
}

export default function AnalyticsTable1({ headers, data }: AnalyticsTable1Props) {
    return (
        <div className="max-w-full overflow-x-auto">
            <Table>
                <TableHeader className="border-gray-100 dark:border-gray-700 border-y">
                    <TableRow>
                        <TableCell isHeader className="py-3 font-medium text-gray-700 text-start text-sm dark:text-gray-300">
                            {headers[0]}
                        </TableCell>
                        <TableCell isHeader className="py-3 font-medium text-gray-700 text-end text-sm dark:text-gray-300">
                            {headers[1]}
                        </TableCell>
                    </TableRow>
                </TableHeader>

                <TableBody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="py-3 text-gray-500 text-sm dark:text-gray-400 text-start">
                                {item.source}
                            </TableCell>
                            <TableCell className="py-3 text-gray-500 text-sm dark:text-gray-400 text-end">
                                {item.value}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}