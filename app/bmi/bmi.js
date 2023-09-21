"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link.js";

const POUND_TO_KILOGRAM_CONVERSION_RATE = 0.453592;
const FOOT_TO_INCH_CONVERSION_RATE = 12;
const INCH_TO_METER_CONVERSION_RATE = 0.0254;

//#region Import sub components dynamically
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
  () => import("../components/forms/CalculateButton.js"),
  {
    loading: () => <p className="my-4">Loading...</p>,
    ssr: false,
  }
);

const BmiResult = dynamic(() => import("./bmiResult.js"), {
  loading: () => <p className="my-4">Loading...</p>,
  ssr: false,
});
//#endregion

// Main component
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

  // Weight input event handlers
  function handleWeightUnitChange(event) {
    resetWeightInputs();
    setBmiResultVisibility(false);

    if (event.target.value == "Kg") {
      setIsKilogram(true);
    }
    if (event.target.value == "lbs") {
      setIsKilogram(false);
    }
  }

  function handleKilogramValueChange(event) {
    setBmiResultVisibility(false);
    setKilogramInput(event.target.value);
  }

  function handlePoundValueChange(event) {
    setBmiResultVisibility(false);
    setPoundInput(event.target.value);
  }

  // Height input event handlers
  function handleHeightUnitChange(event) {
    resetHeightInputs();
    setBmiResultVisibility(false);

    if (event.target.value == "m") {
      setIsMeter(true);
    }
    if (event.target.value == "ft / in") {
      setIsMeter(false);
    }
  }

  function handleMeterValueChange(event) {
    setBmiResultVisibility(false);
    if (isMeter) {
      let value = event.target.value;
      if (value.length == 2) {
        event.target.value = value.slice(0, 1) + "." + value.slice(1, 2);
      }
    }
    setMeterInput(event.target.value);
  }

  function handleFootValueChange(event) {
    setBmiResultVisibility(false);
    let value = event.target.value;
    if (value.length >= 1) {
      let heightToFocus = document.getElementById("Inches");
      heightToFocus?.focus();
    }
    setFootInput(event.target.value);
  }

  function handleInchValueChange(event) {
    setBmiResultVisibility(false);
    setInchInput(event.target.value);
  }

  // User action handlers
  function handleKeyPressedToGoNext(event) {
    if (event.key == "Enter") {
      let heightToFocus = null;
      switch (event.target.id) {
        case "WeightKilograms":
        case "WeightPounds":
          heightToFocus =
            document.getElementById("HeightMeters") ??
            document.getElementById("HeightFeet");
          heightToFocus?.focus();
          break;
        case "HeightFeet":
          heightToFocus = document.getElementById("Inches");
          heightToFocus?.focus();
          break;
      }
    }
  }

  function handleKeyPressedToTriggerCalculate(event) {
    if (event.key == "Enter") {
      handleBmiCalculateButtonClick();
    }
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

  // Helper functions
  function resetWeightInputs() {
    document.getElementById("weightInputs").reset();
    setKilogramInput(0);
    setPoundInput(0);
  }

  function resetHeightInputs() {
    document.getElementById("heightInputs").reset();
    setMeterInput(0);
    setFootInput(0);
    setInchInput(0);
  }

  // BMI calculator JSX
  return (
    <div>
      <h4 className="mb-6 text-xl">Body Mass Index Calculator</h4>

      <div className="flex justify-center">
        <form
          id="weightInputs"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {isKilogram ? (
            <NumberInput
              label="Weight"
              onValueChange={handleKilogramValueChange}
              onKeyPressed={handleKeyPressedToGoNext}
              step="0.1"
              max="1000"
              min="0"
              width="w-28"
              placeholder="Kilograms"
            />
          ) : (
            <NumberInput
              label="Weight"
              onValueChange={handlePoundValueChange}
              onKeyPressed={handleKeyPressedToGoNext}
              step="0.1"
              max="2000"
              min="0"
              width="w-28"
              placeholder="Pounds"
            />
          )}
        </form>
        <RadioTwoOptions
          radioGroupName="weightUnitRadios"
          optionOneName="Kg"
          optionTwoName="lbs"
          onOptionChanged={handleWeightUnitChange}
        />
      </div>

      <div className="flex justify-center items-center">
        <form
          id="heightInputs"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {isMeter ? (
            <NumberInput
              label="Height"
              onValueChange={handleMeterValueChange}
              onKeyPressed={handleKeyPressedToTriggerCalculate}
              step="0.01"
              max="9"
              min="0"
              width="w-28"
              placeholder="Meters"
            />
          ) : (
            <div className="flex justify-center items-center">
              <NumberInput
                label="Height"
                onValueChange={handleFootValueChange}
                onKeyPressed={handleKeyPressedToGoNext}
                step="1"
                max="10"
                min="0"
                width="w-14"
                placeholder="Feet"
              />
              <NumberInput
                label=""
                onValueChange={handleInchValueChange}
                onKeyPressed={handleKeyPressedToTriggerCalculate}
                step="0.01"
                max="120"
                min="0"
                width="w-14"
                placeholder="Inches"
              />
            </div>
          )}
        </form>
        <RadioTwoOptions
          radioGroupName="heightUnitRadios"
          optionOneName="m"
          optionTwoName="ft / in"
          onOptionChanged={handleHeightUnitChange}
        />
      </div>

      <BmiCalculateButton
        label="Calculate"
        onCalculateButtonClick={handleBmiCalculateButtonClick}
      />

      <div>
        {bmiResultVisibility ? (
          <BmiResult
            resultValue={bmiResult}
            referenceToThisElement={bmiResultElementRef}
          />
        ) : null}
      </div>

      <Link className="underline m-8" href="./about#BodyMassIndexCalculator">
        Body Mass Index FAQ: Learn more
      </Link>
    </div>
  );
}
