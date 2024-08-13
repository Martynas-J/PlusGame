// components/Spinner.js
export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-full z-10">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
}
