import { Table, TableHeader, TableRow, TableCell, TableBody } from "../ui/table/InterfaceTable";

interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    cr: string;
    value: string;
}

const tableData: Product[] = [
    {
        id: 1,
        name: "TailGrids",
        category: "UI Kits",
        image: "https://react-demo.tailadmin.com/images/country/country-01.svg",
        cr: "Dashboard",
        value: "$12,499",
    },
    {
        id: 2,
        name: "GrayGrids",
        category: "Templates",
        image: "https://react-demo.tailadmin.com/images/country/country-02.svg",
        cr: "Dashboard",
        value: "$5498",
    },
    {
        id: 3,
        name: "Uideck",
        category: "Templates",
        image: "https://react-demo.tailadmin.com/images/country/country-03.svg",
        cr: "Dashboard",
        value: "$4621",
    },
    {
        id: 4,
        name: "FormBold",
        category: "SaaS",
        image: "https://react-demo.tailadmin.com/images/country/country-04.svg",
        cr: "Dashboard",
        value: "$13843",
    },
    {
        id: 5,
        name: "NextAdmin",
        category: "Templates",
        image: "https://react-demo.tailadmin.com/images/country/country-05.svg",
        cr: "Dashboard",
        value: "$7523",
    },
    {
        id: 6,
        name: "Form Builder",
        category: "Templates",
        image: "https://react-demo.tailadmin.com/images/country/country-06.svg",
        cr: "Dashboard",
        value: "$1,377",
    },
    {
        id: 7,
        name: "AyroUI",
        category: "Templates",
        image: "https://react-demo.tailadmin.com/images/country/country-07.svg",
        cr: "Dashboard",
        value: "$599,00",
    },
];

export default function AnalyticsRecentOrders() {
    return (
        <div className="w-full overflow-x-auto">
            <Table className="min-w-max w-full">
                <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                    <TableRow>
                        <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Products
                        </TableCell>
                        <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Category
                        </TableCell>
                        <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Country
                        </TableCell>
                        <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            CR
                        </TableCell>
                        <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Value
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {tableData.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className="py-3 text-gray-700 text-sm font-semibold dark:text-gray-300">
                                {product.name}
                            </TableCell>
                            <TableCell className="py-3 text-gray-500 text-sm dark:text-gray-400">
                                {product.category}
                            </TableCell>
                            <TableCell className="py-3 text-gray-500 text-sm dark:text-gray-400">
                                <img src={product.image} className="h-5 w-5" alt={product.name} />
                            </TableCell>
                            <TableCell className="py-3 text-gray-500 text-sm dark:text-gray-400">
                                {product.cr}
                            </TableCell>
                            <TableCell className="py-3 text-green-600 text-sm dark:text-green-500">
                                {product.value}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}