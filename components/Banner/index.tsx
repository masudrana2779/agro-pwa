import Image from "next/image";
import Slider from "react-slick";
import { BannerWrap } from "./banner.styled";

const BannerComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <div className="px-4 bg-white py-3 sticky top-0 z-30 border-b">
        <h1 className="flex justify-between font-semibold">
          <span className="text-xl text-gray-900 font-bold">Krishi</span>
          <span className="text-right">
            <span className="text-xl text-gray-600">Welcome</span> <br />
            <span className="text-gray-400 text-xs block">Mahadi Hasan</span>
          </span>
        </h1>
      </div>
      <div className="py-4">
        <BannerWrap className="">
          {/* <div className="flex justify-between mb-2 px-4">
            <div className={`text-lg text-green-700 font-medium`}>Krishi</div>
          </div> */}
          <Slider {...settings}>
            {[1, 1, 1, 1].map((item, i: number) => (
              <div key={i} className="">
                <div className="flex">
                  <Image
                    src={"/assets/images/banner-1.png"}
                    width={343}
                    height={213}
                    alt="banner"
                    placeholder="blur"
                    className="rounded-2xl"
                    blurDataURL={`${"/assets/images/banner-1.png"}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </BannerWrap>
      </div>
    </>
  );
};

export default BannerComponent;
