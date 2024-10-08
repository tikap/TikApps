"use client";

import { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import TikAppsLogo from "@/resources/logo/default_transparent_just_logo.png";

export default function Home() {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  return (
    <>
      <div className="flex justify-center min-w-max mb-6">
        <Image src={TikAppsLogo} alt="TikApps Logo" />
      </div>
      <h2 className="mb-4 text-4xl font-semibold">TikApps</h2>
      <h4 className="mb-6 text-xl">Free, easy and accessible calculators.</h4>

      <Link href="./about">
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="rounded-lg bg-indigo-900 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal 
          text-neutral-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
          hover:bg-indigo-800 
          hover:text-neutral-100
          hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
          focus:bg-indigo-800 
          focus:text-neutral-100
          focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
          focus:outline-none 
          focus:ring-0 active:bg-primary-700 
          active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          More information
        </button>
      </Link>
    </>
  );
}
