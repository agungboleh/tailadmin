"use client";

interface ButtonRightIconProps {
    icon: React.ReactNode;
    name: string;
    link?: string;
    type?: "button" | "submit";
    classbutton?: string;
    classcontent?: string;
}

export default function ButtonRightIcon({ icon, name, type, link, classbutton = "", classcontent = "" }: ButtonRightIconProps) {
    const handleClick = () => {
        if (link) {
            window.location.href = link;
        }
    };

    return (
        <button type={type} onClick={handleClick} className={classbutton}>
            <div className={classcontent}>
                <span className="text-sm">{name}</span>
                {icon}
            </div>
        </button>
    );
}