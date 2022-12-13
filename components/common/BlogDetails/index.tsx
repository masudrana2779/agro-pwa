import Image from "next/image";

const BlogDetailsComponent = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="flex">
            <Image
              src={"/assets/images/fertilizer.png"}
              width={343}
              height={213}
              alt="banner"
              placeholder="blur"
              className="w-full"
              blurDataURL={`${"/assets/images/fertilizer.png"}`}
            />
          </div>
          <div className="p-4">
            <div className="text-base leading-5 font-medium text-black mb-2">
              Bangladesh rice farmers invent new varieties to withstand salt,
              storms.
            </div>
            <ul className="flex">
              <li className="inline-block text-[10px] font-light text-custom_gray-300 before:w-[2px] before:h-[2px] before:rounded-full before:bg-custom_gray-300 before::content-[''] before:top-[50%] before:-right-5 relative before:absolute mx-4 first:ml-0 last:before:hidden">
                Jan 3, 2022
              </li>
              <li className="inline-block text-[10px] font-light text-custom_gray-300 before:w-[2px] before:h-[2px] before:rounded-full before:bg-custom_gray-300 before::content-[''] before:top-[50%] before:-right-5 relative before:absolute mx-4 first:ml-0 last:before:hidden">
                3344 views
              </li>
            </ul>
            <div className="pt-4">
              <div className="text-sm text-custom_gray-500 leading-[22px] mb-4">
                In the 1970s, Nandi Dulal, a 70-year-old paramedic-turned-farmer
                from Mukandapur village in Satkhira{`'`}s Kaliganj upazila, bred
                25 varieties of rice with his fellow farmers.
              </div>
              <div className="text-sm text-custom_gray-500 leading-[22px] mb-4">
                {" "}
                By then, they discovered that their field was becoming saltier
                with time and that the rice field was becoming sterile.
              </div>
              <div className="text-sm text-custom_gray-500 leading-[22px] mb-4">
                {`"`}As the arable land became saltier, it hindered production
                and caused a huge loss for us, since we used to breed rice
                taking loans. For at least seven to eight months a year, the
                lands were barren. Shrimp farming has become an alternative for
                some people. Farmers have also begun growing fish by introducing
                saltwater to the land,{`"`} said Dulal.
              </div>

              <div className="text-sm text-custom_gray-500 leading-[22px] mb-4">
                Due to climate change, saltwater intrusion poses a huge problem
                for rice cultivation in Bangladesh{`'`}s coastal belt, because
                the local variety of rice is a saline-sensitive crop. Thousands
                of hectares of land have become barren in coastal Bangladesh
                because of salinity.
              </div>
              <div className="text-sm text-custom_gray-500 leading-[22px] mb-4">
                With a booming population increasing the demand for the staple,
                rice, there have also been growing calls for a salt-tolerant
                variety for the salinity-prone areas of Bangladesh.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsComponent;
