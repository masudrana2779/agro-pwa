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
      <div className="py-4">
        <BannerWrap className="">
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
