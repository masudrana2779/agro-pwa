import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FarmingTipsWrap } from "./FarmingTips.styled";

const FarmingTipsComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <div className={`text-lg text-green-700 font-medium`}>
            Farming Tips
          </div>
          <div className={`text-sm text-gray-800 font-normal`}>
            <Link href={"/blog?title=Farming Tips"}>See all</Link>
          </div>
        </div>
        <div className="">
          <FarmingTipsWrap className="">
            <Slider {...settings}>
              {[1, 2, 3, 1, 2, 3].map((item: any, i: number) => (
                <div key={i} className="">
                  <Link href={"/blog-details?title=Tips Details"}>
                    <div className="flex">
                      <Image
                        src={`/assets/images/slider-${item}.png`}
                        width={126}
                        height={169}
                        alt="slider"
                        placeholder="blur"
                        className="w-full mx-2 rounded-2xl"
                        blurDataURL={`${`/assets/images/slider-${item}.png`}`}
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </FarmingTipsWrap>
        </div>
      </div>
    </>
  );
};

export default FarmingTipsComponent;
