import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 class="mb-4 text-4xl font-semibold">TikApps</h2>
      <h4 class="mb-6 text-xl font-semibold">
        Useful tools and utilities for your health.
      </h4>

      <Link href="./about">
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="rounded bg-indigo-900 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal 
          text-neutral-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
          hover:bg-indigo-800 
          hover:text-neutral-200
          hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
          focus:bg-indigo-800 
          focus:text-neutral-200
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
