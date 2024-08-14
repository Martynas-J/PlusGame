const { default: WeaponCard } = require("../WeaponCard");

const MarketSection = ({ items, onAction, buttonText, buttonColor }) => (
  <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-4">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
      {buttonText === "Pirkti" ? "Parduodami:" : "Turimi:"}
    </h2>
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={item.id + 100000 || i}
          className="bg-gray-200 rounded-lg p-4 flex justify-between items-center"
        >
          <WeaponCard weapon={item} />
          <button
            onClick={() => onAction(item, i)}
            className={`text-white px-4 py-2 rounded-md hover:bg-opacity-80 ${buttonColor}`}
          >
            {buttonText}
          </button>
        </div>
      ))}
    </div>
  </div>
);
export default MarketSection;
