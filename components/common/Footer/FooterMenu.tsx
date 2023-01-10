import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import { BiSliderAlt, BiUser } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { FooterWrap } from "./Footer.styles";

const FooterMenuComponent = () => {
  const router = useRouter();

  return (
    <>
      <FooterWrap>
        <div className="footerWrap fixed rounded-tl-xl rounded-tr-xl  left-0 w-full bottom-0 bg-custom_green-400 p-0 flex items-center justify-around">
          <Link
            href={"/settings"}
            className={router.route === "/settings" ? "active" : ""}
          >
            <div className="icon text-2xl">
              <BiSliderAlt />
            </div>
          </Link>
          <Link
            href={"/favourite"}
            className={router.route === "/favourite" ? "active" : ""}
          >
            <div className="icon text-2xl">
              <MdFavoriteBorder />
            </div>
          </Link>
          <Link href={"/"} className={router.route === "/" ? "active" : ""}>
            <div className="">
              <div className="icon text-2xl">
                <AiOutlineHome />
              </div>
            </div>
          </Link>
          <Link
            href={"/calling"}
            className={router.route === "/call" ? "active" : ""}
          >
            <div className="icon text-2xl">
              <FiPhoneCall />
            </div>
          </Link>
          <Link
            href={"/account"}
            className={router.route === "/account" ? "active" : ""}
          >
            <div className="icon text-2xl">
              <BiUser />
            </div>
          </Link>
        </div>
      </FooterWrap>
    </>
  );
};

export default FooterMenuComponent;
