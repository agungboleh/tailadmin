import CardsTablesType1 from "@/app/components/cards/tables/TablesType-1";
import CardsBasicType1 from "@/app/components/cards/basics/BasicsType-1";
import CardsChartType4 from "@/app/components/cards/charts/ChartsType-4";
import CardsMapsType1 from "@/app/components/cards/maps/MapsType-1";
import CardsTablesType2 from "@/app/components/cards/tables/TablesType-2";
import CardsTablesType3 from "@/app/components/cards/tables/TablesType-3";

export default function AnalyticsPage() {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <CardsBasicType1 title={"Unique Visitors"} value={"24.7K"} percentage={"20%"} trend={"up"} text={"Vs last month"} />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <CardsBasicType1 title={"Total Pageviews"} value={"55.9K"} percentage={"4%"} trend={"up"} text={"Vs last month"} />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <CardsBasicType1 title={"Bounce Rate"} value={"54%"} percentage={"1.59%"} trend={"down"} text={"Vs last month"} />
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <CardsBasicType1 title={"Visit Duration"} value={"2m 56s"} percentage={"7%"} trend={"up"} text={"Vs last month"} />
        </div>
      </div>
      <div className="grid grid-cols-14 gap-6">
        <div className="flex flex-col col-span-14">
          <CardsChartType4 />
        </div>
        <div className="flex flex-col xl:col-span-8 col-span-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CardsTablesType2 title={"Top Channels"} />
            <CardsTablesType3 title={"Top Pages"} />
          </div>
        </div>
        <div className="xl:col-span-6 col-span-14">
          <CardsTablesType3 title={"Top Pages"} />
        </div>
        <div className="xl:col-span-6 col-span-14">
          <CardsMapsType1 />
        </div>
        <div className="xl:col-span-8 col-span-14">
          <CardsTablesType1 />
        </div>
      </div>
    </section>
  );
}
