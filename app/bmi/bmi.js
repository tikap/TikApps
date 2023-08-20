"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";

const POUND_TO_KILOGRAM_CONVERSION_RATE = 0.453592;
const FOOT_TO_INCH_CONVERSION_RATE = 12;
const INCH_TO_METER_CONVERSION_RATE = 0.0254;

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
  // User input and calculated output states
  const [kilogramInput, setKilogramInput] = useState(Number(0));
  const [poundInput, setPoundInput] = useState(Number(0));
  const [meterInput, setMeterInput] = useState(Number(0));
  const [footInput, setFootInput] = useState(Number(0));
  const [inchInput, setInchInput] = useState(Number(0));
  const [bmiResult, setBmiResult] = useState(Number(0));

  // Input unit states
  const [isKilogram, setIsKilogram] = useState(true);
  const [isMeter, setIsMeter] = useState(true);

  // Visibility states
  const [bmiResultVisibility, setBmiResultVisibility] = useState(false);

  // References
  const bmiResultElementRef = useRef(null);

  // Event handlers
  function handleWeightUnitChange(event) {
    if (event.target.value == "Kg") {
      setIsKilogram(true);
    }
    if (event.target.value == "lbs") {
      setIsKilogram(false);
    }
  }

  function handleKilogramValueChange(event) {
    setKilogramInput(event.target.value);
  }

  function handlePoundValueChange(event) {
    setPoundInput(event.target.value);
  }

  function handleHeightUnitChange(event) {
    if (event.target.value == "m") {
      setIsMeter(true);
    }
    if (event.target.value == "ft / in") {
      setIsMeter(false);
    }
  }

  function handleMeterValueChange(event) {
    if (isMeter) {
      let value = event.target.value;
      if (value.length == 2) {
        event.target.value = value.slice(0, 1) + "." + value.slice(1, 2);
      }
    }
    setMeterInput(event.target.value);
  }

  function handleKeyPressedOnHeightInput(event) {
    if (event.key == "Enter") {
      handleBmiCalculateButtonClick();
    }
  }

  function handleFootValueChange(event) {
    setFootInput(event.target.value);
  }

  function handleInchValueChange(event) {
    setInchInput(event.target.value);
  }

  function handleBmiCalculateButtonClick() {
    const weight = isKilogram
      ? Number(kilogramInput)
      : Number(poundInput) * POUND_TO_KILOGRAM_CONVERSION_RATE;

    const height = isMeter
      ? Number(meterInput)
      : (Number(footInput) * FOOT_TO_INCH_CONVERSION_RATE + Number(inchInput)) *
        INCH_TO_METER_CONVERSION_RATE;

    var result = weight / height ** 2;

    result =
      isNaN(result) || !isFinite(result)
        ? "Invalid result. Please enter a valid weight and height."
        : Math.round(result * 100) / 100; // Round to nearest 2 decimal places

    setBmiResult(result);
    setBmiResultVisibility(true);
  }

  // BMI calculator JSX
  return (
    <div>
      <h4 className="mb-6 text-xl font-semibold">Body Mass Index Calculator</h4>

      <div className="flex justify-center items-center">
        {isKilogram ? (
          <NumberInput
            label="Weight"
            onValueChange={handleKilogramValueChange}
            step="1"
            max="500"
            width="w-28"
            placeholder="Kilograms"
          />
        ) : (
          <NumberInput
            label="Weight"
            onValueChange={handlePoundValueChange}
            step="1"
            max="500"
            width="w-28"
            placeholder="Pounds"
          />
        )}
        <RadioTwoOptions
          radioGroupName="weightUnitRadios"
          optionOneName="Kg"
          optionTwoName="lbs"
          onOptionChanged={handleWeightUnitChange}
        />
      </div>

      <div className="flex justify-center items-center">
        {isMeter ? (
          <NumberInput
            label="Height"
            onValueChange={handleMeterValueChange}
            onKeyPressed={handleKeyPressedOnHeightInput}
            step="0.01"
            max="3"
            width="w-28"
            placeholder="Meters"
          />
        ) : (
          <>
            <NumberInput
              label="Height"
              onValueChange={handleFootValueChange}
              onKeyPressed={handleKeyPressedOnHeightInput}
              step="0.01"
              max="3"
              width="w-14"
              placeholder="Feet"
            />
            <NumberInput
              onValueChange={handleInchValueChange}
              onKeyPressed={handleKeyPressedOnHeightInput}
              step="0.01"
              max="3"
              width="w-18"
              placeholder="Inches"
            />
          </>
        )}
        <RadioTwoOptions
          radioGroupName="heightUnitRadios"
          optionOneName="m"
          optionTwoName="ft / in"
          onOptionChanged={handleHeightUnitChange}
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
