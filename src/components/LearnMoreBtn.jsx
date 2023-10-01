import React, { useEffect, useRef, useContext } from "react";
import "./LearnMoreBtn.css";
import { context } from "../contexts/context";

const LearnMoreBtn = () => {
  const { menu } = useContext(context);

  const learnMoreBtn = useRef(null);

  useEffect(() => {
    if (menu === "show") {
      learnMoreBtn.current.classList.add("z-[-10]");
    } else {
      learnMoreBtn.current.classList.remove("z-[-10]");
    }
  });

  return (
    <button
      ref={learnMoreBtn}
      className="learnMore w-[18.75rem] py-[0.625rem] bg-[#191716] rounded-[0.3125rem] opacity-[0.7] max-md:w-[9.375rem] max-sm:w-[90%]"
    ></button>
  );
};

export default LearnMoreBtn;
