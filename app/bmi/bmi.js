"use client";

import { useState, useRef } from "react";
import Link from "next/link.js";

import { UnitConverters } from "@/constants/UnitConverters.js";
import RadioTwoOptions from "@/components/forms/RadioTwoOptions.js";
import NumberInput from "@/components/forms/NumberInput.js";
import BmiCalculateButton from "@/components/forms/CalculateButton.js";
import BmiResult from "./bmiResult.js";

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

  // Weight
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

  // Height
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
  function handleKeyPressed(event) {
    if (event.key == "Enter") {
      let elementToFocus = null;
      switch (event.target.id) {
        case "WeightKilograms":
        case "WeightPounds":
          elementToFocus =
            document.getElementById("HeightMeters") ??
            document.getElementById("HeightFeet");
          elementToFocus?.focus();
          break;
        case "HeightFeet":
          elementToFocus = document.getElementById("Inches");
          elementToFocus?.focus();
          break;
        default:
          handleBmiCalculateButtonClick();
      }
    }
  }

  function handleBmiCalculateButtonClick() {
    const weight = isKilogram
      ? Number(kilogramInput)
      : Number(poundInput) * UnitConverters.POUND_TO_KILOGRAM;

    const height = isMeter
      ? Number(meterInput)
      : (Number(footInput) * UnitConverters.FOOT_TO_INCH + Number(inchInput)) *
        UnitConverters.INCH_TO_METER;

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
    document.getElementById("bmiWeightInputs").reset();
    setKilogramInput(0);
    setPoundInput(0);
  }

  function resetHeightInputs() {
    document.getElementById("bmiHeightInputs").reset();
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
          id="bmiWeightInputs"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {isKilogram ? (
            <NumberInput
              label="Weight"
              onValueChange={handleKilogramValueChange}
              onKeyPressed={handleKeyPressed}
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
              onKeyPressed={handleKeyPressed}
              step="0.1"
              max="2000"
              min="0"
              width="w-28"
              placeholder="Pounds"
            />
          )}
        </form>
        <RadioTwoOptions
          radioGroupName="bmiWeightUnitRadios"
          optionOneName="Kg"
          optionTwoName="lbs"
          onOptionChanged={handleWeightUnitChange}
        />
      </div>

      <div className="flex justify-center items-center">
        <form
          id="bmiHeightInputs"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {isMeter ? (
            <NumberInput
              label="Height"
              onValueChange={handleMeterValueChange}
              onKeyPressed={handleKeyPressed}
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
                onKeyPressed={handleKeyPressed}
                step="1"
                max="10"
                min="0"
                width="w-14"
                placeholder="Feet"
              />
              <NumberInput
                label=""
                onValueChange={handleInchValueChange}
                onKeyPressed={handleKeyPressed}
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
          radioGroupName="bmiHeightUnitRadios"
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

      <Link
        href="./about#BodyMassIndexCalculator"
        className="block mt-4 text-secondary transition duration-150 ease-in-out hover:text-secondary-600 focus:text-secondary-600 active:text-secondary-700"
      >
        FAQ: Learn more about BMI
      </Link>
    </div>
  );
}
