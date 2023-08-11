export default function NumberInput({
  label,
  unit,
  onValueChange,
  onKeyPressed,
  min = 0,
  max = 5000,
  step = 0.1,
}) {
  return (
    <div className="relative my-8">
      <label className="flex justify-center items-center">
        <span className="mx-2 text-sm">{label}:</span>
        <input
          type="number"
          onChange={onValueChange}
          onKeyDown={onKeyPressed}
          placeholder="0"
          min={min}
          max={max}
          step={step}
          className="w-32 h-6 rounded-md text-black text-center text-sm bg-gray-200 focus:bg-gray-100"
        />
        <span className="mx-2 text-sm">{unit}</span>
      </label>
    </div>
  );
}
