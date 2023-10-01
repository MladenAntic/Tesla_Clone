import React from "react";
import modelSMenu from "../assets/modelSMenu.avif";
import model3Menu from "../assets/model3Menu.avif";
import modelXMenu from "../assets/modelXMenu.avif";
import modelYMenu from "../assets/modelYMenu.avif";
import "animate.css";

const VehiclesDropdown = () => {
  return (
    <div className="animate__animated animate__fadeInDown absolute top-[6rem] left-0 right-0 bg-white cursor-auto flex items-start gap-[3.125rem] pt-[6.25rem] pb-[3.125rem] px-[9.375rem] z-[-1] max-xl:hidden">
      <div className="flex items-center gap-[1.5625rem] text-black">
        <div href="#" className="text-center">
          <a href="#">
            <img className="w-[12.5rem]" src={modelSMenu} alt="Model S Menu" />
          </a>
          <h3 className="text-xl font-bold">Model S</h3>
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
          <a href="#">
            <img className="w-[12.5rem]" src={model3Menu} alt="Model S Menu" />
          </a>
          <h3 className="text-xl font-bold">Model 3</h3>
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
          <a href="#">
            <img className="w-[12.5rem]" src={modelXMenu} alt="Model S Menu" />
          </a>
          <h3 className="text-xl font-bold">Model X</h3>
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
          <a href="#">
            <img className="w-[12.5rem]" src={modelYMenu} alt="Model S Menu" />
          </a>
          <h3 className="text-xl font-bold">Model Y</h3>
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

      <div className="w-[0.0625rem] h-[18.75rem] bg-gray-300"></div>

      <nav>
        <ul className="flex flex-col gap-[0.625rem] text-black font-medium text-sm">
          <li className="hover:underline">
            <a href="#">Inventory</a>
          </li>
          <li className="hover:underline">
            <a href="#">Used Cars</a>
          </li>
          <li className="hover:underline">
            <a href="#">Demo Drive</a>
          </li>
          <li className="hover:underline">
            <a href="#">Trade In</a>
          </li>
          <li className="hover:underline">
            <a href="#">Help Me Choose</a>
          </li>
          <li className="hover:underline">
            <a href="#">Compare</a>
          </li>
          <li className="hover:underline">
            <a href="#">Fleet</a>
          </li>
          <li className="hover:underline">
            <a href="#">Cybertruck</a>
          </li>
          <li className="hover:underline">
            <a href="#">Semi</a>
          </li>
          <li className="hover:underline">
            <a href="#">Roadster</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default VehiclesDropdown;
