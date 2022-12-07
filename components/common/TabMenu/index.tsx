const TabMenuComponent = () => {
  const menus = [
    "all",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
  ];
  return (
    <>
      <div className="">
        <div className="p-4">
          <ul className="flex overflow-x-auto space-x-4 border-t py-5">
            {menus &&
              menus.length > 0 &&
              menus.map((menu, i: number) => (
                <li
                  key={i}
                  className="border border-custom_gray-100 capitalize rounded-md text-sm text-custom_gray-300 px-5 py-2 first:bg-custom_green-400 first:text-white hover:bg-custom_green-400 hover:text-white cursor-pointer"
                >
                  {menu}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TabMenuComponent;
