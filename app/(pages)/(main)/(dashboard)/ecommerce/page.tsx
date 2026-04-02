import CardsIconLeft from "@/app/components/cards/icons/IconsLeft";
import { BsBoxSeam, BsPeople, BsSliders } from "react-icons/bs";
import CardsChartBar from "@/app/components/cards/charts/ChartBar";
import CardsChartRadialBar from "@/app/components/cards/charts/ChartRadialBar";
import CardsChartSplineArea from "@/app/components/cards/charts/ChartSplineArea";
import CardsMapsCountry from "@/app/components/cards/maps/MapsCountry";
import CardTablelist from "@/app/components/cards/tables/Tablelist";
import EcommerceRecentOrders from "@/app/components/tables/EcommerceRecentOrders";
import ActionButton from "@/app/components/buttons/Action";
import TimePeriodTab from "@/app/components/tabs/TimePeriodTab";
import RangeCalendar from "@/app/components/date-time-picker/RangeCalendar";
import ButtonLeftIcon from "@/app/components/buttons/ButtonLeftIcon";
import ButtonBasic from "@/app/components/buttons/ButtonBasic";
import SectionHeaderCard from "@/app/components/cards/section/SectionHeaderCard";

export default function EcommercePage() {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-14 gap-6">
        <div className="flex flex-col xl:col-span-8 col-span-14 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CardsIconLeft
              icon={<BsPeople size={20} />}
              title="Customers"
              value="3,782"
              percentage="11.01%"
              TrendType="up" />
            <CardsIconLeft
              icon={<BsBoxSeam size={20} />}
              title="Orders"
              value="5,359"
              percentage="9.05%"
              TrendType="down" />
          </div>
          <CardsChartBar
            header={
              <SectionHeaderCard
                title={"Monthly Sales"}
                simple
                rightContent={<ActionButton />}
              />}
            categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
            data={[168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112]}
            heightchart={180}
          />
        </div>
        <div className="xl:col-span-6 col-span-14">
          <CardsChartRadialBar
            header={
              <SectionHeaderCard
                title={"Monthly Target"}
                caption={"Target you've set for each month"}
                rightContent={<ActionButton />}
              />}
            value={[75.55]}
            percentage="10%"
            trendtype="plus"
            content="You earn $3287 today, it's higher than last month. Keep up your good work!"
            items={[
              { label: "Target", value: "$20K", trend: "down" },
              { label: "Revenue", value: "$20K", trend: "up" },
              { label: "Today", value: "$20K", trend: "up" },
            ]} />
        </div>
        <div className="flex flex-col col-span-14">
          <CardsChartSplineArea
            header={
              <SectionHeaderCard
                title={"Statistics"}
                caption={"Target you've set for each month"}
                rightContent={
                  <>
                    <TimePeriodTab />
                    <RangeCalendar />
                  </>
                }
              />}
            categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
            first_data={[180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235]}
            second_data={[40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140]} />
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
            />} content={<EcommerceRecentOrders />}>
          </CardTablelist>
        </div>
      </div>
    </section>
  );
}
