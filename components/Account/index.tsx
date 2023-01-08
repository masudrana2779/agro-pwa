import Image from "next/image";
import BannerComponent from "../Banner";
import CallChat from "../CallChat";

const AccountComponent = () => {
  return (
    <>
      <div className="min-h-screen">
        <BannerComponent />
        <CallChat />
        <div className="p-4">
          <div className={`text-lg text-green-700 font-medium`}>
            Your Documents
          </div>
          <div className="py-4">
            <div className="">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex">
                  <Image
                    className="rounded-lg"
                    src={"/assets/images/img-2.png"}
                    width={68}
                    height={68}
                    alt="profile"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="rounded-lg"
                    src={"/assets/images/img-2.png"}
                    width={68}
                    height={68}
                    alt="profile"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="rounded-lg"
                    src={"/assets/images/img-2.png"}
                    width={68}
                    height={68}
                    alt="profile"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="rounded-lg"
                    src={"/assets/images/img-2.png"}
                    width={68}
                    height={68}
                    alt="profile"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="rounded-lg"
                    src={"/assets/images/img-2.png"}
                    width={68}
                    height={68}
                    alt="profile"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="rounded-lg"
                    src={"/assets/images/img-2.png"}
                    width={68}
                    height={68}
                    alt="profile"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="rounded-lg"
                    src={"/assets/images/img-2.png"}
                    width={68}
                    height={68}
                    alt="profile"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="rounded-lg"
                    src={"/assets/images/img-2.png"}
                    width={68}
                    height={68}
                    alt="profile"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="rounded-lg"
                    src={"/assets/images/img-2.png"}
                    width={68}
                    height={68}
                    alt="profile"
                  />
                </div>
                <div className="flex">
                  <Image
                    className="rounded-lg"
                    src={"/assets/images/img-1.png"}
                    width={68}
                    height={68}
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountComponent;
