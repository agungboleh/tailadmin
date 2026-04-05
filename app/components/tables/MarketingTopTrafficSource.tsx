import ProgressBarOutsideLabel from "../progress-bar/OutsideLabel";
import { Table, TableBody, TableCell, TableRow } from "../ui/table/InterfaceTable";

interface Items {
    id: number;
    image: string;
    source: string;
    value: number;
}

const tableData: Items[] = [
    {
        id: 1,
        image: "https://react-demo.tailadmin.com/images/brand/brand-05.svg",
        source: "Google",
        value: 79,
    },
    {
        id: 2,
        image: "https://react-demo.tailadmin.com/images/brand/brand-06.svg",
        source: "Youtube",
        value: 55,
    },
    {
        id: 3,
        image: "https://react-demo.tailadmin.com/images/brand/brand-02.svg",
        source: "Facebook",
        value: 48,
    },
    {
        id: 4,
        image: "https://react-demo.tailadmin.com/images/brand/brand-04.svg",
        source: "Instagram",
        value: 48,
    },
];

export default function MarketingTopTrafficSource() {
    return (
        <div className="w-full overflow-x-auto">
            <Table className="min-w-max w-full">
                <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {tableData.map((Items) => (
                        <TableRow key={Items.id}>
                            <TableCell className="py-3">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="items-center w-full rounded-full max-w-8">
                                            <img src={Items.image} alt={Items.source} />
                                        </div>
                                        <p className="font-semibold text-gray-700 text-sm dark:text-white/90">
                                            {Items.source}
                                        </p>
                                    </div>
                                    <ProgressBarOutsideLabel value={Items.value} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}