export default function BmiResult({ resultValue }) {
  var weightCategory = "";

  switch (true) {
    case resultValue >= 30:
      weightCategory = "Obese";
      break;
    case resultValue >= 25:
      weightCategory = "Overweight";
      break;
    case resultValue >= 18.5:
      weightCategory = "Normal";
      break;
    case resultValue >= 0:
      weightCategory = "Underweight";
      break;
    default:
      weightCategory = "";
  }

  return (
    <div className="flex justify-center">
      <div className="w-64 p-2 my-8 bg-gray-800">
        <div className="block m-8">Your BMI:</div>
        <div className="block m-8 font-bold text-lg">{resultValue}</div>
        <div className="block m-8">{weightCategory}</div>
      </div>
    </div>
  );
}
