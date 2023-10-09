import React, { useContext, useEffect, useRef } from "react";
import OrderNowBtn from "../components/OrderNowBtn";
import LearnMoreBtn from "../components/LearnMoreBtn";
import powerwall from "../assets/powerwall.avif";
import { context } from "../contexts/context";

const Powerwall = () => {
  const powerwallBgRef = useRef(null);
  const powerwallSectionRef = useRef(null);

  const content = useRef(null);

  useEffect(() => {
    powerwallBgRef.current.style.background = `url(${powerwall}) no-repeat center center/cover`;
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
      const rect = powerwallSectionRef.current.getBoundingClientRect();

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
        setSection("Powerwall");
      }
    });

    content.current.style.transition = "0.25s ease-in-out";

    if (section === "Powerwall") {
      content.current.style.opacity = "1";
    } else {
      content.current.style.opacity = "0";
    }

    powerwallBgRef.current.style.transition = "0.25s ease-in-out";

    if (
      hoverVehicles === "mouseover" ||
      hoverEnergy === "mouseover" ||
      hoverCharging === "mouseover" ||
      hoverDiscover === "mouseover" ||
      hoverShop === "mouseover"
    ) {
      powerwallBgRef.current.style.filter = "blur(0.625rem)";
    } else {
      powerwallBgRef.current.style.filter = "blur(0rem)";
    }
  });

  return (
    <section
      ref={powerwallBgRef}
      className="h-[100vh] flex items-center justify-center z-[-10] snap-start snap-always scroll-mt-[3.125rem] overflow-hidden"
    >
      <main
        ref={content}
        className="z-[1] text-white text-center flex flex-col justify-between h-full w-full pb-[4.6875rem]"
      >
        <div className="flex-1 pt-[6.25rem] text-center max-md:pt-[9.375rem]">
          <h1
            ref={powerwallSectionRef}
            className="text-black text-[3rem] font-medium max-sm:text-[2rem]"
          >
            Powerwall
          </h1>
        </div>

        <div className="flex items-center justify-center gap-[1.25rem] mb-[3.125rem] max-sm:flex-col max-sm:gap-[0.625rem]">
          <OrderNowBtn />
          <LearnMoreBtn />
        </div>
      </main>
    </section>
  );
};

export default Powerwall;
