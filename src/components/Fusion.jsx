import { useState } from "react";
import SlideBar from "./SlideBar";
import WeaponCard from "./WeaponCard";
import Spinner from "./Spinner";

const Fusion = ({ weapons, selectCardIndex, handleCardClick }) => {
  const [selectedCards, setSelectedCards] = useState([0, 1]);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSelectCard = (weapon, index) => {
    setSelectedCards((prev) => {
      if (prev.includes(index)) {
        return prev;
      }
      if (prev.length < 2) {
        return [index, ...prev];
      }
      return [index, prev[0]];
    });
    handleCardClick(weapon, index);
  };

  const handleFusion = () => {
    setIsSuccess(false);
    setLoading(true);
    setTimeout(() => {
     // setIsSuccess(true);
    }, 500);
    setTimeout(() => {
      if (selectedCards.length === 2) {
        const [weapon1, weapon2] = selectedCards.map((index) => weapons[index]);
        console.log("Fusing:", weapon1, weapon2);
      } else {
        console.log("Please select exactly two cards to fuse.");
      }
      setLoading(false);
    }, 1500);
  };
  const fusionCardClass =
    " bg-white rounded-xl shadow-xl border border-gray-300 border-4 hover:shadow-2xl transition-shadow duration-300";
  return (
    <div className=" ">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight text-center">
        SULIEJIMAS
      </h1>
      <div className=" bg-gradient-to-b from-gray-400 to-gray-100 flex flex-col items-center rounded-md">
        <SlideBar
          weapons={weapons}
          selectedWeaponIndices={selectCardIndex}
          handleCardClick={handleSelectCard}
        />
        <div className="flex flex-col md:flex-row md:gap-1 lg:gap-2 mt-8 justify-center items-center ">
          <div
            className={`${fusionCardClass} ${
              loading ? "animate-slide-down md:animate-slide-right" : ""
            }`}
          >
            <WeaponCard weapon={weapons[selectedCards[0]]} />
          </div>
          {!loading ? (
            <div className="text-3xl h-16 w-16 flex items-center justify-center">
              &#128171;
            </div>
          ) : (
            <div className="z-10 relative">
              <div className="relative">
                <Spinner />
              </div>
              {isSuccess && (
                <div className="absolute inset-0 transform -translate-x-1/3 -translate-y-1/3 flex items-center justify-center z-50 w-[250px]  h-[150px] bg-gray-800/50 rounded-lg">
                  <WeaponCard weapon={weapons[selectedCards[1]]} />
                </div>
              )}
            </div>
          )}

          <div
            className={`${fusionCardClass} ${
              loading ? `animate-slide-up md:animate-slide-left ` : ""
            }`}
          >
            <WeaponCard weapon={weapons[selectedCards[1]]} />
          </div>
        </div>
        <button
          onClick={handleFusion}
          disabled={loading}
          className= {`w-52 h-11 flex justify-center items-center  mt-8 px-3 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 transition-colors duration-300`}
        >
          {!loading ? (
            <span className="flex items-center gap-1">
              <span className="text-2xl ">&#128171;</span> Fuse Weapons
            </span>
          ) : (
            <span>Vykdoma!!!</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Fusion;
