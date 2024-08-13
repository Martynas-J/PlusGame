
export default function BeautifulButton({ color, size, handleClick, children }) {
  const colorClass = color || `bg-green-500`;
  const sizeClass = size || `text-lg`;

  return (
    <button
      onClick={handleClick}
      className={`${colorClass} ${sizeClass} text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700`}
    >
      {children}
    </button>
  );
}
