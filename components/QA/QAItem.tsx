import Image from "next/image";
import Link from "next/link";
type QAItemComponentProps = {
  imageUrl: string;
  url: string;
  title: string;
  bgGradient: string;
};
const QAItemComponent = ({
  imageUrl,
  url,
  title,
  bgGradient,
}: QAItemComponentProps) => {
  return (
    <>
      <Link
        href={url}
        className={`${bgGradient} p-4 rounded-2xl`}
      >
        <div className="ml-auto w-20 h-20 mb-5 flex items-center justify-start">
          <Image
            src={imageUrl}
            width={126}
            height={169}
            alt="fish"
            placeholder="blur"
            blurDataURL={imageUrl}
          />
        </div>
        <div className="">
          <div className="text-lg text-white font-medium"> {title}</div>
        </div>
      </Link>
    </>
  );
};

export default QAItemComponent;
