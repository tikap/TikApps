import NumberInput from "../components/forms/NumberInput";

export default function Bmi() {
  return (
    <div class="flex-col">
      <h2 class="mb-4 text-4xl font-semibold">Body Mass Index Calculator</h2>
      <NumberInput inputLabel="Weight" inputUnit="Kg" />
      <NumberInput inputLabel="Height" inputUnit="cm" />
    </div>
  );
}
