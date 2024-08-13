import Button from "./Button";
const SideMenu = ({handlerMenu}) => {
  return (
    <div className="p-2 bg-white rounded-md flex flex-col gap-3  w-full sm:w-1/4">
      <div className="uppercase text-center ">Veiksmai</div>
      <div className="w-full flex flex-col gap-2">
        {["Inventorius", "Plius", "Turgus", "Suliejimas"].map((menu, index) => {
          return (
            <Button
              key={index}
              color="bg-gray-700"
              handleClick={() => handlerMenu(menu)}
            >
              {menu}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
export default SideMenu;
