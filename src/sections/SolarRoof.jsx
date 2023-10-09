import React, { useEffect, useRef, useContext } from "react";
import OrderNowBtn from "../components/OrderNowBtn";
import LearnMoreBtn from "../components/LearnMoreBtn";
import solarRoof from "../assets/solarRoof.avif";
import { context } from "../contexts/context";

const SolarRoof = () => {
  const solarRoofBgRef = useRef(null);
  const solarRoofSectionRef = useRef(null);

  const content = useRef(null);

  useEffect(() => {
    solarRoofBgRef.current.style.background = `url(${solarRoof}) no-repeat center center/cover`;
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
      const rect = solarRoofSectionRef.current.getBoundingClientRect();

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
        setSection("Solar Roof");
      }
    });

    content.current.style.transition = "0.25s ease-in-out";

    if (section === "Solar Roof") {
      content.current.style.opacity = "1";
    } else {
      content.current.style.opacity = "0";
    }

    solarRoofBgRef.current.style.transition = "0.25s ease-in-out";

    if (
      hoverVehicles === "mouseover" ||
      hoverEnergy === "mouseover" ||
      hoverCharging === "mouseover" ||
      hoverDiscover === "mouseover" ||
      hoverShop === "mouseover"
    ) {
      solarRoofBgRef.current.style.filter = "blur(0.625rem)";
    } else {
      solarRoofBgRef.current.style.filter = "blur(0rem)";
    }
  });

  return (
    <section
      ref={solarRoofBgRef}
      className="h-[100vh] flex items-center justify-center z-[-10] snap-start snap-always scroll-mt-[3.125rem] max-md:w-full max-md:h-full"
    >
      <main
        ref={content}
        className="z-[1] text-white text-center flex flex-col justify-between h-full w-full pb-[4.6875rem]"
      >
        <div className="flex-1 pt-[6.25rem] text-center max-md:pt-[9.375rem]">
          <h1
            ref={solarRoofSectionRef}
            className="text-black text-[3rem] font-medium max-sm:text-[2rem]"
          >
            Solar Roof
          </h1>
          <small className="text-black text-base max-md:text-xs">
            Produce Clean Energy From Your Roof
          </small>
        </div>

        <div className="flex items-center justify-center gap-[1.25rem] mb-[3.125rem] max-sm:flex-col max-sm:gap-[0.625rem]">
          <OrderNowBtn />
          <LearnMoreBtn />
        </div>
      </main>
    </section>
  );
};

export default SolarRoof;
