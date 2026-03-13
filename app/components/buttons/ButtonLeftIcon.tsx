// "use client";

// interface ButtonLeftIconProps {
//     icon: React.ReactNode;
//     name: string;
//     link?: string;
//     type?: "button" | "submit";
//     className?: string;
//     mx?: string;
// }

// export default function ButtonLeftIcon({ icon, name, type, link, className = "", mx = "mx-0" }: ButtonLeftIconProps) {
//     const handleClick = () => {
//         if (link) {
//             window.location.href = link;
//         }
//     };

//     return (
//         <button type={type} onClick={handleClick} className={className}>
//             <div className={`flex items-center gap-2.5 ${mx}`}>
//                 {icon}
//                 <span className="text-sm">{name}</span>
//             </div>
//         </button>
//     );
// }

"use client";

interface ButtonLeftIconProps {
    icon: React.ReactNode;
    name: string;
    link?: string;
    type?: "button" | "submit";
    classbutton?: string;
    classcontent?: string;
}

export default function ButtonLeftIcon({ icon, name, type, link, classbutton = "", classcontent = "" }: ButtonLeftIconProps) {
    const handleClick = () => {
        if (link) {
            window.location.href = link;
        }
    };

    return (
        <button type={type} onClick={handleClick} className={classbutton}>
            <div className={classcontent}>
                {icon}
                <span className="text-sm">{name}</span>
            </div>
        </button>
    );
}