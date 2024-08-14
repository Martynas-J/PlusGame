import { useRef } from "react";
import WeaponCard from "./WeaponCard";

const SlideBar = ({ weapons, selectedWeaponIndex, handleCardClick }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  const buttonClass =
    "absolute top-1/2  z-50 transform -translate-y-1/2 px-3  text-green-950 text-8xl rounded-full  focus:outline-none";
  if (!weapons || !weapons.length) {
    return;
  }
  return (
    <div className="relative w-full ">
      <button onClick={scrollLeft} className={`${buttonClass} left-0`}>
        🢐 {/* Left arrow */}
      </button>
      <button onClick={scrollRight} className={`${buttonClass} right-0`}>
        🢒 {/* Right arrow */}
      </button>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto whitespace-nowrap p-2 flex gap-1 hide-scrollbar"
      >
        {weapons?.map((weapon, index) => (
          <WeaponCard
            key={index}
            onClick={() => handleCardClick(weapon, index)}
            weapon={weapon}
            isSelected={selectedWeaponIndex === index}
          />
        ))}
      </div>
    </div>
  );
};
export default SlideBar;
