import ActionButton from "@/app/components/buttons/Action";
import ButtonBasic from "@/app/components/buttons/ButtonBasic";
import CardsChartSplineArea from "@/app/components/cards/charts/ChartSplineArea";
import CardsIconLeft_2 from "@/app/components/cards/icons/IconsLeft-2";
import HeaderRightContent from "@/app/components/cards/section/HeaderRightContent";
import SectionHeaderCard from "@/app/components/cards/section/SectionHeaderCard";
import CardTablelist from "@/app/components/cards/tables/Tablelist";
import MarketingFeaturedCampaigns from "@/app/components/tables/MarketingFeaturedCampaigns";
import MarketingTopTrafficSource from "@/app/components/tables/MarketingTopTrafficSource";
import MarketingTrafficStats from "@/app/components/tables/MarketingTrafficStats";
import TimePeriodTab from "@/app/components/tabs/TimePeriodTab";
import { BsCurrencyDollar, BsPeople, BsStar } from "react-icons/bs";

export default function MarketingPage() {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 lg:col-span-4">
          <CardsIconLeft_2
            icon={<BsStar size={20} />}
            title="Avg. Client Rating"
            value="7.8/10"
            percentage="20%"
            TrendType="plus"
            caption="Vs last month" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <CardsIconLeft_2
            icon={<BsPeople size={20} />}
            title="Instagram Followers"
            value="5,934"
            percentage="3.59%"
            TrendType="minus"
            caption="Vs last month" />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <CardsIconLeft_2
            icon={<BsCurrencyDollar size={20} />}
            title="Total Revenue"
            value="$9,758"
            percentage="15%"
            TrendType="plus"
            caption="Vs last month" />
        </div>
        <div className="col-span-12 xl:col-span-8 flex flex-col gap-6">
          <CardsChartSplineArea
            header={
              <SectionHeaderCard
                title={"Impression & Data Traffic"}
                caption={"Jun 1, 2024 - Dec 1, 2025"}
                rightContent={
                  <HeaderRightContent
                    value="$9,758.00"
                    percentage="7.96%"
                    TrendType="plus"
                    label="Total Revenue"
                  />} />}
            categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
            first_data={[180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235]}
            second_data={[40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140]} />
          <CardTablelist
            header={<SectionHeaderCard
              title={"Featured Campaigns"}
              simple
              rightContent={<ActionButton />} />}
            content={<MarketingFeaturedCampaigns />}>
          </CardTablelist>
        </div>
        <div className="col-span-12 xl:col-span-4 flex flex-col gap-6">
          <CardTablelist
            header={<SectionHeaderCard
              title={"Traffic Stats"}
              simple
              rightContent={<ActionButton />} />}
            content={<>
              <TimePeriodTab />
              <MarketingTrafficStats />
            </>}>
          </CardTablelist>
          <CardTablelist
            header={<SectionHeaderCard
              title={"Top Traffic Source"}
              simple
              rightContent={<ActionButton />} />}
            content={<MarketingTopTrafficSource />}
            footer={
              <ButtonBasic name={"View All"} type="button" link="" className="mt-6 cursor-pointer w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200" />
            } >
          </CardTablelist>
        </div>
      </div>
    </section>
  );
}
