import { useState } from "react";
import SlideBar from "../SlideBar";
import { orSuccess } from "@/functions/probability";
import { classOrder } from "@/var/variables";
import FusionProcessElement from "./FusionProcessElement";

const Fusion = ({ weapons, setWeapons, selectCardIndex, handleCardClick }) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [newCard, setNewCard] = useState();
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const getNextClass = (currentClass) => {
    const currentIndex = classOrder.indexOf(currentClass);
    return currentIndex < classOrder.length - 1
      ? classOrder[currentIndex + 1]
      : currentClass;
  };

  const handleSelectCard = (weapon, index) => {
    const currentClass =
      selectedCards.length > 0 ? weapons[selectedCards[0]].class : null;
    const currentName =
      selectedCards.length > 0 ? weapons[selectedCards[0]].name : null;

    if (
      (currentClass && weapon.class !== currentClass) ||
      (currentName && weapon.name !== currentName)
    ) {
      setSelectedCards([index]);
      return;
    }

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
    setNewCard("");
    setLoading(true);
    setTimeout(() => {
      if (
        orSuccess(
          weapons[selectedCards[0]]?.plus +
            weapons[selectedCards[1]]?.plus +
            10,
          weapons[selectedCards[0]]?.class,
          2
        )
      ) {
        const newWeapon = {
          name: weapons[selectedCards[0]].name,
          class: getNextClass(weapons[selectedCards[0]].class),
          plus: 0,
          price: weapons[selectedCards[0]].price * 10,
        };

        setTimeout(() => {
          setWeapons((prev) => [...prev, newWeapon]);
        }, 1000);
        setIsSuccess(true);
        setNewCard(newWeapon);
        setMessage("Nauja Korta");
      } else {
        setNewCard("");
        setMessage("Nepavyko");
      }
    }, 500);
    setTimeout(() => {
      setWeapons((prevWeapons) =>
        prevWeapons.filter((_, index) => !selectedCards.includes(index))
      );
      setLoading(false);
      setSelectedCards([]);
      setNewCard("");
      setMessage("");
    }, 1500);
  };

  const sortWeaponsByName = (weapons) => {
    return weapons.slice().sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <div className="">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight text-center">
        SULIEJIMAS
      </h1>
      <div className="bg-gradient-to-b from-gray-400 to-gray-100 flex flex-col items-center rounded-md">
        <SlideBar
          weapons={sortWeaponsByName(weapons)}
          selectedWeaponIndex={selectCardIndex}
          handleCardClick={handleSelectCard}
        />
        <FusionProcessElement
          weapons={weapons}
          selectedCards={selectedCards}
          message={message}
          loading={loading}
          isSuccess={isSuccess}
          newCard={newCard}
          setSelectedCards={setSelectedCards}
        />
        <button
          onClick={handleFusion}
          disabled={loading || !selectedCards[1]}
          className={`w-52 h-11 flex justify-center items-center mt-8 px-3 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 transition-colors duration-300`}
        >
          {!loading ? (
            <span className="flex items-center gap-1">
              <span className="text-2xl ">&#128171;</span> Sulieti
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
