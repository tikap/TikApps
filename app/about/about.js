export default function About() {
  return (
    <div class="space-y-4">
      <div class="p-2">
        <h1 class="p-2 font-black text-xl">About This Website</h1>
        <p>
          A web application with simple utilities that will help keep track of
          your life. Feel free to explore and use the tools from the navigation
          bar above. <br />
          List of available utilities and its summarized details are given
          below:
        </p>
      </div>
      <div>
        <ul class="space-y-4">
          <li>
            <h2 class="font-bold">BMI Calculator</h2>
            <p>
              Body Mass Index indicates your obesity level based on your height
              and weight. The tool calculates the BMI and provides daily calorie
              limits depending on your weight goals.
            </p>
          </li>
          <li class="italic">More to come...</li>
        </ul>
      </div>
    </div>
  );
}
