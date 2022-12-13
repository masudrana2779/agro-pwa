import Link from "next/link";

type CallChatItemProps = {
  bgColor: string;
  titleColor: string;
  paragraphColor: string;
  title: string;
  icon: any;
  paragraph: string;
  iconColor: string;
  link: string;
};

const CallChatItem = ({
  bgColor,
  titleColor,
  paragraphColor,
  title,
  icon,
  paragraph,
  iconColor,
  link
}: CallChatItemProps) => {
  return (
    <>
      <div className={`${bgColor} rounded-lg`}>
        <Link href={link} className="flex space-x-3 items-center">
          <div className="">
            <div
              className={`w-20 h-20 flex items-center justify-center text-4xl ${iconColor} opacity-60`}
            >
              {icon}
            </div>
          </div>
          <div className="">
            <div className="">
              <div className={`text-lg ${titleColor} font-medium`}>{title}</div>
              <div className={`text-sm ${paragraphColor} font-normal`}>
                {paragraph}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CallChatItem;
