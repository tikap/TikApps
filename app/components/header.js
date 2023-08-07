"use client";

import { useEffect } from "react";
import Link from "next/link";

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
        className="relative flex w-full items-center justify-between bg-gray-800 py-2 text-neutral-200 shadow-lg hover:text-neutral-400 focus:text-neutral-700"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="!visible grow basis-[100%] items-center lg:!flex lg:basis-auto">
            <ul
              className="mr-auto flex flex-wrap justify-center lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="m-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out 
                  hover:text-neutral-400 
                  focus:text-white 
                  disabled:text-black/30 lg:p-2 
                  [&.active]:text-black/90"
                  href="./"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Home
                </Link>
              </li>
              <li className="m-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
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
                </Link>
              </li>
              <li className="m-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
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
                </Link>
              </li>
              <li className="m-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
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
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
