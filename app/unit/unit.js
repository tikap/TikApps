"use client";

import { useState, useEffect, useRef } from "react";

import NumberInput from "@/components/forms/NumberInputGeneric.js";
import DropDown from "@/components/forms/DropDownGeneric.js";
import CalculateButton from "@/components/forms/CalculateButton.js";
import { UnitConverter } from "./unitConverter";
import UnitConvertedResult from "./unitConvertedResult";

// Main component
export default function Unit() {
  // States and references
  const [inputNumber, setInputNumber] = useState(Number(0));
  const [fromUnits] = useState([
    {
      value: "kg",
      display: "Kilograms",
    },
    {
      value: "lbs",
      display: "Pounds",
    },
    {
      value: "m",
      display: "Meter",
    },
    {
      value: "ft",
      display: "Foot",
    },
    {
      value: "inch",
      display: "Inch",
    },
    {
      value: "C",
      display: "Celcius",
    },
    {
      value: "F",
      display: "Fahrenheit",
    },
  ]);
  const [toUnits, setToUnits] = useState([]);
  const [selectedFromUnit, setSelectedFromUnit] = useState("");
  const [selectedToUnit, setSelectedToUnit] = useState("");
  const [result, setResult] = useState(null);
  const [resultIsVisible, setResultIsVisible] = useState(false);
  const unitConvertedResultElementRef = useRef(null);

  // Effects
  useEffect(() => {
    switch (selectedFromUnit) {
      // Kilograms
      case "kg":
        setToUnits([
          {
            value: "lbs",
            display: "Pounds",
          },
        ]);
        setSelectedToUnit("lbs");
        break;

      // Pounds
      case "lbs":
        setToUnits([
          {
            value: "kg",
            display: "Kilograms",
          },
        ]);
        setSelectedToUnit("kg");
        break;

      // Meters
      case "m":
        setToUnits([
          {
            value: "cm",
            display: "Centimeters",
          },
          {
            value: "inch",
            display: "Inches",
          },
        ]);
        setSelectedToUnit("cm");
        break;

      // Foot
      case "ft":
        setToUnits([
          {
            value: "inch",
            display: "Inches",
          },
        ]);
        setSelectedToUnit("inch");
        break;

      // Inches
      case "inch":
        setToUnits([
          {
            value: "ft",
            display: "Foot",
          },
          {
            value: "m",
            display: "Meters",
          },
        ]);
        setSelectedToUnit("ft");
        break;

      // Celcius
      case "C":
        setToUnits([
          {
            value: "F",
            display: "Fahrenheit",
          },
          {
            value: "K",
            display: "Kelvin",
          },
        ]);
        setSelectedToUnit("F");
        break;

      // Fahrenheit
      case "F":
        setToUnits([
          {
            value: "C",
            display: "Celcius",
          },
          {
            value: "K",
            display: "Kelvin",
          },
        ]);
        setSelectedToUnit("C");
        break;
      default:
        break;
    }
  }, [selectedFromUnit]);

  // Event handlers
  function handleNumberInputValueChange(event) {
    setInputNumber(event.target.value);
  }

  function handleNumberInputKeyPressed(event) {
    if (event.key == "Enter") {
      handleUnitConvertCalculateButtonClick();
    }
  }

  function handleConvertFromUnitChange(event) {
    setResultIsVisible(false);
    setSelectedFromUnit(event.target.value);
  }

  function handleConvertToUnitChange(event) {
    setResultIsVisible(false);
    setSelectedToUnit(event.target.value);
  }

  function handleUnitConvertCalculateButtonClick() {
    if (selectedFromUnit == "" || selectedToUnit == "" || isNaN(inputNumber)) {
      setResult(null);
      setResultIsVisible(true);
      return;
    }

    var convertedValue = UnitConverter(
      Number(inputNumber),
      selectedFromUnit,
      selectedToUnit
    );

    convertedValue = Number(Math.round(convertedValue * 100) / 100);

    setResult(convertedValue);
    setResultIsVisible(true);
  }

  // Unit Converter JSX
  return (
    <div className="flex flex-col space-y-10">
      <h4 className="text-xl">Unit Converter</h4>

      <div className="flex flex-row justify-center space-x-5 items-center">
        <div>Convert from:</div>

        <NumberInput
          placeholder="0"
          onValueChange={handleNumberInputValueChange}
          onKeyPressed={handleNumberInputKeyPressed}
        />

        <DropDown
          placeholder="Select"
          options={fromUnits}
          onValueChange={handleConvertFromUnitChange}
          visibleOptions="10"
        />
      </div>

      <div className="flex flex-row justify-center space-x-5 items-center">
        <div>Convert to:</div>
        <DropDown
          placeholder="Select"
          options={toUnits}
          selectedValue={selectedToUnit}
          onValueChange={handleConvertToUnitChange}
          visibleOptions="10"
        />
      </div>

      <div>
        <CalculateButton
          label="Calculate Unit Conversion"
          onCalculateButtonClick={handleUnitConvertCalculateButtonClick}
        />
      </div>

      <div>
        {resultIsVisible ? (
          <UnitConvertedResult
            resultValue={result}
            referenceToThisElement={unitConvertedResultElementRef}
            resultUnit={selectedToUnit}
          />
        ) : null}
      </div>
    </div>
  );
}
