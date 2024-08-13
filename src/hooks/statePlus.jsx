import { probabilities } from "@/functions/probability";
import { delay } from "@/var/variables";
import { useState, useCallback } from "react";

const useStatePlus = () => {
  const [plus, setPlus] = useState(0);
  const [bestPlus, setBestPlus] = useState(0);
  const [effect, setEffect] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectCardIndex, setSelectCardIndex] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("Inventorius");

  const [money, setMoney] = useState(10);
  const [items, setItems] = useState(5);
  const [powder, setPowder] = useState(2);
  const [elixirs, setElixirs] = useState(5);
  const [pressure, setPressure] = useState(5);
  const [isotopes, setIsotopes] = useState(2);
  const [power, setPower] = useState(7);

  const [weapons, setWeapons] = useState([
    { name: "Sword", price: 5, class: "normal", plus: 0 },
    { name: "Spear", price: 5, class: "rare", plus: 0 },
    { name: "Dagger", price: 10, class: "legendary", plus: 0 },
    { name: "Staff", price: 15, class: "nova", plus: 0 },

  ]);
  const probability = probabilities(plus, weapons[selectCardIndex]?.class);

  const orSuccess = useCallback(() => {
    return Math.random() * 100 < probability;
  }, [probability]);

  const handleButtonClick = useCallback(() => {
    setLoading(true);
    const newStatus = orSuccess();
    setTimeout(() => {
      if (newStatus && selectCardIndex !== null) {
        setPlus((prev) => {
          const newPlus = prev + 1;
          if (newPlus > bestPlus) {
            setBestPlus(newPlus);
          }

          setWeapons((prevWeapons) => {
            const updatedWeapons = [...prevWeapons];
            updatedWeapons[selectCardIndex] = {
              ...updatedWeapons[selectCardIndex],
              plus: newPlus,
            };
            return updatedWeapons;
          });

          return newPlus;
        });
        setEffect("success");
      } else {
        setPlus(0);
        setWeapons((prevWeapons) => {
          const updatedWeapons = [...prevWeapons];
          updatedWeapons[selectCardIndex] = {
            ...updatedWeapons[selectCardIndex],
            plus: 0,
          };
          return updatedWeapons;
        });

        setEffect("failure");
      }
      setLoading(false);
    }, delay);
  }, [orSuccess, bestPlus, selectCardIndex]);

  return {
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
    selectedMenu,
    setSelectedMenu,
    money,
    items,
    powder,
    elixirs,
    pressure,
    isotopes,
    power,
  };
};

export default useStatePlus;
