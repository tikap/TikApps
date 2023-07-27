"use client";

import { useState } from "react";
import BmiCalculateButton from "../components/forms/BmiCalculateButton";
import NumberInput from "../components/forms/NumberInput";

export default function Bmi() {
  const [bmiResult, setBmiResult] = useState(Number(0));

  function handleBmiCalculateButtonClick() {
    setBmiResult(bmiResult + 1);
  }

  return (
    <div>
      <h1 class="mx-8 text-xl font-semibold">Body Mass Index Calculator</h1>
      <NumberInput label="Weight" unit="Kg" />
      <NumberInput label="Height" unit="cm" />
      <BmiCalculateButton
        label="Calculate"
        onBmiCalculateButtonClick={handleBmiCalculateButtonClick}
      />
      <div class="m-8">{bmiResult}</div>
    </div>
  );
}
