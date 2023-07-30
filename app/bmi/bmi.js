"use client";

import { useState } from "react";
import BmiCalculateButton from "../components/forms/BmiCalculateButton";
import NumberInput from "../components/forms/NumberInput";

export default function Bmi() {
  const [weightInput, setWeightInput] = useState(Number(0));
  const [heightInput, setHeightInput] = useState(Number(0));
  const [bmiResult, setBmiResult] = useState(Number(0));

  function handleWeightValueChange(event) {
    setWeightInput(event.target.value);
  }

  function handleHeightValueChange(event) {
    setHeightInput(event.target.value);
  }

  function handleBmiCalculateButtonClick() {
    var result = 0;
    const height = Number(heightInput);
    const weight = Number(weightInput);

    result = weight / height ** 2;
    setBmiResult(result);
  }

  return (
    <div>
      <h1 className="mx-8 text-xl font-semibold">Body Mass Index Calculator</h1>
      <NumberInput
        label="Weight"
        unit="Kg"
        onValueChange={handleWeightValueChange}
      />
      <NumberInput
        label="Height"
        unit="m"
        onValueChange={handleHeightValueChange}
      />
      <BmiCalculateButton
        label="Calculate"
        onBmiCalculateButtonClick={handleBmiCalculateButtonClick}
      />
      <div className="m-8">{bmiResult}</div>
    </div>
  );
}
