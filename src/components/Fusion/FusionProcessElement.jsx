import Spinner from "../Spinner";
import WeaponCard from "../WeaponCard";
import { cardFlipped } from "./cardFlipped";

const FusionProcessElement = ({
  weapons,
  selectedCards,
  setSelectedCards,
  message,
  loading,
  isSuccess,
  newCard,
}) => {
  const fusionCardClass =
    "bg-white rounded-xl shadow-xl border border-gray-300 border-4 hover:shadow-2xl transition-shadow duration-300";

    const handleClick = (index) => {
      setSelectedCards((prev) =>
        prev.filter((_, i) => i !== index)
      );
    };
    
  return (
    <div className="flex flex-col md:flex-row md:gap-1 lg:gap-2 mt-8 justify-center items-center">
      <div
        className={`${fusionCardClass} ${
          loading ? "animate-slide-down md:animate-slide-right" : ""
        }`}
      >
        {selectedCards[0] !== undefined ? (
          <WeaponCard
            weapon={weapons[selectedCards[0]]}
            onClick={() => handleClick(0)}
          />
        ) : (
          cardFlipped("Korta 1")
        )}
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
          {message && (
            <div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center  text-black font-extrabold text-4xl">
              {message}
            </div>
          )}
          {isSuccess && (
            <div className="absolute inset-0 transform -translate-x-1/3 -translate-y-1/3 flex items-center justify-center z-40 w-[250px] h-[150px] bg-gray-800/50 rounded-lg">
              {newCard && <WeaponCard weapon={newCard} />}
            </div>
          )}
        </div>
      )}
      <div
        className={`${fusionCardClass} ${
          loading ? `animate-slide-up md:animate-slide-left ` : ""
        }`}
      >
        {selectedCards[1] !== undefined ? (
          <WeaponCard weapon={weapons[selectedCards[1]]} onClick={() => handleClick(0)} />
        ) : (
          cardFlipped("Korta 2")
        )}
      </div>
    </div>
  );
};
export default FusionProcessElement;
