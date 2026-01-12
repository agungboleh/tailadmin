"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./globals.css";
import { BsArrowLeft } from "react-icons/bs";

export default function NotFound() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-100 flex items-center justify-center lg:px-60">
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
      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-base font-medium text-blue-500">404 error</p>
          <p className="text-2xl md:text-3xl font-bold text-neutral-700">
            Page not found
          </p>
          <p className="text-sm md:text-lg text-neutral-500">
            Sorry, the page you are looking for doesn&apos;t exist.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-x-2 px-6 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 transition rounded-full"
            >
              <BsArrowLeft className="w-4 h-4" />
              Go back home
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-sm md:max-w-none">
          <Image
            src="/assets/images/background/404.svg"
            width={600}
            height={600}
            alt="Not found illustration"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
