import CollapsableContent from "../components/content/CollapsableContent";
import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="p-2">
          <h4 className="mb-6 text-xl font-semibold">About This Website</h4>
          <p className="my-5">
            A web application with simple utilities that will help keep track of
            your health. Feel free to explore and use the tools from the
            navigation bar above. <br /> The current list of available tools and
            their FAQ are given below:
          </p>
        </div>
        <Link
          id="BodyMassIndexCalculator"
          href="./bmi"
          className="block font-semibold"
        >
          Body Mass Index Calculator
        </Link>
        <div>
          <CollapsableContent
            contentHeading="What does the Body Mass Index Calculator do?"
            content="The tool calculates your BMI and indicates if your result 
              falls under normal, underweight, overweight or obese categories as standardized
              by the National Institution of Health and World Health Organization."
            uniqueId="collapsableBmiDetails"
          />
        </div>
        <div>
          <CollapsableContent
            contentHeading="What health implications does someone's BMI indicate?"
            content="Body Mass Index is an estimate of where you fall in the health risk category.
          Falling within normal BMI range is ideal for avoiding weight related health issues. 
          Higher BMI categories (overweight and obese) indicate higher risk to cardiovascular diseases
          (heart attack, stroke, etc), diabetes, musculoskeletal disorders and some cancers. Likewise, the lower end of 
          BMI category (underweight) have a greater risks to health conditions like malnutrition, osteoporosis and 
          lowered immunity."
            uniqueId="collapseBmiIndications"
          />
        </div>
        <div>
          <CollapsableContent
            contentHeading="Are there limitations and things to consider while reading a BMI?"
            content="This index is known to have several limitations. 
          It over-estimates BMI for bodies that are taller and more muscular,
          and under-estimates shorter and skinnier bodies. The weight categorizations have also varied over jurisdictions 
          and time periods so the BMI ranges will vary depending on which region and year it is being referenced from. 
          The current standard is set by the National Institution of Health (NIH) in 1998 and also re-iterated by
          the World Health Organization (WHO) over the 1990s."
            uniqueId="collapsableBmiLimitations"
          />
        </div>
      </div>
      <div className="space-y-4">
        <Link
          id="DailyCalorieCalculator"
          href="./calorie"
          className="block font-semibold"
        >
          Daily Calorie Calculator
        </Link>
        <div>
          <CollapsableContent
            contentHeading="What does the Daily Calorie Calculator do?"
            content="The tool calculates the daily calories required to maintain, 
            lose or gain weight from your current measurements."
            uniqueId="collapsableCalorieDetails"
          />
        </div>
      </div>
    </div>
  );
}
