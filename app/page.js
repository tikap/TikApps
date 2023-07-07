import Link from "next/link";

export default function Page() {
  return (
    <div class="w-full h-full bg-neutral-100 p-12 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      <h2 class="mb-4 text-4xl font-semibold">TikApps</h2>
      <h4 class="mb-6 text-xl font-semibold">
        Useful tools and utilities for your health.
      </h4>

      <Link href="./about">
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          More information
        </button>
      </Link>
    </div>
  );
}
