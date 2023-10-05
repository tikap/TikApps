import { useEffect } from "react";

// Options are an array of object with properties value, display and secondaryDisplay
// For example: {value: "One", display: "Option One", secondaryDisplay: "Option One Description"}
export default function DropDownWithSecondaryText({ dropDownLabel, options }) {
  useEffect(() => {
    const init = async () => {
      const { Select, initTE } = await import("tw-elements");
      initTE({ Select });
    };
    init();
  }, []);

  return (
    <div className="flex items-center pb-8">
      <span className="mr-2">{dropDownLabel}</span>
      <select
        className="w-auto"
        data-te-select-init
        data-te-select-placeholder="select an option"
        data-te-select-option-height="52"
      >
        {options.map(({ value, display, secondaryDisplay }, index) => (
          <option
            key={index}
            value={value}
            data-te-select-secondary-text={secondaryDisplay}
          >
            {display}
          </option>
        ))}
      </select>
    </div>
  );
}
