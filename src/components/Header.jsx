const Header = ({
  money,
  items,
  powder,
  elixirs,
  pressure,
  isotopes,
  power,
}) => {
  const itemList = [
    { icon: "💰", label: "Pinigai", value: money },
    { icon: "📦", label: "Daiktai", value: items },
    { icon: "✨", label: "Milteliai", value: powder },
    { icon: "🏺", label: "Eleksyrai", value: elixirs },
    { icon: "🧬", label: "Slėgis", value: pressure },
    { icon: "💥", label: "Izotopai", value: isotopes },
    { icon: "⚡", label: "Galia", value: power },
  ];

  return (
    <div className="px-6 py-3 bg-gray-800 text-white flex flex-wrap justify-between items-center">
      {itemList.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 mb-2">
          <span className="text-lg">{item.icon}</span>
          <span className="font-semibold hidden md:inline">{item.label}:</span>
          <span>{item.value || 0}</span>
        </div>
      ))}
    </div>
  );
};

export default Header;
