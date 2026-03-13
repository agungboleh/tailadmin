"use client";

interface ButtonBasicProps {
    name: string;
    link?: string;
    type?: "button" | "submit";
    className?: string;
}

export default function ButtonBasic({ name, link, type = "button", className = "", }: ButtonBasicProps) {

    const handleClick = () => {
        if (link) {
            window.location.href = link;
        }
    };

    return (
        <button type={type} onClick={handleClick} className={className}>
            {name}
        </button>
    );
}