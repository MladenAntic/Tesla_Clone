import React, { useRef, useContext, useEffect } from "react";
import "./Intro.css";
import video from "../assets/Model3Vid.mp4";
import OrderNowBtn from "../components/OrderNowBtn";
import DemoDriveBtn from "../components/DemoDriveBtn";
import { context } from "../contexts/context";
import "animate.css";

const Intro = () => {
  const introSection = useRef(null);
  const introRef = useRef(null);
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
      const rect = introRef.current.getBoundingClientRect();

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
        setSection("Intro");
      }
    });

    if (section === "Intro") {
      content.current.style.opacity = "1";
    } else {
      content.current.style.opacity = "0";
    }

    if (
      hoverVehicles === "mouseover" ||
      hoverEnergy === "mouseover" ||
      hoverCharging === "mouseover" ||
      hoverDiscover === "mouseover" ||
      hoverShop === "mouseover"
    ) {
      introSection.current.style.filter = "blur(0.625rem)";
    } else {
      introSection.current.style.filter = "blur(0rem)";
    }
  });

  return (
    <section
      ref={introSection}
      className="intro h-[100vh] flex items-center justify-center snap-start snap-always"
    >
      <video
        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover"
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
        className="intro__info z-[1] text-white text-center flex flex-col justify-between h-full py-[3.125rem] max-sm:pb-[1.5625rem]"
      >
        <div className="intro__info flex-1 pt-[6.25rem] text-center max-md:pt-[7.8125rem] max-sm:pt-[9.375rem]">
          <h1
            ref={introRef}
            className="intro__title animate__animated animate__fadeInUp text-[3rem] font-medium mb-[-0.625rem] max-sm:text-[2rem]"
          >
            Model 3
          </h1>
          <div className="intro__price animate__animated animate__fadeInUp">
            <span className="animate__animated animate__fadeInUp block text-[1.5rem] font-medium mb-[-0.3125rem] max-md:text-[1.125rem] max-sm:text-[1rem]">
              From $29,740*
            </span>
            <small className="text-sm max-md:text-xs">
              After Federal Tax Credit & Est. Gas Savings
            </small>
          </div>
        </div>

        <div className="flex items-center justify-center gap-[1.25rem] mb-[1.875rem] max-sm:flex-col max-sm:gap-[0.625rem] max-md:mb-[0.9375rem]">
          <OrderNowBtn />
          <DemoDriveBtn />
        </div>

        <div className="intro__savings animate__animated animate__fadeInDown">
          <small className="text-sm max-md:text-xs">
            *Price before incentives and savings is $40,240, excluding taxes and
            fees. Subject to change.
          </small>
          <a href="#" className="block underline max-md:text-xs">
            Learn about est. gas savings.
          </a>
        </div>
      </main>
    </section>
  );
};

export default Intro;
