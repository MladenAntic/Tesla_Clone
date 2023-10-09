import React, { useContext, useEffect, useRef } from "react";
import OrderNowBtn from "./OrderNowBtn";
import DemoDriveBtn from "./DemoDriveBtn";
import { context } from "../contexts/context";

const Product = ({ background, title, price, tax, initialPrice }) => {
  const productSection = useRef(null);
  const productRef = useRef(null);

  const content = useRef(null);

  const { section } = useContext(context);
  const { setSection } = useContext(context);

  const { hoverVehicles } = useContext(context);
  const { hoverEnergy } = useContext(context);
  const { hoverCharging } = useContext(context);
  const { hoverDiscover } = useContext(context);
  const { hoverShop } = useContext(context);

  useEffect(() => {
    productSection.current.style.background = `url(${background}) no-repeat center center/cover`;

    const isInViewport = () => {
      const rect = productRef.current.getBoundingClientRect();

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
      if (isInViewport() && title === "Model Y") {
        setSection("Model Y");
      } else if (isInViewport() && title === "Model S") {
        setSection("Model S");
      } else if (isInViewport() && title === "Model X") {
        setSection("Model X");
      }
    });

    content.current.style.transition = "0.25s ease-in-out";

    if (section === "Model Y" && title === "Model Y") {
      content.current.style.opacity = "1";
    } else if (section === "Model S" && title === "Model S") {
      content.current.style.opacity = "1";
    } else if (section === "Model X" && title === "Model X") {
      content.current.style.opacity = "1";
    } else {
      content.current.style.opacity = "0";
    }

    productSection.current.style.transition = "0.25s ease-in-out";

    if (
      hoverVehicles === "mouseover" ||
      hoverEnergy === "mouseover" ||
      hoverCharging === "mouseover" ||
      hoverDiscover === "mouseover" ||
      hoverShop === "mouseover"
    ) {
      productSection.current.style.filter = "blur(0.625rem)";
    } else {
      productSection.current.style.filter = "blur(0rem)";
    }
  });

  return (
    <section
      ref={productSection}
      className="product h-[100vh] flex items-center justify-center snap-start snap-always scroll-mt-[3.125rem] max-md:w-full"
    >
      <main
        ref={content}
        className="z-[1] text-black text-center flex flex-col justify-between h-full w-full pb-[4.6875rem]"
      >
        <div className="flex-1 pt-[6.25rem] text-center max-md:pt-[7.8125rem] max-sm:pt-[9.375rem]">
          <h1
            ref={productRef}
            className="text-[3rem] font-medium mb-[-0.625rem] max-sm:text-[2rem]"
          >
            {title}
          </h1>
          <span className="block text-[1.5rem] font-medium mb-[-0.3125rem] max-md:text-[1.125rem] max-sm:text-[1rem]">
            {price}
          </span>
          <small className="text-sm max-md:text-xs">{tax}</small>
        </div>

        <div className="flex items-center justify-center gap-[1.25rem] mb-[1.875rem] max-sm:flex-col max-sm:gap-[0.625rem] max-md:mb-[0.9375rem]">
          <OrderNowBtn />
          <DemoDriveBtn />
        </div>

        <small className="text-sm max-md:text-xs">{initialPrice}</small>
        <a href="#" className="block underline max-md:text-xs">
          Learn about est. gas savings.
        </a>
      </main>
    </section>
  );
};

export default Product;
