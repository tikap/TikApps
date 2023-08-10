import CollapsableContent from "../components/content/CollapsableContent";

export default function About() {
  return (
    <div className="space-y-4">
      <div className="p-2">
        <h4 className="mb-6 text-xl font-semibold">About This Website</h4>
        <p className="my-4">
          A web application with simple utilities that will help keep track of
          your health. Feel free to explore and use the tools from the
          navigation bar above.
        </p>
        <p className="my-4">
          The list of currently available tools are given below:
        </p>
      </div>
      <div>
        <CollapsableContent
          contentHeading="Body Mass Index Calculator"
          content="Body Mass Index (BMI) is an indicator that's calculated using your height
              and weight. This tool calculates your BMI and indicates if your result 
              falls under normal, underweight, overweight or obese categories as standardized
              by the National Institution of Health and World Health Organization"
          uniqueId="collapsableBmiDetails"
        />
      </div>
    </div>
  );
}
