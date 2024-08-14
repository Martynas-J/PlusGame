import WeaponCard from "./WeaponCard";
import Spinner from "./Spinner";
import Button from "../components/Button";
import SlideBar from "./SlideBar";

const Plus = ({
  bestPlus,
  selectCardIndex,
  plus,
  loading,
  handleButtonClick,
  weapons,
  handleCardClick,
  effect,
}) => {
  const success = effect === "success";
  const failure = effect === "failure";

  const cardsStyles = {
    container: "bg-white shadow-lg rounded-lg p-6  ",
    title: "text-2xl font-bold text-gray-800 mb-2",
    value: "text-4xl font-extrabold text-gray-900",
    status:
      "w-24 h-24 flex items-center justify-center text-xl font-bold rounded-full mb-4",
    success: "bg-green-500 text-white",
    failure: "bg-red-500 text-white",
    neutral: "bg-gray-200 text-black",
    plusContainer: "px-4 py-2 text-center mb-4",
    plus: "text-3xl font-bold mb-2",
    probability: "text-xl text-gray-600",
    buttonContainer: "flex justify-center mb-4",
    weaponsContainer: "",
    weaponsTitle: "",
    weaponCard: "",
    weaponName: "",
    weaponDetails: "",
    normal: "text-gray-800 font-normal ",
    rare: "text-yellow-400 font-extrabold ",
    epic: "text-purple-600 font-extrabold ",
    legendary: "text-orange-600 font-extrabold ",
    nova: "text-blue-600 font-extrabold ",
  };
  return (
    <div className="w-full ">
      <SlideBar
        weapons={weapons}
        selectedWeaponIndex={selectCardIndex}
        handleCardClick={handleCardClick}
      />
      <div className={cardsStyles.container}>
        <div>
          <div className="mb-4">
            <div className={cardsStyles.title}>Didžiausias plius</div>
            <div className={cardsStyles.value}>{bestPlus}</div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:justify-around ">
            <div
              className={`${cardsStyles.status} ${
                success
                  ? cardsStyles.success
                  : failure
                  ? cardsStyles.failure
                  : cardsStyles.neutral
              }`}
            >
              {success ? "Sekmė" : failure ? "Nesekmė" : ""}
            </div>

            {(selectCardIndex || selectCardIndex === 0) && (
              <div className="w-44">
                <WeaponCard weapon={weapons[selectCardIndex]} />
              </div>
            )}
          </div>
          <div className={cardsStyles.plusContainer}>
            <div className={cardsStyles.plus}>+ {plus}</div>
            <div className={cardsStyles.probability}></div>
          </div>
          <div className={cardsStyles.buttonContainer}>
            {loading ? (
              <Spinner />
            ) : (
              <Button size="text-xl" handleClick={handleButtonClick}>
                Pliusinti
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plus;
