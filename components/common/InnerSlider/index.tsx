import Image from "next/image";
import Slider from "react-slick";

const InnerSliderComponent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <div className="p-4">
        <div className="mb-3">
          <div className="text-lg font-medium text-black">Featured</div>
        </div>
        <div className="">
          <Slider {...settings}>
            {[1, 1, 1, 1].map((item, i: number) => (
              <div className="px-2" key={i}>
                <div className="flex mb-3">
                  <Image
                    src={"/assets/images/innerSlider-1.png"}
                    width={343}
                    height={213}
                    alt="banner"
                    placeholder="blur"
                    className="rounded-2xl"
                    blurDataURL={`${"/assets/images/innerSlider-1.png"}`}
                  />
                </div>
                <div className="">
                  <div className="text-base font-medium text-black mb-1">
                    Bangladesh rice farmers invent new varieties to withstand
                    salt, storms.
                  </div>
                  <ul className="flex">
                    <li className="inline-block text-[10px] font-light text-custom_gray-300 before:w-[2px] before:h-[2px] before:rounded-full before:bg-custom_gray-300 before::content-[''] before:top-[50%] before:-right-5 relative before:absolute mx-4 first:ml-0 last:before:hidden">
                      Jan 3, 2022
                    </li>
                    <li className="inline-block text-[10px] font-light text-custom_gray-300 before:w-[2px] before:h-[2px] before:rounded-full before:bg-custom_gray-300 before::content-[''] before:top-[50%] before:-right-5 relative before:absolute mx-4 first:ml-0 last:before:hidden">
                      3344 views
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default InnerSliderComponent;
