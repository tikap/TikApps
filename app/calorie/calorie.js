"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import PageLoadingWrapper from "../components/wrappers/pageloadingwrapper";

//#region Import sub components dynamically
const RadioTwoOptions = dynamic(
  () => import("../components/forms/RadioTwoOptions"),
  {
    loading: () => <PageLoadingWrapper loadingText="Loading..." />,
    ssr: false,
  }
);

const NumberInput = dynamic(() => import("../components/forms/NumberInput"), {
  loading: () => <PageLoadingWrapper loadingText="Loading..." />,
  ssr: false,
});

const CalculateButton = dynamic(
  () => import("../components/forms/CalculateButton"),
  {
    loading: () => <PageLoadingWrapper loadingText="Loading..." />,
    ssr: false,
  }
);
//#endregion

// Main component
export default function Calorie() {
  // User input and calculated output states
  const [sexInput, setSexInput] = useState(null);
  const [ageInput, setAgeInput] = useState(Number(0));
  const [kilogramInput, setKilogramInput] = useState(Number(0));
  const [poundInput, setPoundInput] = useState(Number(0));
  const [meterInput, setMeterInput] = useState(Number(0));
  const [footInput, setFootInput] = useState(Number(0));
  const [inchInput, setInchInput] = useState(Number(0));
  const [calorieResult, setCalorieResult] = useState(Number(0));

  // Unit states
  const [isKilogram, setIsKilogram] = useState(true);
  const [isMeter, setIsMeter] = useState(true);

  // UI event handlers
  // Sex assigned at birth
  function handleSexValueChange() {}

  // Age
  function handleAgeValueChange() {}

  function handleAgeKeyEntered() {}

  // Weight
  function handleKilogramValueChange() {}

  function handlePoundValueChange() {}

  function handleWeightUnitChange(event) {
    if (event.target.value == "Kg") {
      setIsKilogram(true);
    }
    if (event.target.value == "lbs") {
      setIsKilogram(false);
    }
  }

  // Height
  function handleMeterValueChange() {}

  function handleFootValueChange() {}

  function handleInchValueChange() {}

  function handleHeightUnitChange(event) {
    if (event.target.value == "m") {
      setIsMeter(true);
    }
    if (event.target.value == "ft / in") {
      setIsMeter(false);
    }
  }

  // Calculate button
  function handleCalorieCalculateButtonClick() {}

  // User interaction event handlers
  function handleKeyPressedToGoNext() {}

  function handleKeyPressedToTriggerCalculate() {}

  // Calorie calculator JSX
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="mb-6 text-xl">Daily Calorie Calculator</h4>

      <div className="flex justify-center">
        <span className="mr-2">Sex</span>
        <RadioTwoOptions
          radioGroupName="sexAssignedAtBirth"
          optionOneName="Male"
          optionTwoName="Female"
          onOptionChanged={handleSexValueChange}
          isDefaultChecked={false}
        />
      </div>

      <NumberInput
        label="Age"
        onValueChange={handleAgeValueChange}
        onKeyPressed={handleAgeKeyEntered}
        placeholder="Years"
        min="0"
        max="200"
        step="1"
        width="w-16"
      />

      <div className="flex justify-center">
        <form
          id="weightInputsForCalorieCalculator"
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
          radioGroupName="weightUnitRadiosForCalorieCalculator"
          optionOneName="Kg"
          optionTwoName="lbs"
          onOptionChanged={handleWeightUnitChange}
        />
      </div>

      <div className="flex justify-center items-center">
        <form
          id="heightInputsForCalorieCalculator"
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
          radioGroupName="heightUnitRadiosForCalorieCalculator"
          optionOneName="m"
          optionTwoName="ft / in"
          onOptionChanged={handleHeightUnitChange}
        />
      </div>

      <CalculateButton
        label="Calculate"
        onCalculateButtonClick={handleCalorieCalculateButtonClick}
      />
    </div>
  );
}

// Sauce:
// https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
// https://en.wikipedia.org/wiki/Schofield_equation
// https://en.wikipedia.org/wiki/Institute_of_Medicine_Equation
