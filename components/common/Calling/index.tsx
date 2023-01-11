import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillSound } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import { MdOutlineCallEnd } from "react-icons/md";
type CallingComponentProps = {
  isConnect: boolean;
  localStream: any
  remoteStream: any
}
const CallingComponent = ({isConnect, localStream, remoteStream}: CallingComponentProps) => {
  const router = useRouter();
  return (
    <div className="w-full h-screen relative">
      <div
        style={{ height: "calc(100% - 80px)" }}
        className=" bg-gradient-to-t to-custom_green-400 from-custom_green-500"
      >
        <div className="bg-[url('/assets/images/callingBg.png')] h-full w-full  bg-no-repeat bg-center bg-cover flex items-center justify-center">
          <div className="">
            {/* after call Connected visiable */}
            {
                isConnect &&

                <div className="text-white text-base mb-5 text-center">
                  <iframe
                      style={{ width: '100%', height: '200px', display: "none" }}
                      src={'https://meet.vumi.com.bd/doctor-2-patient-1'}
                      allow="camera;microphone"
                  />
                  {/*<video*/}
                  {/*    className="videoContainer"*/}
                  {/*    ref={(video: HTMLVideoElement | null) => {*/}
                  {/*      if (video) {*/}
                  {/*        video.srcObject = localStream*/}
                  {/*      }*/}
                  {/*    }}*/}
                  {/*    autoPlay*/}
                  {/*    playsInline*/}
                  {/*    muted={true}*/}
                  {/*/>*/}
                  <b>Ahmed Reza</b>
                </div>
            }

            {/*{*/}
            {/*    isConnect && remoteStream &&*/}

            {/*    <div className="text-white text-base mb-5 text-center">*/}
            {/*      <video*/}
            {/*          className="videoContainer"*/}
            {/*          ref={(video: HTMLVideoElement | null) => {*/}
            {/*            if (video) {*/}
            {/*              video.srcObject = remoteStream*/}
            {/*            }*/}
            {/*          }}*/}
            {/*          autoPlay*/}
            {/*          playsInline*/}
            {/*          muted={true}*/}
            {/*      />*/}
            {/*      <b>Modhu</b>*/}
            {/*    </div>*/}
            {/*}*/}
            {/* after call Connected visiable */}
            <div className="flex justify-center mb-8">
              <Image
                width={90}
                height={90}
                alt={"avatar"}
                src={"/assets/images/rezaVai.jpg"}
                placeholder="blur"
                blurDataURL={"/assets/images/rezaVai.jpg"}
                className="rounded-[39px] border-2"
              />
            </div>
            <div className=" text-center">
              {/* after call Connected visiable */}
              {
                  isConnect &&
                  <>
                    <p className="text-white text-base">
                      <b>Connected</b>
                    </p>
                    {/*<p className="text-white text-base">02: 12</p>*/}
                  </>
              }
              {/* after call Connected visiable */}
              {
                  !isConnect &&

                  <>
                    <p className="text-white text-base">
                      <b>Mahadi Hasan</b>
                      <span className="mx-2">is calling</span>
                      <b>Ahmed Reza</b>
                    </p>
                  </>
              }

            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 bg-custom_green-400 py-4 left-0 w-full flex items-center justify-center space-x-5">
        <div className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-custom_green-500 text-white">
          <AiFillSound />
        </div>
        <div
          onClick={() => router.back()}
          className="cursor-pointer w-12 h-12 text-2xl rounded-full flex items-center justify-center bg-custom_green-500 text-white bg-gradient-to-t to-custom_red-300 from-custom_red-500"
        >
          <MdOutlineCallEnd />
        </div>
        <div className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-custom_green-500 text-white">
          <BsMicFill />
        </div>
      </div>
    </div>
  );
};

export default CallingComponent;
