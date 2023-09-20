export default function PageLoadingWrapper({ loadingText }) {
  return (
    <p
      className="h-screen p-8 
  bg-gradient-to-r from-gray-950 to-gray-900 
  text-center text-neutral-200"
    >
      {loadingText}
    </p>
  );
}
