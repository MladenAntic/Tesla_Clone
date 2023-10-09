import React, { useEffect, useRef, useContext } from "react";
import OrderNowBtn from "../components/OrderNowBtn";
import LearnMoreBtn from "../components/LearnMoreBtn";
import solarPanels from "../assets/solarPanels.avif";
import { context } from "../contexts/context";

const SolarPanels = () => {
  const solarPanelsBgRef = useRef(null);
  const solarPanelsSectionRef = useRef(null);

  const content = useRef(null);

  useEffect(() => {
    solarPanelsBgRef.current.style.background = `url(${solarPanels}) no-repeat center center/cover`;
  });

  const { section } = useContext(context);
  const { setSection } = useContext(context);

  const { hoverVehicles } = useContext(context);
  const { hoverEnergy } = useContext(context);
  const { hoverCharging } = useContext(context);
  const { hoverDiscover } = useContext(context);
  const { hoverShop } = useContext(context);

  useEffect(() => {
    const isInViewport = () => {
      const rect = solarPanelsSectionRef.current.getBoundingClientRect();

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
        setSection("Solar Panels");
      }
    });

    content.current.style.transition = "0.25s ease-in-out";

    if (section === "Solar Panels") {
      content.current.style.opacity = "1";
    } else {
      content.current.style.opacity = "0";
    }

    solarPanelsBgRef.current.style.transition = "0.25s ease-in-out";

    if (
      hoverVehicles === "mouseover" ||
      hoverEnergy === "mouseover" ||
      hoverCharging === "mouseover" ||
      hoverDiscover === "mouseover" ||
      hoverShop === "mouseover"
    ) {
      solarPanelsBgRef.current.style.filter = "blur(0.625rem)";
    } else {
      solarPanelsBgRef.current.style.filter = "blur(0rem)";
    }
  });

  return (
    <section
      ref={solarPanelsBgRef}
      className="solarPanels h-[100vh] flex items-center justify-center z-[-10] snap-start snap-always scroll-mt-[3.125rem] overflow-hidden"
    >
      <main
        ref={content}
        className="z-[1] text-white text-center flex flex-col justify-between h-full w-full pb-[4.6875rem]"
      >
        <div className="flex-1 pt-[6.25rem] text-center max-md:pt-[9.375rem]">
          <h1
            ref={solarPanelsSectionRef}
            className="text-black text-[3rem] font-medium max-sm:text-[2rem]"
          >
            Solar Panels
          </h1>
          <a
            href="#"
            className="text-black text-base underline font-medium max-md:text-xs"
          >
            Schedule a Virtual Consultation
          </a>
        </div>

        <div className="flex items-center justify-center gap-[1.25rem] mb-[3.125rem] max-sm:flex-col max-sm:gap-[0.625rem]">
          <OrderNowBtn />
          <LearnMoreBtn />
        </div>
      </main>
    </section>
  );
};

export default SolarPanels;
