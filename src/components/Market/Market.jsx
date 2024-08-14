import React, { useState } from "react";
import WeaponCard from "../WeaponCard"; // Įsitikinkite, kad turite WeaponCard komponentą
import MarketSection from "./MarketSection";

const Market = ({
  weapons,
  setWeapons,
  money,
  powder,
  elixirs,
  pressure,
  isotopes,
  power,
  marketItems,
  setMarketItems,
  setMoney,
  setPowder,
  setElixirs,
  setPressure,
  setIsotopes,
  setPower,
}) => {
  const handleBuy = (weapon) => {
    if (window.confirm("Ar tikrai norite nusipirkti šį ginklą?")) {
      if (money >= weapon.price) {
        setMoney(money - weapon.price);
        setWeapons((prev) => [...prev, weapon]);
        setMarketItems((prev) => prev.filter((w) => w.id !== weapon.id));
      } else {
        alert("Nepakanka pinigų");
      }
    }
  };

  const handleSell = (weapon, index) => {
    if (window.confirm("Ar tikrai norite parduoti?")) {
      setMoney(money + weapon.price);
      setWeapons((prev) => prev.filter((_, i) => i !== index));
      setMarketItems((prev) => [...prev, weapon]);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">
        Turgus
      </h1>
      <div className="flex flex-col md:flex-row md:justify-around md:gap-4">
        <MarketSection
          items={marketItems}
          onAction={handleBuy}
          buttonText="Pirkti"
          buttonColor="bg-blue-500 hover:bg-blue-600"
        />
        <MarketSection
          items={weapons}
          onAction={handleSell}
          buttonText="Parduoti"
          buttonColor="bg-red-500 hover:bg-red-600"
        />
      </div>
    </div>
  );
};

export default Market;
