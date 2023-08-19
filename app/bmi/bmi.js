"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";

// Import sub components dynamically
const RadioTwoOptions = dynamic(
  () => import("../components/forms/RadioTwoOptions.js"),
  {
    loading: () => <p className="my-4">Loading...</p>,
    ssr: false,
  }
);

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

  const bmiResultElementRef = useRef(null);

  function handleWeightValueChange(event) {
    setWeightInput(event.target.value);
  }

  function handleHeightValueChange(event) {
    let value = event.target.value;
    if (value.length == 2) {
      event.target.value = value.slice(0, 1) + "." + value.slice(1, 2);
    }
    setHeightInput(event.target.value);
  }

  function handleKeyPressedOnHeightInput(event) {
    if (event.key == "Enter") {
      handleBmiCalculateButtonClick();
    }
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
      <h4 className="mb-6 text-xl font-semibold">Body Mass Index Calculator</h4>
      <div className="flex justify-center items-center">
        <NumberInput
          label="Weight"
          onValueChange={handleWeightValueChange}
          step="1"
          max="500"
          width="w-28"
        />
        <RadioTwoOptions
          radioGroupName="weightUnitRadios"
          optionOneName="Kg"
          optionTwoName="lbs"
        />
      </div>

      <div className="flex justify-center items-center">
        <NumberInput
          label="Height"
          onValueChange={handleHeightValueChange}
          onKeyPressed={handleKeyPressedOnHeightInput}
          step="0.01"
          max="3"
          width="w-28"
        />
        <RadioTwoOptions
          radioGroupName="heightUnitRadios"
          optionOneName="m"
          optionTwoName="ft/in"
        />
      </div>

      <BmiCalculateButton
        label="Calculate"
        onBmiCalculateButtonClick={handleBmiCalculateButtonClick}
      />

      <div>
        {bmiResultVisibility ? (
          <BmiResult
            resultValue={bmiResult}
            referenceToThisElement={bmiResultElementRef}
          />
        ) : null}
      </div>

      <div>
        <CollapsableContent
          contentHeading="What does BMI indicate?"
          content="Use your Body Mass Index as an estimate of where you fall in the health risk category,
          but note that it is not an actual medical prediction. Falling within normal BMI range is ideal for avoiding weight related health issues. 
          Higher BMI categories (overweight and obese) indicate higher risk to cardiovascular diseases
          (heart attack, stroke, etc), diabetes, musculoskeletal disorders and some cancers. Likewise, the lower end of 
          BMI category (underweight) have a greater risks to health conditions like malnutrition, osteoporosis and 
          lowered immunity."
          uniqueId="collapseBmiIndications"
        />
      </div>
      <div>
        <CollapsableContent
          contentHeading="Limitations of BMI"
          content="This index is known to have several limitations. 
          It over-estimates BMI for bodies that are taller and more muscular,
          and under-estimates shorter and skinnier bodies. The weight categorizations have also varied over jurisdictions 
          and time periods so the BMI ranges will vary depending on which region and year it is being referenced from. 
          The current standard is set by the National Institution of Health (NIH) in 1998 and also echoed by
          the World Health Organization (WHO) over the 1990s."
          uniqueId="collapsableBmiLimitations"
        />
      </div>
    </div>
  );
}
