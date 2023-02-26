import Link from "next/link";
import QAItemComponent from "./QAItem";

const QAComponent = () => {
  const data = [
    {
      imageUrl: "/assets/images/fish.png",
      url: "/blog",
      title: "fish",
      bgGradient: "bg-gradient-to-r from-violet-700 to-violet-300",
    },
    {
      imageUrl: "/assets/images/Plant.png",
      url: "/blog",
      title: "Plant",
      bgGradient: "bg-gradient-to-r from-green-700 to-green-300",
    },
    {
      imageUrl: "/assets/images/cow.png",
      url: "/blog",
      title: "Cattle",
      bgGradient: "bg-gradient-to-r from-yellow-600 to-yellow-300",
    },
    {
      imageUrl: "/assets/images/pngwing.png",
      url: "/blog1",
      title: "Fruits",
      bgGradient: "bg-gradient-to-r from-red-600 to-red-300",
    },
  ];
  return (
    <>
      <div className="p-4">
        <div className="">
          <div className="flex justify-between mb-2">
            <div className={`text-lg text-green-700 font-medium`}>Q&A</div>
            <div className={`text-sm text-gray-800 font-normal`}>
              <Link href={"/blog1?title=Q A"}>See all</Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            {data &&
              data.length > 0 &&
              data.map((item: any, i: number) => (
                <QAItemComponent
                  imageUrl={item.imageUrl}
                  url={`${item.url}?title=${item.title}`}
                  title={item.title}
                  bgGradient={item.bgGradient}
                  key={i}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QAComponent;
