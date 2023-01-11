import Image from "next/image";
import { FaMicrophone } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import InnerHeaderComponent from "../InnerHeader";
import {SocketIO} from "../../../designPattern/SocketIO";
import {useCallback, useEffect, useRef, useState} from "react";
import {socketListener} from "../../../enum";
import moment from "moment";

type ChatBoxProps = {
  id?: string;
  authSession: any;
  messages: any[]
  getMsg: () => void;
};
const ChatBox = ({ authSession, messages, getMsg }: ChatBoxProps) => {
  const bottomRef = useRef<any>(null);
  const [inputData, setInputData] = useState<string>('');
  const socket = SocketIO.getInstance();
  socket && !socket.socket.id && socket.connection(authSession);

  useEffect(()=>{
    socket.socket.on(socketListener.CHAT_MESSAGE, data => {
      let offerData: any = JSON.parse(data);
      localStorage.setItem('msg', JSON.stringify(messages.concat(offerData)));
       getMsg();
    })
  }, [messages, socket.socket])

  const scrollToBottom = () => {
    bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
  }

  const sendData = useCallback(async ()=>{
    let toId = authSession.phoneNumber === '01710575743' ? '01717677540':'01710575743';
    let senderImageUrl = authSession.profilePhoto;
    let receiverImageUrl = authSession.phoneNumber === '01710575743' ? '/assets/images/mh.jpg':'/assets/images/rezaVai.jpg';
    let fromId = authSession.phoneNumber;
    let body = inputData;
    let createdDate = new Date();
    let msg = {toId, fromId, body, senderImageUrl, receiverImageUrl, createdDate}
    await setInputData('')
    await socket.socket.emit(socketListener.CHAT_MESSAGE, JSON.stringify(msg));
    await scrollToBottom();
    await localStorage.setItem('msg', JSON.stringify(messages.concat(msg)));
    await getMsg();
  },[authSession.phoneNumber, inputData, messages, socket.socket, getMsg])

  return (
    <>
      <InnerHeaderComponent />
      <div className="w-full transition-all duration-300">
        <div className="">
          <div className="py-4 pb-0">
            <div className="overflow-hidden overflow-y-auto px-4">
              {messages.length > 0 && messages.map((item, i) => (
                      <div key={i} className={`mb-5 flex ${item.toId === authSession.phoneNumber ? 'justify-start text-left': 'justify-end text-right'}`}>
                        <div className="flex space-x-2 items-start">
                          <div className="">
                            <div className="flex w-10">
                              <Image
                                  className="rounded-full"
                                  src={item.toId === authSession.phoneNumber ? item.senderImageUrl : authSession.profilePhoto}
                                  width={40}
                                  height={40}
                                  alt="profile"
                              />
                            </div>
                          </div>
                          <div className="">
                            <div className="relative mb-1 inline-block text-black rounded-lg bg-gray-300 py-2 px-4">
                              {item.body}
                              <div
                                  className="absolute top-0 -left-[6px]  h-0 w-0 border-t-8 border-r-8 border-l-8 border-t-gray-300 border-r-gray-300 border-l-transparent"></div>
                            </div>
                            <div className="text-[12px] text-gray-400">
                              {moment(item.createdDate).startOf('day').fromNow()}
                            </div>
                          </div>
                        </div>
                      </div>
                  )
              )
              }
            </div>

            <div className="sticky bottom-0 bg-white z-50 p-4 border-t border-t-gray-300">
              <div className="">
                <div className="flex space-x-4">
                  <div style={{ float:"left", clear: "both" }}
                       ref={(el) => bottomRef}>
                  </div>
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
                        value={inputData}
                        onChange={e => setInputData(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="">
                    <button onClick={()=> sendData()} className="flex h-12 w-12 items-center justify-center rounded-lg bg-custom_green-400 p-2 text-2xl text-white hover:bg-orange-500">
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
