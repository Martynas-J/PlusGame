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
  return (
    <div className="relative w-full ">
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 z-50 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full focus:outline-none"
      >
        &#9664; {/* Left arrow */}
      </button>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 z-50 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full focus:outline-none"
      >
        &#9654; {/* Right arrow */}
      </button>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto whitespace-nowrap p-2 flex gap-1 hide-scrollbar"
      >
        {weapons.map((weapon, index) => (
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
