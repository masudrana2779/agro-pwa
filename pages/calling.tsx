import CallingComponent from "../components/common/Calling";
import {NextPage} from "next";
import WithAuth from "../HOC/withAuth";
import {SocketIO} from "../designPattern/SocketIO";
import {useEffect, useState} from "react";
import {CallType, preOfferAnswer, socketListener, webRTCSignaling} from "../enum";
import {configuration} from "../designPattern/WebRTCHandler";
import {IWebRTCSignaling} from "../designPattern/types";

const Calling: NextPage = ({authSession}: any) => {
    const [peerConnection, setPeerConnection] = useState<RTCPeerConnection>();
    const [isConnect, setIsConnect] = useState<boolean>(false)
    const [localStream, setLocalStream] = useState<any>(undefined);
    const [remoteList, setRemoteList] = useState<any>('');
    const socket = SocketIO.getInstance();
    socket && socket.socket.id === undefined && socket.connection(authSession);


    const createPc = async (fromId: string, toId: string) => {
        const peer: RTCPeerConnection = new RTCPeerConnection(configuration);
        const localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
        await localStream.getTracks().forEach(track => peer.addTrack(track, localStream));
        await setLocalStream(localStream);
        console.log(fromId, toId)
        peer.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
            if (event.candidate) {
                // send our ice candidates to other peer
                console.log('sending Ice',fromId, toId,)
                socket.sendDataUsingWebRTCSignaling({
                    type: webRTCSignaling.ICE_CANDIDATE,
                    candidate: JSON.stringify({
                        sdp: event.candidate.candidate,
                        sdpMid: event.candidate.sdpMid,
                        sdpMLineIndex: event.candidate.sdpMLineIndex
                    }),
                    fromId,
                    toId,
                })
            }
        };

        Object.keys(socket).length > 0 && socket.socket.on("webRTC-signaling", async (data: any) => {
            let webRtcSignal: IWebRTCSignaling = JSON.parse(data.toString());
            if (webRtcSignal.type === webRTCSignaling.OFFER) {
                console.log('Offer received',webRtcSignal);
                await peer.setRemoteDescription({
                    type: 'offer',
                    sdp: webRtcSignal.offer
                });

                const remoteStream = new MediaStream();
                peer.ontrack = async (event: RTCTrackEvent) => {
                    console.log(event.track);
                    await remoteStream.addTrack(event.track);
                    await setRemoteList(remoteStream);
                };
                const answer:any = await peer.createAnswer();
                await peer.setLocalDescription(answer);
                socket.sendDataUsingWebRTCSignaling({
                    type: webRTCSignaling.ANSWER,
                    answer: answer.sdp,
                    toId,
                    fromId
                });

            }



            if (webRtcSignal.type === webRTCSignaling.ICE_CANDIDATE) {
                console.log('ICE received',webRtcSignal);
                try {
                    peer.addIceCandidate({
                        candidate: JSON.parse(webRtcSignal.candidate as string).sdp,
                        sdpMid: JSON.parse(webRtcSignal.candidate as string).sdpMid,
                        sdpMLineIndex: JSON.parse(webRtcSignal.candidate as string).sdpMLineIndex,
                    });
                } catch (err) {
                    console.error("error occurred when trying to add received ice candidate", err
                    );
                }
            }
        });
    }



    useEffect(()=>{
        socket.socket.on(socketListener.PRE_OFFER_ANSWER, (data: any) => {
            let offerData: any = JSON.parse(data);
            if(offerData.preOfferAnswer === preOfferAnswer.CALL_ACCEPTED) {
                setIsConnect(true)
                createPc('01717677540',offerData.fromId)
            }
        })
        socket.sendPreOffer({
            toId: '01710575743',
            toName: 'Ahmed Reza',
            toImage: 'kk',
            fromName: 'mahadi hasan',
            fromId: '01717677540',
            fromImage: 'nnn',
            callType: CallType.VIDEO_PERSONAL_CODE
        })
    },[socket])
  return (
    <>
        <CallingComponent localStream={localStream} isConnect={isConnect} remoteStream={remoteList} />
    </>
  );
}

export default WithAuth(Calling);
