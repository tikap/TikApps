export default function NumberInput({ label, unit }) {
  return (
    <div className="relative my-8">
      <label className="flex justify-center ">
        <span className="mx-2 text-sm">{label}:</span>
        <input
          name="numberInput"
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          className="w-32 rounded-md text-black text-center text-sm bg-gray-200 focus:bg-gray-100"
        />
        <span className="mx-2 text-sm">{unit}</span>
      </label>
    </div>
  );
}
