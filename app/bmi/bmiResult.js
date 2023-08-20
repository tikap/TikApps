import { useEffect } from "react";

export default function BmiResult({ resultValue, referenceToThisElement }) {
  useEffect(() => {
    if (referenceToThisElement.current) {
      referenceToThisElement.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  });

  if (isNaN(resultValue)) {
    return (
      <div ref={referenceToThisElement} className="flex justify-center">
        <div className="block w-128 p-2 my-4">{resultValue}</div>
      </div>
    );
  }

  let weightCategory;
  let weightCategoryDescription;

  switch (true) {
    case resultValue >= 30:
      weightCategory = "Obese";
      weightCategoryDescription = "BMI results of over 30 is considered obese.";
      break;
    case resultValue >= 25:
      weightCategory = "Overweight";
      weightCategoryDescription =
        "Results that fall between the BMI range of 25 and 30 is considered overweight.";
      break;
    case resultValue >= 18.5:
      weightCategory = "Normal";
      weightCategoryDescription =
        "Results that fall between the BMI range of 18.5 and 25 is considered normal.";
      break;
    case resultValue >= 0:
      weightCategory = "Underweight";
      weightCategoryDescription =
        "BMI results of under 18.5 is considered underweight.";
      break;
    default:
      weightCategory = null;
  }

  return (
    <div ref={referenceToThisElement} className="flex justify-center">
      <div className="w-128 p-2 my-4">
        <div className="block m-8">
          Your BMI:
          <span className="font-bold text-lg mx-2">{resultValue}</span>
        </div>
        <div className="block m-8">
          <p>
            This falls under
            <span className="font-bold mx-1">{weightCategory} category.</span>
          </p>
          <p>{weightCategoryDescription}</p>
        </div>
      </div>
    </div>
  );
}
