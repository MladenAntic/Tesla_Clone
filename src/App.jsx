import { useState } from "react";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import { context } from "./contexts/context";
import Product from "./components/Product";
import modelY from "./assets/modelY.avif";
import modelS from "./assets/modelS.avif";
import modelX from "./assets/modelX.avif";
import ExperienceTesla from "./sections/ExperienceTesla";
import SolarPanels from "./sections/SolarPanels";
import SolarRoof from "./sections/SolarRoof";
import Powerwall from "./sections/Powerwall";
import Accessories from "./sections/Accessories";

function App() {
  const [menu, setMenu] = useState("");

  const [section, setSection] = useState("");

  const [hoverVehicles, setHoverVehicles] = useState("");
  const [hoverEnergy, setHoverEnergy] = useState("");
  const [hoverCharging, setHoverCharging] = useState("");
  const [hoverDiscover, setHoverDiscover] = useState("");
  const [hoverShop, setHoverShop] = useState("");

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <context.Provider
        value={{
          menu,
          setMenu,
          section,
          setSection,
          hoverVehicles,
          setHoverVehicles,
          hoverEnergy,
          setHoverEnergy,
          hoverCharging,
          setHoverCharging,
          hoverDiscover,
          setHoverDiscover,
          hoverShop,
          setHoverShop,
        }}
      >
        <Header />
        <Intro />
        <Product
          background={modelY}
          title="Model Y"
          price="From $39,390*"
          tax="After Federal Tax Credit & Est. Gas Savings"
          initialPrice="*Price before incentives and savings is $50,490, excluding taxes and fees. Subject to change."
        />
        <Product
          background={modelS}
          title="Model S"
          price="From $71,090*"
          tax="After Est. Gas Savings"
          initialPrice="*Price before savings is $74,990, excluding taxes and fees. Subject to change."
        />
        <Product
          background={modelX}
          title="Model X"
          price="From $68,590*"
          tax="After Federal Tax Credit & Est. Gas Savings"
          initialPrice="**Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change."
        />
        <ExperienceTesla />
        <SolarPanels />
        <SolarRoof />
        <Powerwall />
        <Accessories />
      </context.Provider>
    </div>
  );
}

export default App;
