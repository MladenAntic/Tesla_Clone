import React, { useRef, useContext, useEffect } from "react";
import "./OrderNowBtn.css";
import { context } from "../contexts/context";
import "animate.css";

const OrderNowBtn = () => {
  const { menu } = useContext(context);

  const orderNowBtn = useRef(null);

  useEffect(() => {
    if (menu === "show") {
      orderNowBtn.current.classList.add("z-[-10]");
    } else {
      orderNowBtn.current.classList.remove("z-[-10]");
    }
  });

  return (
    <button
      ref={orderNowBtn}
      className="orderNow animate__animated animate__fadeInLeft w-[18.75rem] py-[0.625rem] bg-[#e6e4e5] rounded-[0.3125rem] opacity-[0.75] max-md:w-[9.375rem] max-sm:w-[90%]"
    ></button>
  );
};

export default OrderNowBtn;
