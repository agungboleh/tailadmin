import CardsIconType1 from "@/app/components/cards/icon/type-1";
import { BsBoxSeam, BsPeople } from "react-icons/bs";

export default function EcommercePage() {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-14 gap-6">
        <div className="flex flex-col xl:col-span-8 col-span-14 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CardsIconType1 icon={<BsPeople size={20} />} title="Customers" value="3,782" percentage="11.01%" trend="up" />
            <CardsIconType1 icon={<BsBoxSeam size={20} />} title="Orders" value="5,359" percentage="9.05%" trend="down" />
          </div>
          <CardsIconType1 icon={<BsBoxSeam size={20} />} title="Monthly Sales" value="5,359" percentage="9.05%" trend="down" />
        </div>
        <div className="xl:col-span-6 col-span-14"><CardsIconType1 icon={<BsBoxSeam size={20} />} title="Monthly Target" value="5,359" percentage="9.05%" trend="down" /></div>
      </div>
    </section>
  );
}
