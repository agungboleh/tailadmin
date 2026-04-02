import ActionButton from "@/app/components/buttons/Action";
import ButtonBasic from "@/app/components/buttons/ButtonBasic";
import ButtonLeftIcon from "@/app/components/buttons/ButtonLeftIcon";
import ButtonRightIcon from "@/app/components/buttons/ButtonRightIcon";
import CardsBasicPercent from "@/app/components/cards/basics/CardsBasicPercent";
import CardsChartBar from "@/app/components/cards/charts/ChartBar";
import CardsChartBasicArea from "@/app/components/cards/charts/ChartBasicArea";
import ChartPieDonut from "@/app/components/cards/charts/ChartPieDonut";
import ChartStackedColumns from "@/app/components/cards/charts/ChartStackedColumns";
import CardsMapsCountry from "@/app/components/cards/maps/MapsCountry";
import SectionContentCard from "@/app/components/cards/section/SectionContentCard";
import SectionFooterCard from "@/app/components/cards/section/SectionFooterCard";
import SectionHeaderCard from "@/app/components/cards/section/SectionHeaderCard";
import CardTablelist from "@/app/components/cards/tables/Tablelist";
import AnalyticsRecentOrders from "@/app/components/tables/AnalyticsRecentOrders";
import AnalyticsTopChannels from "@/app/components/tables/AnalyticsTopChannels";
import AnalyticsTopPages from "@/app/components/tables/AnalyticsTopPages";
import TimePeriodTab from "@/app/components/tabs/TimePeriodTab";
import { BsArrowRight, BsSliders } from "react-icons/bs";

export default function AnalyticsPage() {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <CardsBasicPercent
            title={"Unique Visitors"}
            value={"24.7K"}
            percentage={"20%"}
            trend={"up"}
            caption={"Vs last month"} />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <CardsBasicPercent
            title={"Total Pageviews"}
            value={"55.9K"}
            percentage={"4%"}
            trend={"up"}
            caption={"Vs last month"} />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <CardsBasicPercent
            title={"Bounce Rate"}
            value={"54%"}
            percentage={"1.59%"}
            trend={"down"}
            caption={"Vs last month"} />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <CardsBasicPercent
            title={"Visit Duration"}
            value={"2m 56s"}
            percentage={"7%"}
            trend={"up"}
            caption={"Vs last month"} />
        </div>
      </div>
      <div className="grid grid-cols-14 gap-6">
        <div className="flex flex-col col-span-14">
          <CardsChartBar
            header={
              <SectionHeaderCard
                title={"Analytics"}
                caption={"Visitor analytics of last 30 days"}
                rightContent={<TimePeriodTab />}
              />}
            categories={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]}
            data={[168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212, 270, 190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 110, 115, 290, 380, 312]}
            heightchart={320}
          />
        </div>
        <div className="flex flex-col xl:col-span-8 col-span-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CardTablelist
              header={
                <SectionHeaderCard
                  title={"Top Channels"}
                  simple
                  rightContent={<ActionButton />}
                />}
              content={<AnalyticsTopChannels />}
              footer={<ButtonRightIcon icon={<BsArrowRight size={20} />} name={"Channels Report"} type="button" classbutton="cursor-pointer mt-5 w-full py-2 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-sm transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white" classcontent="flex items-center gap-2.5 justify-center mx-0" />}
            />
            <CardTablelist
              header={
                <SectionHeaderCard
                  title={"Top Pages"}
                  simple
                  rightContent={<ActionButton />}
                />}
              content={<AnalyticsTopPages />}
              footer={<ButtonRightIcon icon={<BsArrowRight size={20} />} name={"Channels Report"} type="button" classbutton="cursor-pointer mt-5 w-full py-2 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-sm transition-colors bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white" classcontent="flex items-center gap-2.5 justify-center mx-0" />}
            />
          </div>
        </div>
        <div className="xl:col-span-6 col-span-14">
          <CardsChartBasicArea
            header={
              <SectionHeaderCard
                title={"Active Users"}
                simple
                rightContent={<ActionButton />}
              />}
            content={<SectionContentCard value="364" caption="Live visitors" />}
            categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
            data={[180, 181, 182, 184, 183, 182, 181, 182, 183, 185, 186, 183]}
            footer={<SectionFooterCard items={[
              { label: "Avg, Daily", value: "224" },
              { label: "Avg, Weekly", value: "1.4K" },
              { label: "Avg, Monthly", value: "22.1K" },
            ]} />} />
        </div>
        <div className="xl:col-span-8 col-span-14">
          <ChartStackedColumns
            header={<SectionHeaderCard
              title={"Acquisition Channels"}
              simple
              rightContent={<ActionButton />} />}
            series={[
              { name: "Direct", data: [44, 55, 41, 67, 22, 43, 55, 41] },
              { name: "Referral", data: [13, 23, 20, 8, 13, 27, 13, 23] },
              { name: "Organic Search", data: [11, 17, 15, 15, 21, 14, 18, 20] },
              { name: "Social", data: [21, 7, 25, 13, 22, 8, 18, 20] },
            ]}
            categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]} />
        </div>
        <div className="xl:col-span-6 col-span-14">
          < ChartPieDonut
            header={<SectionHeaderCard
              title={"Sessions By Device"}
              simple
              rightContent={<ActionButton />} />}
            series={[45, 65, 25]}
            label={["Desktop", "Mobile", "Tablet"]} />
        </div>
        <div className="xl:col-span-6 col-span-14">
          <CardsMapsCountry
            header={
              <SectionHeaderCard
                title={"Customers Demographic"}
                caption={"Number of customer based on country"}
                rightContent={<ActionButton />}
              />}
            markers={[
              { latLng: [39.16422123767983, -100.55452363548605], name: "United States" },
              { latLng: [22.856111062706418, 79.54090995432662], name: "India" },
              { latLng: [54.686112218050475, -1.4189227539365874], name: "United Kingdom" },
              { latLng: [64.78199706857093, 16.361525924710115], name: "Sweden" },
              { latLng: [46.590502455226954, 2.480265181757159], name: "France" },]}
            countries={[
              {
                flag: "https://react-demo.tailadmin.com/images/country/country-01.svg",
                name: "USA",
                customers: "2,379",
                progress: 79
              },
              {
                flag: "https://react-demo.tailadmin.com/images/country/country-02.svg",
                name: "France",
                customers: "589",
                progress: 23
              }
            ]} />
        </div>
        <div className="xl:col-span-8 col-span-14">
          <CardTablelist
            header={<SectionHeaderCard
              className="items-center"
              title={"Recent Orders"}
              rightContent={
                <>
                  <ButtonLeftIcon icon={<BsSliders size={16} />} name={"Filter"} type="button" classbutton="cursor-pointer rounded-lg px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200" classcontent="flex items-center gap-2 mx-3" />
                  <ButtonBasic name={"See All"} type="button" link="" className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200" />
                </>
              }
            />} content={<AnalyticsRecentOrders />}>
          </CardTablelist>
        </div>
      </div>
    </section>
  );
}
