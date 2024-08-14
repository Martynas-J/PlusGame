"use client";

import Header from "@/components/Header";
import useStatePlus from "../hooks/statePlus";
import Inventor from "@/components/Inventor";
import Plus from "@/components/Plus";
import SideMenu from "@/components/SideMenu";
import Fusion from "@/components/Fusion/Fusion";
import Market from "@/components/Market/Market";

export default function Home() {
  const {
    plus,
    setPlus,
    bestPlus,
    effect,
    loading,
    handleButtonClick,
    selectCardIndex,
    setSelectCardIndex,
    weapons,
    setWeapons,
    setSelectedMenu,
    selectedMenu,
    money,
    items,
    powder,
    elixirs,
    pressure,
    isotopes,
    power,
    marketItems,
    setMarketItems,
    setMoney,
    setItems,
    setPowder,
    setElixirs,
    setPressure,
    setIsotopes,
    setPower,
  } = useStatePlus();

  const allProps = {
    plus,
    setPlus,
    bestPlus,
    effect,
    loading,
    handleButtonClick,
    selectCardIndex,
    setSelectCardIndex,
    weapons,
    setWeapons,
    setSelectedMenu,
    selectedMenu,
    money,
    items,
    powder,
    elixirs,
    pressure,
    isotopes,
    power,
    marketItems,
    setMarketItems,
    setMoney,
    setItems,
    setPowder,
    setElixirs,
    setPressure,
    setIsotopes,
    setPower,
  };

  const handleSelect = (item, index = 0) => {
    setSelectCardIndex(index);
    setPlus(item.plus);
  };

  const handlerMenu = (menuItem) => {
    setSelectedMenu(menuItem);
  };

  return (
    <div>
      <Header {...allProps} />
      <main className="flex flex-col-reverse sm:flex-row gap-2 md:gap-3 lg:gap-4 xl:gap-6 justify-center p-1 sm:p-8 bg-gray-100">
        <div className="flex flex-col w-full sm:w-3/4">
          {selectedMenu === "Inventorius" && (
            <Inventor weapons={weapons} handleSelect={handleSelect} />
          )}
          {selectedMenu === "Plius" && (
            <Plus {...allProps} handleCardClick={handleSelect} />
          )}
          {selectedMenu === "Turgus" && <Market {...allProps} />}
          {selectedMenu === "Suliejimas" && (
            <Fusion {...allProps} handleCardClick={handleSelect} />
          )}
        </div>
        <SideMenu handlerMenu={handlerMenu} />
      </main>
    </div>
  );
}
