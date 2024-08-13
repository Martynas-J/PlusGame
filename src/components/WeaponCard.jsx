const WeaponCard = ({ onClick, weapon, isSelected }) => {
  const cardsStyles = {
    normal: "text-gray-800 font-normal ",
    rare: "text-yellow-400 font-extrabold ",
    epic: "text-purple-600 font-extrabold ",
    legendary: "text-orange-600 font-extrabold ",
    nova: "text-blue-600 font-extrabold ",
    weaponNormal: "bg-white",
    weaponRare: "bg-yellow-400",
    weaponEpic: "bg-purple-600 text-white",
    weaponLegendary: "bg-orange-600 text-white",
    weaponNova: "bg-blue-600 text-white",
    plus5: "text-green-300 font-bold text-md",
    plus6: "text-red-700 font-bold text-md",
    plus7: "text-blue-900 font-bold text-md",
    plus8:
      "bg-gradient-to-r from-gray-300 via-blue-400 to-indigo-500 text-white font-bold text-md",
    plus9:
      "text-md bg-gradient-to-r from-green-300 via-teal-400 to-blue-500 text-gray-800 font-bold",
    plus10:
      "bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white font-bold text-xl",
    plus11:
      "bg-gradient-to-r from-pink-400 via-red-500 to-yellow-600 text-white font-bold text-xl",
    plus12:
      "bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 text-white font-bold text-xl",
    plus13:
      "bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 text-white font-bold text-2xl",
    plus14:
      "bg-gradient-to-r from-yellow-400 via-yellow-400-500 to-red-600 text-white font-bold text-2xl",
    plus15:
      "bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 text-blue-800 font-bold text-2xl",
    plus16:
      "bg-gradient-to-r from-green-400 via-blue-800 to-purple-600 text-white font-bold text-2xl",
  };

  const getWeaponClass = (weaponClass) => {
    switch (weaponClass) {
      case "rare":
        return cardsStyles.weaponRare;
      case "epic":
        return cardsStyles.weaponEpic;
      case "legendary":
        return cardsStyles.weaponLegendary;
      case "nova":
        return cardsStyles.weaponNova;
      default:
        return cardsStyles.weaponNormal;
    }
  };

  const getPlusClass = (plusValue) => {
    if (plusValue >= 16) return cardsStyles.plus16;
    if (plusValue >= 15) return cardsStyles.plus15;
    if (plusValue >= 14) return cardsStyles.plus14;
    if (plusValue >= 13) return cardsStyles.plus13;
    if (plusValue >= 12) return cardsStyles.plus12;
    if (plusValue >= 11) return cardsStyles.plus11;
    if (plusValue >= 10) return cardsStyles.plus10;
    if (plusValue >= 9) return cardsStyles.plus9;
    if (plusValue >= 8) return cardsStyles.plus8;
    if (plusValue >= 7) return cardsStyles.plus7;
    if (plusValue >= 6) return cardsStyles.plus6;
    if (plusValue >= 5) return cardsStyles.plus5;
    return "";
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-2 w-[220px] rounded-lg shadow-2xl cursor-pointer ${
        getWeaponClass(weapon.class)} ${isSelected ? "shadow_green" : "opacity-95"}`}
    >
      <div
        className={`p-2 w-full rounded-lg flex justify-between items-center ${getPlusClass(
          weapon.plus
        )}`}
      >
        <div>
          <div className={`text-xl text-center`}>{weapon.name}</div>
          <div className="bg-white rounded-md p-2 shadow-md">
            <div className={`text-sm text-gray-800`}>Kaina: {weapon.price}</div>
            <div className={`text-sm text-gray-800`}>
              Klasė:{" "}
              <span className={cardsStyles[weapon.class]}>{weapon.class}</span>
            </div>
          </div>
        </div>
        <div className={`font-bold`}>+ {weapon.plus}</div>
      </div>
    </div>
  );
};

export default WeaponCard;
