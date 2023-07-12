export default function MainWrapper({ wrappedComponent }) {
  return (
    <div class="w-auto h-auto bg-gray-900 text-neutral-200 p-12 text-center">
      {wrappedComponent}
    </div>
  );
}
