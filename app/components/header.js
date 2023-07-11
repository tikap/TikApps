import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav
        class="relative flex w-full items-center justify-between bg-black py-2 text-neutral-200 shadow-lg hover:text-neutral-400 focus:text-neutral-700 md:flex-wrap md:justify-start "
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <div
            class="!visible grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentY"
            data-te-collapse-item
          >
            <ul
              class="mr-auto flex flex-col lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  class="block transition duration-150 ease-in-out hover:text-neutral-400 focus:text-white disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
                  href="./"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Home
                </Link>
              </li>
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  class="block transition duration-150 ease-in-out hover:text-neutral-400 focus:text-white disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
                  href="./bmi"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  BMI Calculator
                </Link>
              </li>
              <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  class="block transition duration-150 ease-in-out hover:text-neutral-400 focus:text-white disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
                  href="./about"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  About
                </Link>
              </li>
              <li class="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link
                  class="block transition duration-150 ease-in-out hover:text-neutral-400 focus:text-white disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
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
