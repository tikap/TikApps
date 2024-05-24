"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link.js";

import { UnitConverters } from "@/constants/UnitConverters";
import RadioTwoOptions from "@/components/forms/RadioTwoOptions";
import NumberInputWithLabelAndUnit from "@/components/forms/NumberInputWithLabelAndUnit";
import DropDownWithSecondaryText from "@/components/forms/DropDownWithSecondaryText";
import CalculateButton from "@/components/forms/CalculateButton";
import CalorieResult from "./calorieResult";

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
  const [activityLevel, setActivityLevel] = useState(null);
  const [calorieResult, setCalorieResult] = useState(Number(0));

  // Input Validity Tracker
  const [inputsAreValid, setInputsAreValid] = useState(false);
  useEffect(() => {
    if (
      sexInput != null &&
      ageInput > 0 &&
      (kilogramInput > 0 || poundInput > 0) &&
      (meterInput > 0 || footInput > 0 || inchInput > 0) &&
      activityLevel != null
    ) {
      setInputsAreValid(true);
    } else {
      setInputsAreValid(false);
    }
  }, [
    sexInput,
    ageInput,
    kilogramInput,
    poundInput,
    meterInput,
    footInput,
    inchInput,
    calorieResult,
    activityLevel,
  ]);

  // Unit states
  const [isKilogram, setIsKilogram] = useState(true);
  const [isMeter, setIsMeter] = useState(true);

  // Visibility states
  const [calorieResultVisibility, setCalorieResultVisibility] = useState(false);

  // References
  const calorieResultElementRef = useRef(null);

  // Drop down options
  const dropDownOptions = [
    {
      value: "sedentary",
      display: "Sedentary",
      secondaryDisplay: "Minimal or no exercise.",
    },
    {
      value: "lightlyActive",
      display: "Lightly Active",
      secondaryDisplay: "Exercise 1 to 3 days a week.",
    },
    {
      value: "moderatelyActive",
      display: "Moderately Active",
      secondaryDisplay: "Exercise 4 to 5 days  a week.",
    },
    {
      value: "veryActive",
      display: "Very Active",
      secondaryDisplay: "Exercise 6 to 7 days a week.",
    },
    {
      value: "extraActive",
      display: "Extra Active",
      secondaryDisplay: "Physical job.",
    },
  ];

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

  // Activity level
  function handleActivityLevelChange(event) {
    switch (event.target.value) {
      case "sedentary":
        setActivityLevel("sedentary");
        break;
      case "lightlyActive":
        setActivityLevel("lightlyActive");
        break;
      case "moderatelyActive":
        setActivityLevel("moderatelyActive");
        break;
      case "veryActive":
        setActivityLevel("veryActive");
        break;
      case "extraActive":
        setActivityLevel("extraActive");
        break;
      default:
        setActivityLevel(null);
        break;
    }
  }

  // Calculate button
  function handleCalorieCalculateButtonClick() {
    var sexOffset = 0;

    switch (sexInput) {
      case "Male":
        sexOffset = 5;
        break;
      case "Female":
        sexOffset = -161;
        break;
      default:
        sexOffset = 0;
    }

    var ageinYears = Number(ageInput);

    var weightInKg = isKilogram
      ? Number(kilogramInput)
      : Number(poundInput) * UnitConverters.POUND_TO_KILOGRAM;

    var heightInCm = isMeter
      ? Number(meterInput) * UnitConverters.METER_TO_CENTIMETER
      : (Number(footInput) * UnitConverters.FOOT_TO_INCH + Number(inchInput)) *
        UnitConverters.INCH_TO_METER *
        UnitConverters.METER_TO_CENTIMETER;

    var activityFactor = 1;

    switch (activityLevel) {
      case "sedentary":
        activityFactor = 1.2;
        break;
      case "lightlyActive":
        activityFactor = 1.375;
        break;
      case "moderatelyActive":
        activityFactor = 1.55;
        break;
      case "veryActive":
        activityFactor = 1.725;
        break;
      case "extraActive":
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1;
        break;
    }

    console.log("InputsAreValid value: " + inputsAreValid);

    var basalMetabolicRate =
      (10 * weightInKg + 6.25 * heightInCm - 5 * ageinYears + sexOffset) *
      activityFactor;

    basalMetabolicRate = inputsAreValid
      ? Math.round(basalMetabolicRate * 100) / 100 // Round to nearest 2 decimal places
      : null;

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

      <NumberInputWithLabelAndUnit
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
            <NumberInputWithLabelAndUnit
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
            <NumberInputWithLabelAndUnit
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
            <NumberInputWithLabelAndUnit
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
              <NumberInputWithLabelAndUnit
                label="Height"
                onValueChange={handleFootValueChange}
                onKeyPressed={handleKeyPressed}
                step="1"
                max="10"
                min="0"
                width="w-14"
                placeholder="Feet"
              />
              <NumberInputWithLabelAndUnit
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

      <DropDownWithSecondaryText
        dropDownLabel="Activity Level"
        options={dropDownOptions}
        onValueChange={handleActivityLevelChange}
      />

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

      <Link
        href="./about#DailyCalorieCalculator"
        className="block mt-4 text-secondary transition duration-150 ease-in-out hover:text-secondary-600 focus:text-secondary-600 active:text-secondary-700"
      >
        FAQ: Learn more about Daily Calorie Calculator
      </Link>
    </div>
  );
}

// Sauce:
// https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
// https://en.wikipedia.org/wiki/Schofield_equation
// https://en.wikipedia.org/wiki/Institute_of_Medicine_Equation
