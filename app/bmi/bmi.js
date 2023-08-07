"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Import sub components dynamically
const NumberInput = dynamic(
  () => import("../components/forms/NumberInput.js"),
  {
    loading: () => <p className="my-4">Loading...</p>,
    ssr: false,
  }
);

const BmiCalculateButton = dynamic(
  () => import("../components/forms/BmiCalculateButton.js"),
  {
    loading: () => <p className="my-4">Loading...</p>,
    ssr: false,
  }
);

const BmiResult = dynamic(() => import("./bmiResult.js"), {
  loading: () => <p className="my-4">Loading...</p>,
  ssr: false,
});

const CollapsableContent = dynamic(
  () => import("../components/content/CollapsableContent.js"),
  {
    loading: () => <p className="my-4">Loading...</p>,
    ssr: false,
  }
);

// Export this main component
export default function Bmi() {
  const [weightInput, setWeightInput] = useState(Number(0));
  const [heightInput, setHeightInput] = useState(Number(0));
  const [bmiResult, setBmiResult] = useState(Number(0));
  const [bmiResultVisibility, setBmiResultVisibility] = useState(false);

  function handleWeightValueChange(event) {
    setWeightInput(event.target.value);
  }

  function handleHeightValueChange(event) {
    setHeightInput(event.target.value);
  }

  function handleBmiCalculateButtonClick() {
    const height = Number(heightInput);
    const weight = Number(weightInput);

    var result = weight / height ** 2;

    result =
      isNaN(result) || !isFinite(result)
        ? "Invalid result. Please enter a valid weight and height."
        : Math.round(result * 100) / 100; // Round to nearest 2 decimal places

    setBmiResult(result);
    setBmiResultVisibility(true);
  }

  return (
    <div>
      <h1 className="mx-8 text-xl font-semibold">Body Mass Index Calculator</h1>
      <NumberInput
        label="Weight"
        unit="Kg"
        onValueChange={handleWeightValueChange}
        step="1"
        max="500"
      />
      <NumberInput
        label="Height"
        unit="m"
        onValueChange={handleHeightValueChange}
        step="0.01"
        max="3"
      />
      <BmiCalculateButton
        label="Calculate"
        onBmiCalculateButtonClick={handleBmiCalculateButtonClick}
      />

      <div>
        {bmiResultVisibility ? <BmiResult resultValue={bmiResult} /> : null}
      </div>

      <div>
        <CollapsableContent
          contentHeading="What does BMI Indicate?"
          content="Ideally you would want to be under the normal BMI range. 
          Higher BMI categories (overweight and obese) indicate higher risk to cardiovascular diseases
          (heart attack, stroke, etc), diabetes, musculoskeletal disorders and some cancers. Likewise, the lower end of 
          BMI category (underweight) have a greater risks to health conditions like malnutrition, osteoporosis and 
          lowered immunity."
          uniqueId="collapseContentOne"
        />
      </div>
      <div>
        <CollapsableContent
          contentHeading="Limitations of BMI scales"
          content="Use your Body Mass Index as a rule of thumb for where you fall in the health risk category,
          but note that it is not an actual medical prediction. 
          This index is known to have several limitations such as over-estimating bodies that are taller and more muscular,
          and under-estimating shorter and thinner bodies. The weight categorization has also varied over jurisdictions 
          and time. The current standard is set by the National Institution of Health (NIH) in 1998 and also echoed by
          the World Health Organization (WHO) over the 1990s."
          uniqueId="collapseContentTwo"
        />
      </div>
    </div>
  );
}
