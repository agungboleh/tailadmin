import Badge, { BadgeColor } from "../ui/badge/InterfaceBadge";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "../ui/table/InterfaceTable";

type ProductStatus =
    | "Success"
    | "Pending"
    | "Failed"
    | "Refunded"
    | "Processing"
    | "Shipped"
    | "Returned"
    | "On Hold";

const statusColorMap: Record<ProductStatus, BadgeColor> = {
    Success: "success",
    Pending: "warning",
    Failed: "error",
    Refunded: "info",
    Processing: "primary",
    Shipped: "dark",
    Returned: "light",
    "On Hold": "secondary",
};

interface Product {
    id: number;
    profile: string;
    name: string;
    image: string;
    title: string;
    category: string;
    status: ProductStatus;
}

const tableData: Product[] = [
    {
        id: 1,
        profile: "https://react-demo.tailadmin.com/images/user/user-01.jpg",
        name: "Wilson Gouse",
        image: "https://react-demo.tailadmin.com/images/brand/brand-01.svg",
        title: "Grow your brand by...",
        category: "Ads campaign",
        status: "Success",
    },
    {
        id: 2,
        profile: "https://react-demo.tailadmin.com/images/user/user-02.jpg",
        name: "Wilson Gouse",
        image: "https://react-demo.tailadmin.com/images/brand/brand-02.svg",
        title: "Make Better Ideas...",
        category: "Ads campaign",
        status: "Pending",
    },
    {
        id: 3,
        profile: "https://react-demo.tailadmin.com/images/user/user-03.jpg",
        name: "Wilson Gouse",
        image: "https://react-demo.tailadmin.com/images/brand/brand-03.svg",
        title: "Increase your website tra...",
        category: "Ads campaign",
        status: "Success",
    },
    {
        id: 4,
        profile: "https://react-demo.tailadmin.com/images/user/user-04.jpg",
        name: "Wilson Gouse",
        image: "https://react-demo.tailadmin.com/images/brand/brand-04.svg",
        title: "Grow your brand by...",
        category: "Ads campaign",
        status: "Failed",
    },
    {
        id: 5,
        profile: "https://react-demo.tailadmin.com/images/user/user-05.jpg",
        name: "Wilson Gouse",
        image: "https://react-demo.tailadmin.com/images/brand/brand-05.svg",
        title: "Make Better Ideas...",
        category: "Ads campaign",
        status: "Processing",
    },
    {
        id: 6,
        profile: "https://react-demo.tailadmin.com/images/user/user-06.jpg",
        name: "Wilson Gouse",
        image: "https://react-demo.tailadmin.com/images/brand/brand-06.svg",
        title: "Increase your website tra...",
        category: "Ads campaign",
        status: "Success",
    },
];

export default function MarketingFeaturedCampaigns() {
    return (
        <div className="w-full overflow-x-auto">
            <Table className="min-w-max w-full">
                <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                    <TableRow>
                        <TableCell isHeader className="py-3 px-5 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Profiles
                        </TableCell>
                        <TableCell isHeader className="py-3 px-5 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Campaign
                        </TableCell>
                        <TableCell isHeader className="py-3 px-5 font-medium text-gray-500 text-start text-xs dark:text-gray-400">
                            Status
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {tableData.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className="py-3 px-5">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 overflow-hidden rounded-full">
                                        <img src={product.profile} className="h-10 w-10" alt={product.name} />
                                    </div>
                                    <div className="font-medium text-gray-800 dark:text-white/90">
                                        {product.name}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="py-3 px-5">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 overflow-hidden rounded-md">
                                        <img src={product.image} className="h-8 w-8" alt={product.name} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800 text-sm dark:text-white/90">
                                            {product.title}
                                        </p>
                                        <span className="text-gray-500 text-xs dark:text-gray-400">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="py-3 px-5 text-gray-500 text-sm dark:text-gray-400">
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