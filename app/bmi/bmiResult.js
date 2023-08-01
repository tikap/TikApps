export default function BmiResult({ resultValue }) {
  return (
    <div class="flex justify-center">
      <div className="w-64 p-2 my-8 bg-gray-800">
        <div className="block m-8">Your BMI:</div>
        <div className="block m-8 font-bold text-lg">{resultValue}</div>
      </div>
    </div>
  );
}
