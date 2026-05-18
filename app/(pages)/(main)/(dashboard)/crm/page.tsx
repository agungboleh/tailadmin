import ActionButton from "@/app/components/buttons/Action";
import CardsBasicPercent_2 from "@/app/components/cards/basics/CardsBasicPercent-2";
import CardsChartRadialBar from "@/app/components/cards/charts/ChartRadialBar";
import CardsChartSplineArea from "@/app/components/cards/charts/ChartSplineArea";
import SectionHeaderCard from "@/app/components/cards/section/SectionHeaderCard";
import TimePeriodTab from "@/app/components/tabs/TimePeriodTab";
import StatsSummary from "@/app/components/ui/stats/StatsSummary";

export default function CrmPage() {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 sm:col-span-6 xl:col-span-4">
          <CardsBasicPercent_2
            value={"$120,369"}
            title={"Active Deal"}
            trend={"up"}
            percentage={"20%"}
            caption={"last month"} />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-4">
          <CardsBasicPercent_2
            value={"$234,210"}
            title={"Revenue Total"}
            trend={"up"}
            percentage={"9.0%"}
            caption={"last month"} />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-4">
          <CardsBasicPercent_2
            value={"874"}
            title={"Closed Deals"}
            trend={"down"}
            percentage={"4.5%"}
            caption={"last month"} />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <CardsChartSplineArea
            header={
              <SectionHeaderCard
                title={"Statistics"}
                caption={"Target you’ve set for each month"}
                rightContent={
                  <TimePeriodTab />} />}
            content={
              <div className="inline-flex gap-6">
                <StatsSummary
                  value={"$212,142.12"}
                  percentage={"23.2%"}
                  TrendType={"plus"}
                  label={"Avg. Yearly Profit"} />
                <StatsSummary
                  value={"$30,321.23"}
                  percentage={"12.3%"}
                  TrendType={"minus"}
                  label={"Avg. Yearly Profit"} />
              </div>}
            categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
            first_data={[180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235]}
            second_data={[40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140]} />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <CardsChartRadialBar
            header={
              <SectionHeaderCard
                title={"Estimated Revenue"}
                caption={"Target you’ve set for each month"}
                rightContent={<ActionButton />}
              />}
            value={[75]}
            suffix="%"
            percentage="10%"
            trendtype="plus"
            content="You earn $3287 today, it's higher than last month. Keep up your good work!"
            items={[
              { label: "Target", value: "$20K", trend: "down" },
              { label: "Revenue", value: "$20K", trend: "up" },
              { label: "Today", value: "$20K", trend: "up" },
            ]} />
        </div>
      </div>
    </section>
  );
}
