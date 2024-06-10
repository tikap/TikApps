export default function NumberInputGeneric({
  id,
  name,
  placeholder,
  width = "w-14",
  onValueChange,
  onKeyPressed,
}) {
  return (
    <input
      type="number"
      id={id}
      name={name}
      placeholder={placeholder}
      className={
        width +
        " h-6 rounded-md text-black text-center text-sm bg-gray-200 focus:bg-gray-100"
      }
      onChange={onValueChange}
      onKeyDown={onKeyPressed}
    />
  );
}
