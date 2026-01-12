"use client";
import Image from "next/image";

export default function HalfCover() {
    return (
        <div className="relative flex items-center justify-center bg-blue-950 dark:bg-gray-800">
            <div className="absolute top-0 right-0">
                <Image
                    src="/assets/images/background/background.svg"
                    alt="background"
                    width={16}
                    height={9}
                    priority
                    className="w-full h-auto"
                />
            </div>
            <div className="absolute bottom-0 left-0 rotate-180">
                <Image
                    src="/assets/images/background/background.svg"
                    alt="background"
                    width={16}
                    height={9}
                    priority
                    className="w-full h-auto"
                />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <a className="flex items-center mb-4" href="/">
                    <img
                        width="240"
                        alt="Logo"
                        src="/assets/images/logo/logo-white.svg"
                    />
                </a>
                <p className="text-white/50 text-sm">
                    Smart CMS Dashboard for Modern Website,
                    <br />
                    Simplifying Content Management
                </p>
            </div>
        </div>
    );
}