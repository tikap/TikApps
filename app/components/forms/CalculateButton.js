"use client";

export default function CalculateButton({
  label = "Calculate",
  onCalculateButtonClick,
}) {
  return (
    <button
      type="button"
      onClick={onCalculateButtonClick}
      data-te-ripple-init
      data-te-ripple-color="light"
      className="mb-4
          rounded-lg bg-indigo-900 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal 
          text-neutral-200 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
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
      {label}
    </button>
  );
}
