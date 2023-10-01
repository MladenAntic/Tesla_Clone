import React, { useEffect, useRef, useContext } from "react";
import "./DemoDriveBtn.css";
import { context } from "../contexts/context";
import "animate.css";

const DemoDriveBtn = () => {
  const { menu } = useContext(context);

  const demoDriveBtn = useRef(null);

  useEffect(() => {
    if (menu === "show") {
      demoDriveBtn.current.classList.add("z-[-10]");
    } else {
      demoDriveBtn.current.classList.remove("z-[-10]");
    }
  });

  return (
    <button
      ref={demoDriveBtn}
      className="animate__animated animate__fadeInRight demoDrive w-[18.75rem] py-[0.625rem] bg-[#191716] rounded-[0.3125rem] opacity-[0.75] max-md:w-[9.375rem] max-sm:w-[90%]"
    ></button>
  );
};

export default DemoDriveBtn;
