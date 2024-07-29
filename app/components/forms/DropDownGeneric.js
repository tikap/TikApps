import { useEffect } from "react";

// Options are an array of object with properties value and display
// For example: {value: "One", display: "Option One"}
export default function DropDownGeneric({
  dropDownLabel,
  placeholder = "select an option",
  options,
  selectedValue,
  onValueChange,
}) {
  useEffect(() => {
    const init = async () => {
      const { Select, initTE } = await import("tw-elements");
      initTE({ Select });
    };
    init();
  }, []);

  return (
    <div className="flex items-center">
      <span className="mr-2">{dropDownLabel}</span>
      <select
        className="w-auto text-black"
        data-te-select-init
        data-te-select-placeholder={placeholder}
        data-te-select-option-height="35"
        value={selectedValue}
        onChange={onValueChange}
      >
        {options.map(({ value, display }, index) => (
          <option key={index} value={value}>
            {display}
          </option>
        ))}
      </select>
    </div>
  );
}
