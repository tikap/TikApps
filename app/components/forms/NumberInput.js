export default function NumberInput({ label, unit }) {
  return (
    <div class="relative my-8">
      <label class="flex justify-center ">
        <span class="mx-2 text-sm">{label}:</span>
        <input
          name="numberInput"
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          class="w-32 rounded-md text-black text-center text-sm bg-gray-200 focus:bg-gray-100"
        />
        <span class="mx-2 text-sm">{unit}</span>
      </label>
    </div>
  );
}
