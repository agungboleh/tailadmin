"use client";
import Link from "next/link";
import ThemeModeButton from "@/app/components/buttons/ThemeMode";
import HalfCover from "@/app/components/background/HalfCover";
import SendResetLinkButton from "@/app/components/buttons/SendResetLink";

export default function SigninPage() {
   return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <HalfCover />
        <div className="relative flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90">
          <div className="w-3/5">
            <div className="font-bold text-2xl">Forgot your password?</div>
            <div className="font-medium text-base pb-8 text-gray-500 dark:text-gray-400">
              Enter the email address linked to your account, and we&#39;ll send you a link to reset your password.
            </div>
            <form>
              <label className="mb-1.5 block font-light">
                Email<span className="text-red-500"> *</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2.5 mb-3 border rounded-lg focus:outline-none placeholder:text-gray-400 dark:placeholder:text-gray-700 border-neutral-300 focus:ring-2 focus:border-blue-500 focus:ring-blue-50  dark:focus:ring-blue-950"
              />
              <SendResetLinkButton />
              <div className="flex items-center justify-between py-5 flex-wrap gap-3">
                <label className="flex items-center space-x-3 group cursor-pointer">
                  <span className="block text-sm">Wait, I remember my password...</span>
                  <Link
                    className="text-sm text-blue-500 hover:text-blue-700 font-bold"
                    href="/signin"
                    data-discover="true"
                  >
                    Click here
                  </Link>
                </label>
              </div>
            </form>
          </div>
          <ThemeModeButton />
        </div>
      </div>
    </section>
  );
}
