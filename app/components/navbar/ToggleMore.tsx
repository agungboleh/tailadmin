// import { BsThreeDots } from "react-icons/bs";

// export default function ToggleMore() {
//     return (
//         <button
//               onClick={() => setIsMobileMenuOpen((s) => !s)}
//               className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
//               aria-label="Open mobile quick menu"
//             >
//               <BsThreeDots
//                 className={`
//         block text-2xl text-gray-700 dark:text-gray-300 transition-transform duration-200
//         ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}
//       `}
//               />
//             </button>
//     );  
// }


import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

export default function ToggleMore() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <button
      onClick={() => setIsMobileMenuOpen(s => !s)}
      className="flex 
          items-center justify-center
          w-10 h-10
          text-gray-500 dark:text-gray-400
          border border-gray-200 dark:border-gray-800
          rounded-lg cursor-pointer"
      aria-label="Open mobile quick menu"
    >
      <BsThreeDotsVertical
        className={`
          block text-2xl text-gray-700 dark:text-gray-300 transition-transform duration-200
          ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}
        `}
      />
    </button>
  );
}
