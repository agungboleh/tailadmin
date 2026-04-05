import Badge, { BadgeColor } from "../ui/badge/InterfaceBadge";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "../ui/table/InterfaceTable";

type ProductStatus =
    | "Delivered"
    | "Pending"
    | "Canceled"
    | "Refunded"
    | "Processing"
    | "Shipped"
    | "Returned"
    | "On Hold";

const statusColorMap: Record<ProductStatus, BadgeColor> = {
    Delivered: "success",
    Pending: "warning",
    Canceled: "error",
    Refunded: "info",
    Processing: "primary",
    Shipped: "dark",
    Returned: "light",
    "On Hold": "secondary",
};

interface Product {
    id: number;
    name: string;
    variants: string;
    category: string;
    price: string;
    image: string;
    status: ProductStatus;
}

const tableData: Product[] = [
    {
        id: 1,
        name: "MacBook Pro 13”",
        variants: "2 Variants",
        category: "Laptop",
        price: "$2399.00",
        status: "Delivered",
        image: "https://react-demo.tailadmin.com/images/product/product-01.jpg",
    },
    {
        id: 2,
        name: "Apple Watch Ultra",
        variants: "1 Variant",
        category: "Watch",
        price: "$879.00",
        status: "Pending",
        image: "https://react-demo.tailadmin.com/images/product/product-02.jpg",
    },
    {
        id: 3,
        name: "iPhone 15 Pro Max",
        variants: "2 Variants",
        category: "SmartPhone",
        price: "$1869.00",
        status: "Canceled",
        image: "https://react-demo.tailadmin.com/images/product/product-03.jpg",
    },
    {
        id: 4,
        name: "iPad Pro 3rd Gen",
        variants: "2 Variants",
        category: "Electronics",
        price: "$1699.00",
        status: "Refunded",
        image: "https://react-demo.tailadmin.com/images/product/product-04.jpg",
    },
    {
        id: 5,
        name: "AirPods Pro 2nd Gen",
        variants: "1 Variant",
        category: "Accessories",
        price: "$240.00",
        status: "Processing",
        image: "https://react-demo.tailadmin.com/images/product/product-05.jpg",
    },
];

export default function EcommerceRecentOrders() {
    return (
        <div className="w-full overflow-x-auto">
            <Table className="min-w-max w-full">
                <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                    <TableRow>
                        <TableCell isHeader className="py-3 px-5 sm:px-0 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Products
                        </TableCell>
                        <TableCell isHeader className="py-3 px-5 sm:px-0 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Category
                        </TableCell>
                        <TableCell isHeader className="py-3 px-5 sm:px-0 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Price
                        </TableCell>
                        <TableCell isHeader className="py-3 px-5 sm:px-0 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Status
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {tableData.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className="py-3 px-5 sm:px-0">
                                <div className="flex items-center gap-3">
                                    <div className="h-12.5 w-12.5 overflow-hidden rounded-md">
                                        <img src={product.image} className="h-12.5 w-12.5" alt={product.name} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800 text-sm dark:text-white/90">
                                            {product.name}
                                        </p>
                                        <span className="text-gray-500 text-xs dark:text-gray-400">
                                            {product.variants}
                                        </span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="py-3 px-5 sm:px-0 text-gray-500 text-sm dark:text-gray-400">
                                {product.category}
                            </TableCell>
                            <TableCell className="py-3 px-5 sm:px-0 text-gray-500 text-sm dark:text-gray-400">
                                {product.price}
                            </TableCell>
                            <TableCell className="py-3 px-5 sm:px-0 text-gray-500 text-sm dark:text-gray-400">
                                <Badge size="sm" variant="light" color={statusColorMap[product.status]}>
                                    {product.status}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}