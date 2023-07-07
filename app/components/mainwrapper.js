export default function MainWrapper({ wrappedComponent }) {
  return (
    <div class="w-full h-fit bg-neutral-100 p-12 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      {wrappedComponent}
    </div>
  );
}
