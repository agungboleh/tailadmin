import { useState, ReactNode } from "react";
import { BsChevronUp } from "react-icons/bs";

interface SubMenu {
  label: string;
  href: string;
  active?: boolean;
  badge:string;
}

interface MenuItemDropdownProps {
  title: string;
  icon: ReactNode;
  active?: boolean;
  badge?:string;
  subMenus: SubMenu[];
}

export default function MenuItemDropdown({
  title,
  icon,
  active,
  badge,
  subMenus,
}: MenuItemDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full px-3 py-2 rounded-lg bg-blue-100 text-blue-500 font-semibold cursor-pointer"
      >
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            {icon}
            <span>{title}</span>
            <span className="ml-5 text-xs bg-green-500 text-white font-semibold px-2 py-0.5 rounded-full">
                  {badge}
                </span>
          </div>

          <BsChevronUp
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mt-2 space-y-1 ml-8">
          {subMenus.map((item, index) => (
            <li
              key={index}
              className={`w-full px-3 py-2 rounded-lg cursor-pointer
                ${
                  item.active
                    ? "bg-blue-100 text-blue-500 font-semibold"
                    : "text-neutral-700"
                }`}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
