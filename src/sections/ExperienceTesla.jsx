import React, { useContext, useEffect, useRef } from "react";
import { context } from "../contexts/context";
import video from "../assets/experienceTeslaVid.webm";

const ExperienceTesla = () => {
  const experienceTeslaSection = useRef(null);
  const experienceTeslaRef = useRef(null);
  const content = useRef(null);

  const { section } = useContext(context);
  const { setSection } = useContext(context);

  const { hoverVehicles } = useContext(context);
  const { hoverEnergy } = useContext(context);
  const { hoverCharging } = useContext(context);
  const { hoverDiscover } = useContext(context);
  const { hoverShop } = useContext(context);

  useEffect(() => {
    const isInViewport = () => {
      const rect = experienceTeslaRef.current.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener("scroll", () => {
      if (isInViewport()) {
        setSection("Experience Tesla");
      }
    });

    content.current.style.transition = "0.25s ease-in-out";

    if (section === "Experience Tesla") {
      content.current.style.opacity = "1";
    } else {
      content.current.style.opacity = "0";
    }

    experienceTeslaSection.current.style.transition = "0.25s ease-in-out";

    if (
      hoverVehicles === "mouseover" ||
      hoverEnergy === "mouseover" ||
      hoverCharging === "mouseover" ||
      hoverDiscover === "mouseover" ||
      hoverShop === "mouseover"
    ) {
      experienceTeslaSection.current.style.filter = "blur(0.625rem)";
    } else {
      experienceTeslaSection.current.style.filter = "blur(0rem)";
    }
  });

  return (
    <section
      ref={experienceTeslaSection}
      className="h-[100vh] flex items-center justify-center relative snap-start snap-always scroll-mt-[3.125rem] overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 bottom-0 right-0 z-[-10] w-full h-full object-cover"
        preload="auto"
        playsInline
        muted
        loop
        src={video}
        data-loaded="true"
        autoPlay
      ></video>

      <main
        ref={content}
        className="z-[1] text-white text-center flex flex-col justify-between h-full pb-[4.6875rem] w-full"
      >
        <div className="flex-1 pt-[6.25rem] text-center max-md:pt-[9.375rem]">
          <h1
            ref={experienceTeslaRef}
            className="text-[3rem] font-medium max-sm:text-[2rem]"
          >
            Experience Tesla
          </h1>
          <small className="text-base max-md:text-xs">
            Schedule a Demo Drive Today
          </small>
        </div>

        <div className="flex items-center justify-center mb-[3.125rem]">
          <button className="w-[17.1875rem] py-[0.5rem] bg-transparent rounded-[0.3125rem] border-solid border-4 border-white max-md:w-[9.375rem] max-sm:w-[90%]">
            Demo Drive
          </button>
        </div>
      </main>
    </section>
  );
};

export default ExperienceTesla;
