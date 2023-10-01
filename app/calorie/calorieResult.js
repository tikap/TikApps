import { useEffect } from "react";

export default function CalorieResult({ resultValue, referenceToThisElement }) {
  useEffect(() => {
    if (referenceToThisElement.current) {
      referenceToThisElement.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  });

  return (
    <div ref={referenceToThisElement} className="flex justify-center">
      <div className="w-128 p-2 mb-4">
        <div className="block m-8">
          Your daily calorie requirement:
          <span className="font-bold text-lg mx-2">{resultValue}</span>
        </div>
        <div className="block m-8">
          <p>
            This is per
            <span className="font-bold mx-1">day.</span>
          </p>
          <p>
            With some
            <span className="font-bold mx-1">variations.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
