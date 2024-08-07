import { UnitConversionConstants } from "@/constants/UnitConversionConstants";

export const UnitConverter = (number, convertFrom, convertTo) => {
  if (isNaN(number)) {
    return 0;
  }

  switch (convertFrom) {
    // Kilograms
    case "kg":
      switch (convertTo) {
        case "lbs":
          return number * UnitConversionConstants.KILOGRAM_TO_POUND;
      }

    // Pounds
    case "lbs":
      switch (convertTo) {
        case "kg":
          return number * UnitConversionConstants.POUND_TO_KILOGRAM;
      }

    // Meters
    case "m":
      switch (convertTo) {
        case "cm":
          return number * UnitConversionConstants.METER_TO_CENTIMETER;
        case "inch":
          return number * UnitConversionConstants.METER_TO_INCH;
      }
  }
};
