import React, { useContext, useEffect, useRef } from "react";
import accessories from "../assets/accessories.avif";
import { context } from "../contexts/context";

const Accessories = () => {
  const accessoriesBgRef = useRef(null);
  const accessoriesSectionRef = useRef(null);

  const content = useRef(null);

  useEffect(() => {
    accessoriesBgRef.current.style.background = `url(${accessories}) no-repeat center center/cover`;
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
      const rect = accessoriesSectionRef.current.getBoundingClientRect();

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
        setSection("Accessories");
      }
    });

    content.current.style.transition = "0.25s ease-in-out";

    if (section === "Accessories") {
      content.current.style.opacity = "1";
    } else {
      content.current.style.opacity = "0";
    }

    accessoriesBgRef.current.style.transition = "0.25s ease-in-out";

    if (
      hoverVehicles === "mouseover" ||
      hoverEnergy === "mouseover" ||
      hoverCharging === "mouseover" ||
      hoverDiscover === "mouseover" ||
      hoverShop === "mouseover"
    ) {
      accessoriesBgRef.current.style.filter = "blur(0.625rem)";
    } else {
      accessoriesBgRef.current.style.filter = "blur(0rem)";
    }
  });

  return (
    <section
      ref={accessoriesBgRef}
      className="h-[100vh] flex items-center justify-center z-[-10] snap-start snap-always scroll-mt-[3.125rem] overflow-hidden"
    >
      <main
        ref={content}
        className="z-[1] text-black text-center flex flex-col justify-between h-full w-full pb-[4.6875rem]"
      >
        <div className="flex-1 pt-[6.25rem] text-center max-md:pt-[9.375rem]">
          <h1
            ref={accessoriesSectionRef}
            className="text-[3rem] font-medium max-sm:text-[2rem]"
          >
            Accessories
          </h1>
        </div>

        <div className="flex items-center justify-center mb-[3.125rem]">
          <button className="w-[17.1875rem] py-[0.625rem] bg-white font-medium rounded-[0.3125rem] max-md:w-[9.375rem] max-sm:w-[90%]">
            Shop Now
          </button>
        </div>
      </main>
    </section>
  );
};

export default Accessories;
