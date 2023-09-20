import dynamic from "next/dynamic";
import PageLoadingWrapper from "../components/wrappers/pageloadingwrapper";

//#region Import sub components dynamically
const RadioTwoOptions = dynamic(
  () => import("../components/forms/RadioTwoOptions"),
  {
    loading: () => <PageLoadingWrapper loadingText="Loading..." />,
    ssr: false,
  }
);

const NumberInput = dynamic(() => import("../components/forms/NumberInput"), {
  loading: () => <PageLoadingWrapper loadingText="Loading..." />,
  ssr: false,
});

const CalculateButton = dynamic(
  () => import("../components/forms/CalculateButton"),
  {
    loading: () => <PageLoadingWrapper loadingText="Loading..." />,
    ssr: false,
  }
);
//#endregion

// Main component
export default function Calorie() {
  // UI event handlers
  function handleAgeValueChange() {}

  function handleAgeKeyEntered() {}

  function handleSexValueChange() {}

  function handleCalorieCalculateButtonClick() {
    console.log("clicked!");
  }

  // Calorie calculator JSX
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="mb-6 text-xl">Daily Calorie Calculator</h4>

      <div className="flex justify-center">
        <span className="pr-3">Sex</span>
        <RadioTwoOptions
          radioGroupName="sexAssignedAtBirth"
          optionOneName="Male"
          optionTwoName="Female"
          onOptionChanged={handleSexValueChange}
        />
      </div>

      <NumberInput
        label="Age"
        onValueChange={handleAgeValueChange}
        onKeyPressed={handleAgeKeyEntered}
        placeholder="Years"
        min="0"
        max="200"
        step="1"
        width="w-16"
      />

      <CalculateButton
        label="Calculate"
        onCalculateButtonClick={handleCalorieCalculateButtonClick}
      />
    </div>
  );
}

// Sauce:
// https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
// https://en.wikipedia.org/wiki/Schofield_equation
// https://en.wikipedia.org/wiki/Institute_of_Medicine_Equation
