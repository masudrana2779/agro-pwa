import Image from "next/image";
import Link from "next/link";
import {useGetCategoriesQuery} from "../../../redux/reducer/category/query";
import {useGetBlogsQuery} from "../../../redux/reducer/blog/query";

type TabMenuComponentProps = {
  grid?: boolean;
};

const TabMenuComponent = ({ grid }: TabMenuComponentProps) => {
  const {data: categories} = useGetCategoriesQuery();
  const {data: blogs} = useGetBlogsQuery();

  return (
    <>
      <div className="">
        <div className="p-4">
          <ul className="flex overflow-x-auto space-x-4 border-t py-5">
            <li
                className="border border-custom_gray-100 capitalize rounded-md text-sm text-custom_gray-300 px-5 py-2 first:bg-custom_green-400 first:text-white hover:bg-custom_green-400 hover:text-white cursor-pointer"
            >
              All
            </li>
            {categories &&
                categories.length > 0 &&
                categories.map((category, i: number) => (
                <li
                  key={i}
                  className="border border-custom_gray-100 capitalize rounded-md text-sm text-custom_gray-300 px-5 py-2 first:bg-custom_green-400 first:text-white hover:bg-custom_green-400 hover:text-white cursor-pointer"
                >
                  {category.name}
                </li>
              ))}
          </ul>
          <div className={`${grid ? "grid grid-cols-2 pt-2 gap-4" : "pt-2"}`}>
            {blogs && blogs.map((blog: any, i: number) => (
              <div key={i} className="mb-4">
                <div className={`${grid ? "" : "flex space-x-3"}`}>
                  <Link
                    href={`/blog-details?title=Details ${i}`}
                    className=""
                  >
                    <div className={`flex ${grid ? " w-full" : "w-24"}`}>
                      <Image
                        src={"/assets/images/qa-1.png"}
                        width={`${grid ? 156 : 97}`}
                        height={`${grid ? 191 : 79}`}
                        alt="banner"
                        placeholder="blur"
                        className="rounded-xl w-full"
                        blurDataURL={`${"/assets/images/qa-1.png"}`}
                      />
                    </div>
                  </Link>
                  <div className="">
                    <div className="pt-1">
                      <div className="text-sm leading-[18px] font-medium text-black mb-2">
                        <Link
                          href={`/blog-details?title=Details ${i}`}
                          className=""
                        >
                          {blog.title}
                        </Link>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabMenuComponent;
