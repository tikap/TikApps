export default function MainWrapper({ wrappedComponent }) {
  return (
    <div
      className="w-auto h-auto min-h-screen 
      bg-gradient-to-r from-gray-950 to-gray-900 
    text-neutral-200 p-12 text-center"
    >
      {wrappedComponent}
    </div>
  );
}
