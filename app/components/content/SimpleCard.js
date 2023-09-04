export default function SimpleCard({ title, text }) {
  return (
    <div className="block rounded-lg bg-gray-800 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-200">
        {title}
      </h5>
      <p className="mb-4 text-base text-neutral-200">{text}</p>
    </div>
  );
}
