import BasicAreaChart from "../../charts/BasicAreaChart";

interface ChartBasicAreaProps {
    header: React.ReactNode;
    content?: React.ReactNode;
    footer?: React.ReactNode;
}

interface BasicAreaChartProps {
    categories: string[];
    data: number[];
}

type Props = ChartBasicAreaProps & BasicAreaChartProps

export default function CardsChartBasicArea({ header, content, categories, data, footer }: Props) {
    return (
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-gray-700 dark:text-gray-200">
            {header}
            {content}
            <div className="relative w-full">
                <BasicAreaChart categories={categories} data={data} />
            </div>
            {footer}
        </div>
    )
}