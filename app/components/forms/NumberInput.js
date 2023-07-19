export default function NumberInput({ inputLabel, inputUnit }) {
  return (
    <div class="m-4">
      <label>
        {inputLabel}: <input name="myInput" /> {inputUnit}
      </label>
    </div>
  );
}
