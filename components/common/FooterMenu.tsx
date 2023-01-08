import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BiSliderAlt, BiUser } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";

const FooterMenuComponent = () => {
  return (
    <>
      <div className="sticky bottom-0 bg-custom_green-400 p-4 flex items-center justify-between">
        <Link href={"/settings"} className="group">
          <div className="flex justify-center text-white opacity-60 group-hover:opacity-100 text-2xl mb-1">
            <BiSliderAlt />
          </div>
          <div className="text-sm text-white opacity-60 group-hover:opacity-100 font-light">
            Settings
          </div>
        </Link>
        <Link href={"/"} className="group">
          <div className="flex justify-center text-white opacity-60 group-hover:opacity-100 text-2xl mb-1">
            <MdFavoriteBorder />
          </div>
          <div className="text-sm text-white opacity-60 group-hover:opacity-100 font-light">
            Favourite
          </div>
        </Link>
        <Link href={"/"} className="group">
          <div className="flex justify-center text-white opacity-100 group-hover:opacity-100 text-2xl mb-1">
            <AiFillHome />
          </div>
          <div className="text-sm text-white opacity-100 group-hover:opacity-100 font-light">
            Home
          </div>
        </Link>
        <Link href={"/"} className="group">
          <div className="flex justify-center text-white opacity-60 group-hover:opacity-100 text-2xl mb-1">
            <BiUser />
          </div>
          <div className="text-sm text-white opacity-60 group-hover:opacity-100 font-light">
            Profile
          </div>
        </Link>
        <Link href={"/"} className="group">
          <div className="flex justify-center text-white opacity-60 group-hover:opacity-100 text-2xl mb-1">
            <GiWallet />
          </div>
          <div className="text-sm text-white opacity-60 group-hover:opacity-100 font-light">
            Account
          </div>
        </Link>
      </div>
    </>
  );
};

export default FooterMenuComponent;
