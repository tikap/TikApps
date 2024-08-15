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

    // Foot
    case "ft":
      switch (convertTo) {
        case "inch":
          return number * UnitConversionConstants.FOOT_TO_INCH;
      }

    // Inch
    case "inch":
      switch (convertTo) {
        case "ft":
          return number * UnitConversionConstants.INCH_TO_FOOT;
        case "m":
          return number * UnitConversionConstants.INCH_TO_METER;
      }

    // Celcius
    case "C":
      switch (convertTo) {
        case "F":
          return number * (9 / 5) + 32;
        case "K":
          return number + 273.15;
      }

    // Fahrenheit
    case "F":
      switch (convertTo) {
        case "C":
          return (number - 32) * (5 / 9);
        case "K":
          return (number - 32) * (5 / 9) + 273.15;
      }
  }
};
