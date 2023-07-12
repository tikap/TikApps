import Link from "next/link";

export default function Footer() {
  return (
    <footer class="bg-gray-800 text-center lg:text-left">
      <div class="p-4 text-center text-neutral-200">
        A web application made by
        <Link
          class="text-neutral-400 p-1"
          href="https://www.linkedin.com/in/tika-pradhan/"
          target="_blank"
        >
          @Tika Pradhan
        </Link>
      </div>
    </footer>
  );
}
