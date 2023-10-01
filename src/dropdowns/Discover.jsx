import React from "react";
import "animate.css";

const DiscoverDropdown = () => {
  return (
    <div className="animate__animated animate__fadeInDown absolute top-[6rem] left-0 right-0 bg-white cursor-auto flex gap-[4.6875rem] items-start justify-center py-[6.25rem] px-[9.375rem] z-[-1] max-xl:hidden">
      <ul>
        <li className="mb-[1.5625rem] text-[#75777a] font-normal">Resources</li>

        <li className="mb-[0.625rem]">
          <a href="#">Demo Drive</a>
        </li>
        <li className="mb-[0.625rem]">
          <a href="#">Insurance</a>
        </li>
        <li className="mb-[0.625rem]">
          <a href="#">Video Guides</a>
        </li>
        <li className="mb-[0.625rem]">
          <a href="#">Customer Stories</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
      </ul>

      <ul>
        <li className="mb-[1.5625rem] text-[#75777a] font-normal">Location Services</li>

        <li className="mb-[0.625rem]">
          <a href="#">Find Us</a>
        </li>
        <li className="mb-[0.625rem]">
          <a href="#">Trip Planner</a>
        </li>
        <li className="mb-[0.625rem]">
          <a href="#">Find a Collison Center</a>
        </li>
        <li>
          <a href="#">Find a Certified Installer</a>
        </li>
      </ul>

      <ul>
        <li className="mb-[1.5625rem] text-[#75777a] font-normal">Company</li>

        <li className="mb-[0.625rem]">
          <a href="#">About</a>
        </li>
        <li className="mb-[0.625rem]">
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </ul>
    </div>
  );
};

export default DiscoverDropdown;
