import Link from "next/link";
import CollapsableContent from "@/components/content/CollapsableContent";

export default function About() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="p-2">
          <h4 className="mb-6 text-xl font-semibold">About This Website</h4>
          <p className="my-5">
            A web application with simple calculators. Feel free to explore and
            use the tools from the navigation bar above.
            <br /> <br />
            The current list of available calculators and their Frequenty Asked
            Questions are given below:
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <Link id="UnitConverter" href="./unit" className="block font-semibold">
          Unit Converter
        </Link>
        <div>
          <CollapsableContent
            contentHeading="Where can I request an addition of a new unit to convert?"
            content="Please feel free to request an addition of a unit by sending the form in the Contact page."
            uniqueId="addUnitToUnitConverter"
          />
        </div>
      </div>
      <div className="space-y-4">
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
            content="This calculator gives a rough estimate of daily calories required 
            to maintain, lose or gain weight using body measurements and activity levels."
            uniqueId="collapsableCalorieDetails"
          />
        </div>
        <div>
          <CollapsableContent
            contentHeading="How is the Daily Calorie Requirement Calculated?"
            content="The formula used for calculating the daily calorie requirement follows
            Mifflin and St Jeor's 1990 revision of the Harris–Benedict equations. The result
            is then multiplied by a number determined by the activity factor. The more active
            you are, the more calories are required to maintain, gain or lose weight."
            uniqueId="collapsableCalorieFormula"
          />
        </div>
        <div>
          <CollapsableContent
            contentHeading="Is the Daily Calorie Calculator accurate? What are its limitations?"
            content="The calorie calculations do not attempt to take into account body 
            composition, identical results can be calculated for a very muscular person, 
            and an overweight person, who are both the same height, weight, age and gender. 
            As muscle and fat require differing amounts of calories to maintain, 
            the estimates will not be accurate for such cases."
            uniqueId="collapsableCalorieLimitations"
          />
        </div>
      </div>
    </div>
  );
}
