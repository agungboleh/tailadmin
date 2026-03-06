import ActionButton from "@/app/components/buttons/Action";
import CardsChartType1 from "@/app/components/cards/charts/ChartsType-1";
import CardsChartType2 from "@/app/components/cards/charts/chartsType-2";
import CardsChartType3 from "@/app/components/cards/charts/chartsType-3";
import CardsIconType1 from "@/app/components/cards/icons/IconsType-1";
import { BsBoxSeam, BsPeople } from "react-icons/bs";
import MapsIconType1 from "@/app/components/cards/maps/mapsType-1";

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
          <MapsIconType1 />
        </div>
        <div className="xl:col-span-8 col-span-14">
          <div className="rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-white/3">
            <div className="rounded-xl p-6 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200">
              <div className="flex justify-between">
                <p className="font-semibold text-lg">Recent Orders</p>
                <div className="flex">
                  <ActionButton />
                  <ActionButton />
                </div>
              </div>
              <div className="relative">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
