"use client";

import CalculateButton from "@/components/forms/CalculateButton.js";
import NumberInput from "@/components/forms/NumberInputGeneric.js";
import DropDown from "@/components/forms/DropDownGeneric.js";

// Main component
export default function Unit() {
  // Unit Converter JSX
  return (
    <div className="flex flex-col space-y-10">
      <h4 className="text-xl">Unit Converter</h4>
      <div className="flex flex-row justify-center space-x-5 items-center">
        <div>Convert from:</div>
        <NumberInput label="From" />
        <DropDown placeholder="Select Unit" />
      </div>
      <div className="flex flex-row justify-center space-x-5 items-center">
        <div>Convert to:</div>
        <DropDown placeholder="Select Unit" />
      </div>
      <div>
        <CalculateButton />
      </div>
    </div>
  );
}
