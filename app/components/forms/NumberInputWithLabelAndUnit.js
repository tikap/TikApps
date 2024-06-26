export default function NumberInputWithLabelAndUnit({
  label,
  unit,
  onValueChange,
  onKeyPressed,
  placeholder,
  min = 0,
  max = 5000,
  step = 0.1,
  width = "w-32",
}) {
  return (
    <div className="relative mb-8">
      <label className="flex justify-center items-center">
        <span className="mr-2">{label}</span>
        <input
          id={label + placeholder}
          name={label}
          type="number"
          onChange={onValueChange}
          onKeyDown={onKeyPressed}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          className={
            width +
            " h-6 rounded-md text-black text-center text-sm bg-gray-200 focus:bg-gray-100"
          }
        />
        <span className={unit ? "mx-2" : "mr-2"}>{unit}</span>
      </label>
    </div>
  );
}
