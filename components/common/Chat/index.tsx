import Image from "next/image";
import { FaMicrophone } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import InnerHeaderComponent from "../InnerHeader";

type ChatBoxProps = {
  id?: string;
};
const ChatBox = ({ id }: ChatBoxProps) => {
  return (
    <>
      <InnerHeaderComponent />
      <div className="w-full transition-all duration-300">
        <div className="">
          <div className="py-4 pb-0">
            <div
              className="overflow-hidden overflow-y-auto px-4 flex flex-col-reverse"
              style={{ height: "calc(100vh - 145px)" }}
            >
              <div className="mb-5 flex justify-start text-left">
                <div className="flex space-x-2 items-start">
                  <div className="flex">
                    <Image
                      className="rounded-full"
                      src={"/assets/images/profile.png"}
                      width={40}
                      height={40}
                      alt="profile"
                    />
                  </div>
                  <div className="">
                    <div className="relative mb-1 inline-block text-black rounded-lg bg-gray-300 py-2 px-4">
                      Hello
                      <div className="absolute top-0 -left-[6px]  h-0 w-0 border-t-8 border-r-8 border-l-8 border-t-gray-300 border-r-gray-300 border-l-transparent"></div>
                    </div>
                    <div className="text-[12px] text-gray-400">
                      Today, 2:01pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 flex justify-start text-left">
                <div className="flex space-x-2 items-start">
                  <div className="">
                    <div className="flex w-10">
                      <Image
                        className="rounded-full"
                        src={"/assets/images/profile.png"}
                        width={40}
                        height={40}
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="relative mb-1 inline-block text-black rounded-lg bg-gray-300 py-2 px-4">
                      I am feeling fever I am feeling fever I am feeling fever I
                      am feeling fever I am feeling fever I am feeling fever
                      <div className="absolute top-0 -left-[6px]  h-0 w-0 border-t-8 border-r-8 border-l-8 border-t-gray-300 border-r-gray-300 border-l-transparent"></div>
                    </div>
                    <div className="text-[12px] text-gray-400">
                      Today, 2:01pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 flex justify-end text-right">
                <div className="">
                  <div className="relative mb-1 inline-block rounded-lg bg-custom_green-400 py-2 px-4 text-white">
                    Hello .....
                    <div className="absolute bottom-0 -right-[6px] h-0  w-0 border-b-8 border-r-8 border-l-8 border-b-custom_green-400 border-l-custom_green-400 border-r-transparent"></div>
                  </div>
                  <div className="text-[12px] text-gray-400">Today, 2:01pm</div>
                </div>
              </div>
              <div className="mb-5 flex justify-end text-right">
                <div className="">
                  <div className="relative mb-1 inline-block rounded-lg bg-custom_green-400 py-2 px-4 text-white">
                    <audio controls>
                      <source src="/assets/images/audio.ogg" type="audio/ogg" />
                      <source
                        src="/assets/images/audio.mp3"
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                    <div className="absolute bottom-0 -right-[6px] h-0  w-0 border-b-8 border-r-8 border-l-8 border-b-custom_green-400 border-l-custom_green-400 border-r-transparent"></div>
                  </div>
                  <div className="text-[12px] text-gray-400">Today, 2:01pm</div>
                </div>
              </div>
              <div className="mb-5 flex justify-end text-right">
                <div className="">
                  <div className="relative mb-1 inline-block rounded-lg bg-custom_green-400 py-2 px-4 text-white">
                    What is the temparature ?
                    <div className="absolute bottom-0 -right-[6px] h-0  w-0 border-b-8 border-r-8 border-l-8 border-b-custom_green-400 border-l-custom_green-400 border-r-transparent"></div>
                  </div>
                  <div className="text-[12px] text-gray-400">Today, 2:01pm</div>
                </div>
              </div>
              <div className="mb-5 flex justify-start text-left">
                <div className="flex space-x-2 items-start">
                  <div className="flex">
                    <Image
                      className="rounded-full"
                      src={"/assets/images/profile.png"}
                      width={40}
                      height={40}
                      alt="profile"
                    />
                  </div>
                  <div className="">
                    <div className="relative mb-1 inline-block text-black rounded-lg bg-gray-300 py-2 px-4">
                      Hello
                      <div className="absolute top-0 -left-[6px]  h-0 w-0 border-t-8 border-r-8 border-l-8 border-t-gray-300 border-r-gray-300 border-l-transparent"></div>
                    </div>
                    <div className="text-[12px] text-gray-400">
                      Today, 2:01pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 flex justify-start text-left">
                <div className="flex space-x-2 items-start">
                  <div className="">
                    <div className="flex w-10">
                      <Image
                        className="rounded-full"
                        src={"/assets/images/profile.png"}
                        width={40}
                        height={40}
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="relative mb-1 inline-block text-black rounded-lg bg-gray-300 py-2 px-4">
                      I am feeling fever I am feeling fever I am feeling fever I
                      am feeling fever I am feeling fever I am feeling fever
                      <div className="absolute top-0 -left-[6px]  h-0 w-0 border-t-8 border-r-8 border-l-8 border-t-gray-300 border-r-gray-300 border-l-transparent"></div>
                    </div>
                    <div className="text-[12px] text-gray-400">
                      Today, 2:01pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 flex justify-end text-right">
                <div className="">
                  <div className="relative mb-1 inline-block rounded-lg bg-custom_green-400 py-2 px-4 text-white">
                    Hello .....
                    <div className="absolute bottom-0 -right-[6px] h-0  w-0 border-b-8 border-r-8 border-l-8 border-b-custom_green-400 border-l-custom_green-400 border-r-transparent"></div>
                  </div>
                  <div className="text-[12px] text-gray-400">Today, 2:01pm</div>
                </div>
              </div>
              <div className="mb-5 flex justify-end text-right">
                <div className="">
                  <div className="relative mb-1 inline-block rounded-lg bg-custom_green-400 py-2 px-4 text-white">
                    What is the temparature ?
                    <div className="absolute bottom-0 -right-[6px] h-0  w-0 border-b-8 border-r-8 border-l-8 border-b-custom_green-400 border-l-custom_green-400 border-r-transparent"></div>
                  </div>
                  <div className="text-[12px] text-gray-400">Today, 2:01pm</div>
                </div>
              </div>{" "}
              <div className="mb-5 flex justify-start text-left">
                <div className="flex space-x-2 items-start">
                  <div className="flex">
                    <Image
                      className="rounded-full"
                      src={"/assets/images/profile.png"}
                      width={40}
                      height={40}
                      alt="profile"
                    />
                  </div>
                  <div className="">
                    <div className="relative mb-1 inline-block text-black rounded-lg bg-gray-300 py-2 px-4">
                      Hello
                      <div className="absolute top-0 -left-[6px]  h-0 w-0 border-t-8 border-r-8 border-l-8 border-t-gray-300 border-r-gray-300 border-l-transparent"></div>
                    </div>
                    <div className="text-[12px] text-gray-400">
                      Today, 2:01pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 flex justify-start text-left">
                <div className="flex space-x-2 items-start">
                  <div className="">
                    <div className="flex w-10">
                      <Image
                        className="rounded-full"
                        src={"/assets/images/profile.png"}
                        width={40}
                        height={40}
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="relative mb-1 inline-block text-black rounded-lg bg-gray-300 py-2 px-4">
                      <div className="grid grid-cols-4 gap-2">
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
                      <div className="absolute top-0 -left-[6px]  h-0 w-0 border-t-8 border-r-8 border-l-8 border-t-gray-300 border-r-gray-300 border-l-transparent"></div>
                    </div>
                    <div className="text-[12px] text-gray-400">
                      Today, 2:01pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed w-full left-0 bottom-0 bg-white z-50 p-4 border-t border-t-gray-300">
              <div className="">
                <div className="flex space-x-4">
                  <div className="w-full">
                    <label className="relative block">
                      <span className="absolute inset-y-0 right-0 flex items-center space-x-2 pl-2 pr-2">
                        <span className=" cursor-pointer text-lg text-orange-600">
                          <FaMicrophone />
                        </span>
                        <span className=" rotate-45 cursor-pointer text-xl text-orange-600">
                          <IoMdAttach />
                        </span>
                      </span>
                      <input
                        className="block h-12 w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-16 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 sm:text-sm"
                        placeholder="Your Message..."
                        type="text"
                        name="search"
                      />
                    </label>
                  </div>
                  <div className="">
                    <button className="flex h-12 w-12 items-center justify-center rounded-lg bg-custom_green-400 p-2 text-2xl text-white hover:bg-orange-500">
                      <SiMinutemailer />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
