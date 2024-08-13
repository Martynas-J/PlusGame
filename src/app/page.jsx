"use client";

import Header from "@/components/Header";
import useStatePlus from "../hooks/statePlus";
import Inventor from "@/components/Inventor";
import Plus from "@/components/Plus";
import SideMenu from "@/components/SideMenu";
import Fusion from "@/components/Fusion";
import Market from "@/components/Market";

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
    setSelectedMenu,
    selectedMenu,
    money,
    items,
    powder,
    elixirs,
    pressure,
    isotopes,
    power,
  } = useStatePlus();

  const handleSelect = (item, index = 0) => {
    setSelectCardIndex(index);
    setPlus(item.plus);
  };

  const handlerMenu = (menuItem) => {
    setSelectedMenu(menuItem);
  };

  const success = effect === "success";
  const failure = effect === "failure";

  return (
    <div>
      <Header
        money={money}
        items={items}
        powder={powder}
        elixirs={elixirs}
        pressure={pressure}
        isotopes={isotopes}
        power={power}
      />
      <main className="flex flex-col-reverse sm:flex-row gap-2 md:gap-3 lg:gap-4 xl:gap-6 justify-center p-1 sm:p-8 bg-gray-100">
        <div className="flex flex-col w-full sm:w-3/4">
          {selectedMenu === "Inventorius" && (
            <Inventor weapons={weapons} handleSelect={handleSelect} />
          )}
          {selectedMenu === "Plius" && (
            <Plus
              bestPlus={bestPlus}
              success={success}
              failure={failure}
              plus={plus}
              loading={loading}
              handleButtonClick={handleButtonClick}
              selectCardIndex={selectCardIndex}
              weapons={weapons}
              handleCardClick={handleSelect}
            />
          )}
          {selectedMenu === "Turgus" && <Market />}
          {selectedMenu === "Suliejimas" && (
            <Fusion
              selectCardIndex={selectCardIndex}
              weapons={weapons}
              handleCardClick={handleSelect}
            />
          )}
        </div>
        <SideMenu handlerMenu={handlerMenu} />
      </main>
    </div>
  );
}
