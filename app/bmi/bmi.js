import BmiCalculateButton from "../components/forms/BmiCalculateButton";
import NumberInput from "../components/forms/NumberInput";

export default function Bmi() {
  return (
    <div>
      <h1 class="mx-8 text-xl font-semibold">Body Mass Index Calculator</h1>
      <NumberInput label="Weight" unit="Kg" />
      <NumberInput label="Height" unit="cm" />
      <BmiCalculateButton label="Calculate" />
    </div>
  );
}
