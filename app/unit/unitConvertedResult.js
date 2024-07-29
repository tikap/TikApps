import { useEffect } from "react";

export default function UnitConvertedResult({
  resultValue,
  referenceToThisElement,
  resultUnit,
}) {
  useEffect(() => {
    if (referenceToThisElement.current) {
      referenceToThisElement.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  });

  if (resultValue == null) {
    return (
      <div ref={referenceToThisElement} className="flex justify-center">
        <div className="w-128 p-2 mb-4">
          <div className="block">
            <span className="font-bold text-lg mx-2">
              Invalid result. Please enter valid inputs for proper calculation.
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div ref={referenceToThisElement} className="flex justify-center">
        <div className="w-128 p-2 mb-4">
          <div className="block">
            Result:
            <span className="font-bold text-lg mx-2">
              {resultValue} {resultUnit}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
