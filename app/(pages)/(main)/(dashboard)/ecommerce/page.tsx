import CardsChartType1 from "@/app/components/cards/charts/ChartsType-1";
import CardsChartType2 from "@/app/components/cards/charts/ChartsType-2";
import CardsChartType3 from "@/app/components/cards/charts/ChartsType-3";
import CardsIconType1 from "@/app/components/cards/icons/IconsType-1";
import { BsBoxSeam, BsPeople } from "react-icons/bs";
import CardsMapsType1 from "@/app/components/cards/maps/MapsType-1";
import CardsTablesType1 from "@/app/components/cards/tables/TablesType-1";

export default function EcommercePage() {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-14 gap-6">
        <div className="flex flex-col xl:col-span-8 col-span-14 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CardsIconType1 icon={<BsPeople size={20} />} title="Customers" value="3,782" percentage="11.01%" trend="up" />
            <CardsIconType1 icon={<BsBoxSeam size={20} />} title="Orders" value="5,359" percentage="9.05%" trend="down" />
          </div>
          <CardsChartType1 />
        </div>
        <div className="xl:col-span-6 col-span-14">
          <CardsChartType2 />
        </div>
        <div className="flex flex-col col-span-14">
          <CardsChartType3 />
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
