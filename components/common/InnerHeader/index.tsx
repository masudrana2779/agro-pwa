import { BsBellFill } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";

const InnerHeaderComponent = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-custom_green-400 py-1 px-2">
        <div className="w-10 h-10 flex justify-center items-center">
          <div className="text-white text-3xl">
            <BiLeftArrowAlt />
          </div>
        </div>
        <div className="">
          <div className="text-lg font-medium text-white">Q&A (Fish)</div>
        </div>
        <div className="w-10 h-10 flex justify-center items-center">
          <div className="text-white relative">
            <BsBellFill />
            <span className="absolute -top-1 -right-1 w-3 h-3 flex items-center justify-center text-white font-normal text-[8px] bg-custom_red-500 rounded-full">
              1
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerHeaderComponent;
