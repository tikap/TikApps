"use client";

import { useState } from "react";
import BmiCalculateButton from "../components/forms/BmiCalculateButton";
import NumberInput from "../components/forms/NumberInput";
import BmiResult from "./bmiResult";

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
        step="0.1"
      />
      <NumberInput
        label="Height"
        unit="m"
        onValueChange={handleHeightValueChange}
        step="0.01"
      />
      <BmiCalculateButton
        label="Calculate"
        onBmiCalculateButtonClick={handleBmiCalculateButtonClick}
      />
      <div>
        {bmiResultVisibility ? <BmiResult resultValue={bmiResult} /> : null}
      </div>
    </div>
  );
}
