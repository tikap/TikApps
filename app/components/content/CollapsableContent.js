"use client";
import { useEffect } from "react";

export default function CollapsableContent({
  contentHeading,
  content,
  uniqueId = "collapseContentOne",
}) {
  useEffect(() => {
    const init = async () => {
      const { Collapse, Ripple, initTE } = await import("tw-elements");
      initTE({ Collapse, Ripple });
    };
    init();
  }, []);

  return (
    <div className="container my-4 mx-auto md:px-6 xl:px-24">
      <section>
        <div id="accordionFlushExample">
          <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
            <h2 className="mb-0" id="flush-headingOne">
              <button
                className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target={"#" + uniqueId}
                aria-expanded="false"
                aria-controls={uniqueId}
              >
                {contentHeading}
                <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#F0F3F4] motion-reduce:transition-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id={uniqueId}
              className="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingOne"
              data-te-parent={"#" + uniqueId}
            >
              <div className="py-4 px-5 text-neutral-300">{content}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
