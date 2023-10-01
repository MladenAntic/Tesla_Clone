import React from "react";
import charging from "../assets/charging.avif";
import homeCharging from "../assets/home-charging.avif";
import supercharging from "../assets/supercharging.avif";
import "animate.css";

const ChargingDropdown = () => {
  return (
    <div className="animate__animated animate__fadeInDown absolute top-[6rem] left-0 right-0 bg-white cursor-auto flex items-start justify-center gap-[3.125rem] pt-[6.25rem] pb-[3.125rem] px-[9.375rem] z-[-1] max-xl:hidden">
      <div className="flex items-center gap-[1.5625rem] text-black">
        <div href="#" className="text-center">
          <a href="">
            <img className="w-[12.5rem]" src={charging} alt="Model S Menu" />
          </a>
          <h3 className="text-xl font-bold">Solar Panels</h3>
          <div className="flex items-center justify-center gap-[0.625rem]">
            <a
              href="#"
              className="text-sm underline font-medium hover:font-bold"
            >
              Learn
            </a>
            <a
              href="#"
              className="text-sm underline font-medium hover:font-bold"
            >
              Order
            </a>
          </div>
        </div>

        <div href="#" className="text-center">
          <a href="">
            <img className="w-[12.5rem]" src={homeCharging} alt="Model S Menu" />
          </a>
          <h3 className="text-xl font-bold">Solar Roof</h3>
          <div className="flex items-center justify-center gap-[0.625rem]">
            <a
              href="#"
              className="text-sm underline font-medium hover:font-bold"
            >
              Learn
            </a>
            <a
              href="#"
              className="text-sm underline font-medium hover:font-bold"
            >
              Order
            </a>
          </div>
        </div>

        <div href="#" className="text-center">
          <a href="">
            <img className="w-[12.5rem]" src={supercharging} alt="Model S Menu" />
          </a>
          <h3 className="text-xl font-bold">Powerwall</h3>
          <div className="flex items-center justify-center gap-[0.625rem]">
            <a
              href="#"
              className="text-sm underline font-medium hover:font-bold"
            >
              Learn
            </a>
            <a
              href="#"
              className="text-sm underline font-medium hover:font-bold"
            >
              Order
            </a>
          </div>
        </div>
      </div>

      <div className="w-[0.0625rem] h-[10.9375rem] bg-gray-300"></div>

      <nav>
        <ul className="flex flex-col gap-[0.625rem] text-black font-medium text-sm">
          <li className="hover:underline">
            <a href="#">Charging Calculator</a>
          </li>
          <li className="hover:underline">
            <a href="#">Trip Planer</a>
          </li>
          <li className="hover:underline">
            <a href="#">Supercharger Voting</a>
          </li>
          <li className="hover:underline">
            <a href="#">Host a Supercharger</a>
          </li>
          <li className="hover:underline">
            <a href="#">Commercial Charging</a>
          </li>
          <li className="hover:underline">
            <a href="#">Host Wall Connectors</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ChargingDropdown;
