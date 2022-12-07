import { BsChatSquareText } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import CallChatItem from "./CallChatItem";

const CallChat = () => {
  return (
    <>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-5">
          <CallChatItem
            bgColor="bg-custom_green-400"
            title={"Audio Call"}
            icon={<FiPhoneCall />}
            paragraph={"Call our expert for suggestion"}
            iconColor={"text-white"}
            titleColor={"text-white"}
            paragraphColor={"text-white"}
          />
          <CallChatItem
            bgColor="bg-custom_gray-100"
            titleColor="text-custom_orange-300"
            paragraphColor="text-custom_gray-400"
            title={"Chat Now"}
            icon={<BsChatSquareText />}
            paragraph={"Chat with our expert"}
            iconColor={"text-custom_orange-300"}
          />
        </div>
      </div>
    </>
  );
};

export default CallChat;
