import CardsIconLeft from "@/app/components/cards/icons/IconsLeft";
import { BsBoxSeam, BsPeople } from "react-icons/bs";
import CardsTablesType1 from "@/app/components/cards/tables/TablesType-1";
import CardsChartBar from "@/app/components/cards/charts/ChartBar";
import CardsChartRadialBar from "@/app/components/cards/charts/ChartsRadialBar";
import CardsChartSplineArea from "@/app/components/cards/charts/ChartSplineArea";
import CardsMapsCountry from "@/app/components/cards/maps/MapsCountry";

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
            title={"Monthly Sales"}
            categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
            data={[168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112]}
            heightchart={180} />
        </div>
        <div className="xl:col-span-6 col-span-14">
          <CardsChartRadialBar
            title="Monthly Target"
            caption="Target you've set for each month"
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
            title={"Statistics"}
            caption={"Target you've set for each month"}
            categories={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
            first_data={[180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235]}
            second_data={[40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140]} />
        </div>
        <div className="xl:col-span-6 col-span-14">
          <CardsMapsCountry
            title={"Customers Demographic"}
            caption={"Number of customer based on country"}
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
          <CardsTablesType1 />
        </div>
      </div>
    </section>
  );
}
