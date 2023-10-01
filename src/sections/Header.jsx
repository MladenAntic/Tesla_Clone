import React, { useContext, useEffect, useRef, useState } from "react";
import "./Header.css";
import logoWhite from "../assets/logo-white.svg";
import logoBlack from "../assets/logo-black.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "animate.css";
import { context } from "../contexts/context";
import VehiclesDropdown from "../dropdowns/Vehicles";
import EnergyDropdown from "../dropdowns/Energy";
import ChargingDropdown from "../dropdowns/Charging";
import DiscoverDropdown from "../dropdowns/Discover";
import ShopDropdown from "../dropdowns/Shop";

const Header = () => {
  const { setMenu } = useContext(context);
  const headerLinks = useRef(null);

  const logoRef = useRef(null);
  const closeMenu = useRef(null);
  const menuBtn = useRef(null);

  const iconHelp = useRef(null);
  const iconLanguage = useRef(null);
  const iconAccount = useRef(null);

  const headerTopRef = useRef(null);
  const navRef = useRef(null);

  const icons = [iconHelp, iconLanguage, iconAccount];

  function toggleMenu() {
    document.body.style.overflow = "hidden";
    headerLinks.current.classList.add("show");
    menuBtn.current.classList.add("z-[-10]");
    setMenu("show");
  }

  useEffect(() => {
    closeMenu.current.addEventListener("click", () => {
      document.body.style.overflowY = "scroll";
      headerLinks.current.classList.remove("show");
      headerLinks.current.style.color = "white !important";
      menuBtn.current.classList.remove("z-[-10]");
      setMenu("hidden");
    });
  }, []);

  const { section } = useContext(context);

  function whiteNav() {
    headerLinks.current.style.color = "white";
    logoRef.current.src = logoWhite;
    icons.forEach((icon) => {
      icon.current.style.color = "white";
    });
  }

  function blackNav() {
    headerLinks.current.style.color = "black";
    logoRef.current.src = logoBlack;
    icons.forEach((icon) => {
      icon.current.style.color = "black";
    });
  }

  function switchSection() {
    switch (section) {
      case "Intro":
        whiteNav();
        break;
      case "Model Y":
        blackNav();
        break;
      case "Model S":
        blackNav();
        break;
      case "Model X":
        blackNav();
        break;
      case "Experience Tesla":
        whiteNav();
        break;
      case "Solar Panels":
        blackNav();
        break;
      case "Solar Roof":
        blackNav();
        break;
      case "Powerwall":
        blackNav();
        break;
      case "Accessories":
        blackNav();
        break;
    }
  }

  const { hoverVehicles } = useContext(context);
  const { setHoverVehicles } = useContext(context);
  const { hoverEnergy } = useContext(context);
  const { setHoverEnergy } = useContext(context);
  const { hoverCharging } = useContext(context);
  const { setHoverCharging } = useContext(context);
  const { hoverDiscover } = useContext(context);
  const { setHoverDiscover } = useContext(context);
  const { hoverShop } = useContext(context);
  const { setHoverShop } = useContext(context);

  useEffect(() => {
    if (
      hoverVehicles === "mouseover" ||
      hoverEnergy === "mouseover" ||
      hoverCharging === "mouseover" ||
      hoverDiscover === "mouseover" ||
      hoverShop === "mouseover"
    ) {
      headerTopRef.current.style.background = "black";
      navRef.current.style.background = "white";
      blackNav();
    } else {
      headerTopRef.current.style.background =
        "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%,rgba(65, 82, 126, 1) 15%,rgba(65, 82, 126, 1) 30%,rgba(0, 0, 0, 1) 100%)";
      navRef.current.style.background = "transparent";
      whiteNav();

      switchSection();
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1280) {
        document.body.style.overflowY = "scroll";
        headerLinks.current.classList.remove("show");
        headerLinks.current.style.color = "white !important";
        menuBtn.current.classList.remove("z-[-10]");
        setMenu("hidden");
      }
    });
  });

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[10]">
      <section
        ref={headerTopRef}
        className="header__top animate__animated animate__slideInDown text-white text-center py-[0.9375rem]"
      >
        <p className="inline-block text-[1rem] text-center tracking-wide max-sm:text-[0.75rem]">
          <span className="inline-block text-[1.125rem] font-bold tracking-wide mr-[1.25rem]">
            $7,500 Federal Tax Credit
          </span>
          Available for new Model 3, Model Y and certain Model X. Reductions to
          tax credit likely after Dec 31.
          <a
            href="#"
            className="inline-block header__details text-[1rem] tracking-wide ml-[1.25rem]"
          >
            See Details
          </a>
        </p>
      </section>

      <nav
        ref={navRef}
        className="flex items-center justify-between pt-[0.9375rem] px-[3.125rem] bg-transparent max-md:px-[1.875rem]"
      >
        <img
          ref={logoRef}
          src={logoWhite}
          alt="Tesla Logo"
          className="w-[7.8125rem] cursor-pointer"
        />

        <ul
          ref={headerLinks}
          className="header__links animate__animated animate__fadeIn text-white flex items-center gap-[1.875rem] font-bold max-xl:hidden max-xl:text-black max-xl:fixed max-xl:top-0 max-xl:left-0 max-xl:bottom-0 max-xl:right-0 max-xl:bg-white max-xl:z-100 max-xl:flex-col max-xl:gap-[1.25rem] max-xl:py-[6.25rem] max-xl:px-[1.5625rem]"
        >
          <div className="absolute top-[2.5%] right-[2.5%] cursor-pointer p-[0.3125rem] rounded-[0.3125rem] hover:bg-[#f6f6f6] hidden max-xl:block">
            <CloseIcon ref={closeMenu} />
          </div>
          <li
            onMouseOver={() => {
              setHoverVehicles("mouseover");
            }}
            onMouseOut={() => {
              setHoverVehicles("mouseout");
            }}
            className="flex items-center justify-between cursor-pointer max-xl:w-full max-xl:p-[0.625rem] max-xl:hover:bg-[#f6f6f6] max-xl:rounded-[0.3125rem]"
          >
            <a
              href="#"
              className="max-xl:text-[1.25rem] font-bold max-xl:font-medium"
            >
              Vehicles
            </a>
            <div className="hidden max-lg:block">
              <ChevronRightIcon />
            </div>

            {hoverVehicles === "mouseover" ? <VehiclesDropdown /> : <></>}
          </li>
          <li
            onMouseOver={() => {
              setHoverEnergy("mouseover");
            }}
            onMouseOut={() => {
              setHoverEnergy("mouseout");
            }}
            className="flex items-center justify-between cursor-pointer max-xl:w-full max-xl:p-[0.625rem] max-xl:hover:bg-[#f6f6f6] max-xl:rounded-[0.3125rem]"
          >
            <a
              href="#"
              className="max-xl:text-[1.25rem] font-bold max-xl:font-medium"
            >
              Energy
            </a>
            <div className="hidden max-lg:block">
              <ChevronRightIcon />
            </div>

            {hoverEnergy === "mouseover" ? <EnergyDropdown /> : <></>}
          </li>
          <li
            onMouseOver={() => {
              setHoverCharging("mouseover");
            }}
            onMouseOut={() => {
              setHoverCharging("mouseout");
            }}
            className="flex items-center justify-between cursor-pointer max-xl:w-full max-xl:p-[0.625rem] max-xl:hover:bg-[#f6f6f6] max-xl:rounded-[0.3125rem]"
          >
            <a
              href="#"
              className="max-xl:text-[1.25rem] font-bold max-xl:font-medium"
            >
              Charging
            </a>
            <div className="hidden max-lg:block">
              <ChevronRightIcon />
            </div>

            {hoverCharging === "mouseover" ? <ChargingDropdown /> : <></>}
          </li>
          <li
            onMouseOver={() => {
              setHoverDiscover("mouseover");
            }}
            onMouseOut={() => {
              setHoverDiscover("mouseout");
            }}
            className="flex items-center justify-between cursor-pointer max-xl:w-full max-xl:p-[0.625rem] max-xl:hover:bg-[#f6f6f6] max-xl:rounded-[0.3125rem]"
          >
            <a
              href="#"
              className="max-xl:text-[1.25rem] font-bold max-xl:font-medium"
            >
              Discover
            </a>
            <div className="hidden max-lg:block">
              <ChevronRightIcon />
            </div>

            {hoverDiscover === "mouseover" ? <DiscoverDropdown /> : <></>}
          </li>
          <li
            onMouseOver={() => {
              setHoverShop("mouseover");
            }}
            onMouseOut={() => {
              setHoverShop("mouseout");
            }}
            className="flex items-center justify-between cursor-pointer max-xl:w-full max-xl:p-[0.625rem] max-xl:hover:bg-[#f6f6f6] max-xl:rounded-[0.3125rem]"
          >
            <a
              href="#"
              className="max-xl:text-[1.25rem] font-bold max-xl:font-medium"
            >
              Shop
              {hoverShop === "mouseover" ? <ShopDropdown /> : <></>}
            </a>
          </li>
          <li className="hidden cursor-pointer max-xl:w-full max-xl:p-[0.625rem] max-xl:block max-lg:block max-xl:hover:bg-[#f6f6f6] max-xl:rounded-[0.3125rem]">
            <a href="#" className="max-xl:text-[1.25rem] font-medium">
              Support
            </a>
          </li>
          <li className="hidden cursor-pointer max-xl:w-full max-xl:p-[0.625rem] max-xl:flex items-center justify-between max-xl:hover:bg-[#f6f6f6] max-xl:rounded-[0.3125rem]">
            <a href="#" className="max-xl:text-[1.25rem] font-medium">
              <LanguageIcon className="inline-block mr-[0.625rem]" />
              United States
              <span className="block text-sm ml-[2.1875rem]">English</span>
            </a>
            <div className="hidden max-lg:block">
              <ChevronRightIcon />
            </div>
          </li>
          <li className="hidden cursor-pointer max-xl:w-full max-xl:p-[0.625rem] max-xl:block max-xl:hover:bg-[#f6f6f6] max-xl:rounded-[0.3125rem]">
            <a href="#" className="max-xl:text-[1.25rem] font-medium">
              <AccountCircleIcon className="inline-block mr-[0.625rem]" />
              Account
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-[0.9375rem] text-white max-xl:hidden">
          <HelpOutlineIcon ref={iconHelp} className="cursor-pointer" />
          <LanguageIcon ref={iconLanguage} className="cursor-pointer" />
          <AccountCircleIcon ref={iconAccount} className="cursor-pointer" />
        </div>

        <button
          ref={menuBtn}
          className="header__menu py-[0.3125rem] px-[0.9375rem] rounded-[0.625rem] text-white hidden max-xl:block"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Header;
