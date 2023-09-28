"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { UnitConverters } from "../constants/UnitConverters";

//#region Import sub components dynamically
const RadioTwoOptions = dynamic(
  () => import("../components/forms/RadioTwoOptions"),
  {
    loading: () => <p className="my-4">Loading...</p>,
    ssr: false,
  }
);

const NumberInput = dynamic(() => import("../components/forms/NumberInput"), {
  loading: () => <p className="my-4">Loading...</p>,
  ssr: false,
});

const CalculateButton = dynamic(
  () => import("../components/forms/CalculateButton"),
  {
    loading: () => <p className="my-4">Loading...</p>,
    ssr: false,
  }
);

const CalorieResult = dynamic(() => import("./calorieResult"), {
  loading: () => <p className="my-4">Loading...</p>,
  ssr: false,
});
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

  // Visibility states
  const [calorieResultVisibility, setCalorieResultVisibility] = useState(false);

  // References
  const calorieResultElementRef = useRef(null);

  // UI event handlers
  // Sex assigned at birth
  function handleSexValueChange(event) {
    setCalorieResultVisibility(false);

    if (event.target.value == "Male") {
      setSexInput("Male");
    }
    if (event.target.value == "Female") {
      setSexInput("Female");
    }
  }

  // Age
  function handleAgeValueChange(event) {
    setCalorieResultVisibility(false);
    setAgeInput(event.target.value);
  }

  // Weight
  function handleKilogramValueChange(event) {
    setKilogramInput(event.target.value);
  }

  function handlePoundValueChange(event) {
    setPoundInput(event.target.value);
  }

  function handleWeightUnitChange(event) {
    resetWeightInputs();
    setCalorieResultVisibility(false);

    if (event.target.value == "Kg") {
      setIsKilogram(true);
    }
    if (event.target.value == "lbs") {
      setIsKilogram(false);
    }
  }

  // Height
  function handleMeterValueChange(event) {
    setCalorieResultVisibility(false);
    if (isMeter) {
      let value = event.target.value;
      if (value.length == 2) {
        event.target.value = value.slice(0, 1) + "." + value.slice(1, 2);
      }
    }
    setMeterInput(event.target.value);
  }

  function handleFootValueChange(event) {
    setCalorieResultVisibility(false);
    let value = event.target.value;
    if (value.length >= 1) {
      let heightToFocus = document.getElementById("Inches");
      heightToFocus?.focus();
    }
    setFootInput(event.target.value);
  }

  function handleInchValueChange(event) {
    setInchInput(event.target.value);
  }

  function handleHeightUnitChange(event) {
    resetHeightInputs();
    setCalorieResultVisibility(false);

    if (event.target.value == "m") {
      setIsMeter(true);
    }
    if (event.target.value == "ft / in") {
      setIsMeter(false);
    }
  }

  // Calculate button
  function handleCalorieCalculateButtonClick() {
    var weightInKg = Number(kilogramInput);
    var heightInCm = Number(meterInput) * UnitConverters.METER_TO_CENTIMETER;
    var ageinYears = Number(ageInput);
    var basalMetabolicRate = 0;

    if (sexInput == "Male") {
      basalMetabolicRate =
        10 * weightInKg + 6.25 * heightInCm - 5 * ageinYears + 5;
    }
    if (sexInput == "Female") {
      basalMetabolicRate =
        10 * weightInKg + 6.25 * heightInCm - 5 * ageinYears - 161;
    }

    setCalorieResult(basalMetabolicRate);
    setCalorieResultVisibility(true);
  }

  // User action handlers
  function handleKeyPressed(event) {
    if (event.key == "Enter") {
      let elementToFocus = null;
      switch (event.target.id) {
        case "AgeYears":
          elementToFocus =
            document.getElementById("WeightKilograms") ??
            document.getElementById("WeightPounds");
          elementToFocus?.focus();
          break;
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
          handleCalorieCalculateButtonClick();
      }
    }
  }

  // Helper functions
  function resetWeightInputs() {
    document.getElementById("calorieWeightInputs").reset();
    setKilogramInput(0);
    setPoundInput(0);
  }

  function resetHeightInputs() {
    document.getElementById("calorieHeightInputs").reset();
    setMeterInput(0);
    setFootInput(0);
    setInchInput(0);
  }

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
        unit="yr"
        onValueChange={handleAgeValueChange}
        onKeyPressed={handleKeyPressed}
        placeholder="Years"
        min="0"
        max="200"
        step="1"
        width="w-16"
      />

      <div className="flex justify-center">
        <form
          id="calorieWeightInputs"
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
          radioGroupName="calorieWeightUnitRadios"
          optionOneName="Kg"
          optionTwoName="lbs"
          onOptionChanged={handleWeightUnitChange}
        />
      </div>

      <div className="flex justify-center items-center">
        <form
          id="calorieHeightInputs"
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
          radioGroupName="calorieHeightUnitRadios"
          optionOneName="m"
          optionTwoName="ft / in"
          onOptionChanged={handleHeightUnitChange}
        />
      </div>

      <CalculateButton
        label="Calculate"
        onCalculateButtonClick={handleCalorieCalculateButtonClick}
      />

      <div>
        {calorieResultVisibility ? (
          <CalorieResult
            resultValue={calorieResult}
            referenceToThisElement={calorieResultElementRef}
          />
        ) : null}
      </div>
    </div>
  );
}

// Sauce:
// https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
// https://en.wikipedia.org/wiki/Schofield_equation
// https://en.wikipedia.org/wiki/Institute_of_Medicine_Equation
