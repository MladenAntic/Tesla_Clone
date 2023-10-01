import React from "react";
import charging from "../assets/charging.avif";
import vehicleAccessories from "../assets/vehicleAccessories.avif";
import apparel from "../assets/apparel.avif";
import lifestyle from "../assets/lifestyle.avif";

const ShopDropdown = () => {
  return (
    <div className="animate__animated animate__fadeInDown absolute top-[6rem] left-0 right-0 bg-white cursor-auto flex items-center justify-center gap-[3.125rem] pt-[6.25rem] pb-[3.125rem] px-[9.375rem] z-[-1] max-xl:hidden">
      <a href="#" className="flex flex-col items-center justify-center">
        <img className="w-[12.5rem]" src={charging} alt="Charging" />
        <h3 className="text-xl mt-[0.3125rem]">Charging</h3>
      </a>

      <a href="#" className="flex flex-col items-center justify-center">
        <img
          className="w-[12.5rem]"
          src={vehicleAccessories}
          alt="Vehicle Accessories"
        />

        <h3 className="text-xl mt-[0.3125rem]">Vehicle Accessories</h3>
      </a>

      <a href="#" className="flex flex-col items-center justify-center">
        <img className="w-[12.5rem]" src={apparel} alt="Apparel" />
        <h3 className="text-xl mt-[0.3125rem]">Apparel</h3>
      </a>

      <a href="#" className="flex flex-col items-center justify-center">
        <img className="w-[12.5rem]" src={lifestyle} alt="Lifestyle" />
        <h3 className="text-xl mt-[0.3125rem]">Lifestyle</h3>
      </a>
    </div>
  );
};

export default ShopDropdown;
