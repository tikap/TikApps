"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@react-email/components";

export default function Header() {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  return (
    <header>
      <nav
        className="relative flex w-full items-center justify-between 
        bg-gradient-to-r from-gray-900 to-gray-800 py-2 
        text-neutral-200 shadow-lg hover:text-neutral-400 focus:text-neutral-700"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="!visible grow basis-[100%] items-center lg:!flex lg:basis-auto">
            <ul
              className="mr-auto flex flex-wrap justify-center lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="m-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="font-bold text-3xl block transition duration-150 ease-in-out 
                  hover:text-neutral-400 
                  focus:text-white 
                  disabled:text-black/30 lg:p-2 
                  [&.active]:text-black/90"
                  href="./"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  TikApps
                </a>
              </li>
            </ul>
            <ul
              className="mr-auto flex flex-col flex-wrap items-center lg:flex-row
              rounded-full
              bg-gradient-to-r from-gray-900 via-gray-950 to-transparent"
              data-te-navbar-nav-ref
            >
              <li className="m-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out 
                  hover:text-neutral-400 
                  focus:text-white 
                  disabled:text-black/30 lg:p-2 
                  [&.active]:text-black/90"
                  href="./unit"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Unit Converter
                </a>
              </li>
              <li className="m-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out 
                  hover:text-neutral-400 
                  focus:text-white 
                  disabled:text-black/30 lg:p-2 
                  [&.active]:text-black/90"
                  href="./bmi"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  BMI Calculator
                </a>
              </li>
              <li className="m-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out 
                  hover:text-neutral-400 
                  focus:text-white 
                  disabled:text-black/30 lg:p-2 
                  [&.active]:text-black/90"
                  href="./calorie"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Daily Calorie Calculator
                </a>
              </li>
            </ul>
            <ul
              className="flex flex-wrap justify-center lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="m-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out 
                  hover:text-neutral-400 
                  focus:text-white 
                  disabled:text-black/30 lg:p-2 
                  [&.active]:text-black/90"
                  href="./about"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  About
                </a>
              </li>
              <li className="m-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a
                  className="block transition duration-150 ease-in-out 
                  hover:text-neutral-400 
                  focus:text-white 
                  disabled:text-black/30 lg:p-2 
                  [&.active]:text-black/90"
                  href="./contact"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
