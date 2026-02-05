"use client";
import { useState } from "react";
import { BsCheckLg, BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import SignInButton from "@/app/components/buttons/SignIn";
import ThemeModeButton from "@/app/components/buttons/ThemeMode";
import HalfCover from "@/app/components/background/HalfCover";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <HalfCover />
        <div className="relative flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white/90">
          <div className="w-3/5">
            <div className="font-bold text-2xl">Create an account</div>
            <div className="font-medium text-base pb-8 text-gray-500 dark:text-gray-400">
              Sign up to continue your access pages
            </div>
            <form>
              <label className="mb-1.5 block font-light">
                Email<span className="text-red-500"> *</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2.5 mb-3 border rounded-lg focus:outline-none placeholder:text-neutral-300 dark:placeholder:text-neutral-500 border-neutral-300 focus:ring-2 focus:border-blue-500 focus:ring-blue-50  dark:focus:ring-blue-950"
              />
              <label className="mb-1.5 block font-light">
                Password<span className="text-red-500"> *</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="new-password"
                  className="w-full p-2.5 mb-3 border rounded-lg focus:outline-none placeholder:text-neutral-300 dark:placeholder:text-neutral-500 border-neutral-300 focus:ring-2 focus:border-blue-500 focus:ring-blue-50  dark:focus:ring-blue-950"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer absolute right-3 top-4 text-neutral-600 dark:text-neutral-300 hover:text-gray-800 dark:hover:text-neutral-100"
                >
                  {showPassword ? <BsEye /> : <BsEyeSlash />}
                </button>
              </div>
              <div className="flex items-center justify-between py-5 flex-wrap gap-3">
                <label className="flex items-center space-x-3 group cursor-pointer">
                  <div className="relative w-5 h-5">
                    <input
                      className="w-5 h-5 appearance-none cursor-pointer border border-neutral-300 checked:border-transparent rounded-md checked:bg-blue-500 disabled:opacity-60 peer"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <BsCheckLg className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 w-5 fill-white dark:fill-neutral-900 opacity-0 peer-checked:opacity-100" />
                  </div>
                  <span className="block text-sm">Keep me signed in</span>
                </label>
                <Link
                  className="text-sm text-blue-500 hover:text-blue-700 font-bold"
                  href="/reset-password"
                  data-discover="true"
                >
                  Forgot password?
                </Link>
              </div>
              <SignInButton />
            </form>
          </div>
          <ThemeModeButton />
        </div>
      </div>
    </section>
  );
}
