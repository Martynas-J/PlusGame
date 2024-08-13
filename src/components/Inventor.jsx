import { useRef, useState } from "react";
import WeaponCard from "./WeaponCard";
import SlideBar from "./SlideBar";

const Inventor = ({ weapons, handleSelect }) => {
  const [selectedWeaponIndex, setSelectedWeaponIndex] = useState(null);

  const handleCardClick = (weapon, index) => {
    setSelectedWeaponIndex(index);
    handleSelect(weapon, index);
  };

  return (
    <div className="bg-gray-200 p-2 rounded-lg shadow-xl flex gap-2 flex-wrap justify-center">
      <div className="text-2xl mb-4 text-center uppercase w-full">
        Inventorius
      </div>
      {weapons.map((weapon, index) => (
        <WeaponCard
          key={index}
          onClick={() => handleCardClick(weapon, index)}
          weapon={weapon}
          isSelected={selectedWeaponIndex === index}
        />
      ))}
    </div>
  );
};

export default Inventor;
