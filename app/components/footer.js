import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-gray-900 to-gray-800 py-2 
    text-center lg:text-left"
    >
      <div className="p-4 text-center text-neutral-200">
        A web application made by
        <Link
          className="text-neutral-400 p-1"
          href="https://www.linkedin.com/in/tika-pradhan/"
          target="_blank"
        >
          @Tika Pradhan
        </Link>
      </div>
    </footer>
  );
}
