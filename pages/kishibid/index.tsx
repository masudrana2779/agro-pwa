import {NextPage} from "next";
import withAuth from "../../HOC/withAuth";
import {SocketIO} from "../../designPattern/SocketIO";
import {useCallback, useEffect, useState} from "react";
import {preOfferAnswer, PreOfferAnswerType, socketListener, webRTCSignaling} from "../../enum";
import {configuration} from "../../designPattern/WebRTCHandler";
import {IWebRTCSignaling} from "../../designPattern/types";
const Dashboard: NextPage = ({authSession}: any) => {
    const [localStream, setLocalStream] = useState<any>(undefined);
    const [peerConnection, setPeerConnection] = useState<RTCPeerConnection>();
    const [remoteList, setRemoteList] = useState<any>('');
    const [isAudioMute, setIsAudioMute] = useState<boolean>(false);
    const [isVideoMute, setIsVideoMute] = useState<boolean>(false);
    const [isSpeakerMute, setIsSpeakerMute] = useState<boolean>(false);
    const [caller, setCaller] = useState<any>(null);
    const socket = SocketIO.getInstance();
    socket && !socket.socket.id && socket.connection(authSession);

    const createPc = async (fromId: string, toId: string) => {
        const peer: RTCPeerConnection = new RTCPeerConnection(configuration);
        const localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
        await localStream.getTracks().forEach(track => peer.addTrack(track, localStream));
        await setLocalStream(localStream);
        peer.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
            if (event.candidate) {
                // send our ice candidates to other peer
                socket.sendDataUsingWebRTCSignaling({
                    type: webRTCSignaling.ICE_CANDIDATE,
                    candidate: JSON.stringify({
                        sdp: event.candidate.candidate,
                        sdpMid: event.candidate.sdpMid,
                        sdpMLineIndex: event.candidate.sdpMLineIndex
                    }),
                    fromId,
                    toId,
                    answer: ''
                })
            }
        };

        peer.onnegotiationneeded = async (event: Event) => {
            const offer = await peer.createOffer();
            await peer.setLocalDescription(offer);
            console.log(offer)
            await socket.sendDataUsingWebRTCSignaling({
                type: webRTCSignaling.OFFER,
                offer: offer.sdp,
                toId,
                fromId
            });
        };

        Object.keys(socket).length > 0 && socket.socket.on("webRTC-signaling", (data: any) => {
            let webRtcSignal: IWebRTCSignaling = JSON.parse(data.toString())
            if (webRtcSignal.type === webRTCSignaling.ANSWER) {
                peer.setRemoteDescription({
                    type: 'answer',
                    sdp: webRtcSignal.answer
                }).then((r: void) => console.log("r", r)).catch((e: any) => console.log("e", e));
                const remoteStream = new MediaStream();
                peer.ontrack = async (event: RTCTrackEvent) => {
                    await remoteStream.addTrack(event.track);
                    await setRemoteList(remoteStream);
                };
            }

            if (webRtcSignal.type === webRTCSignaling.ICE_CANDIDATE) {
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

        setPeerConnection(peer);
    }
    useEffect(()=>{
        socket.socket.on(socketListener.PRE_OFFER, (data: any) => {
            setCaller(data)
        })
    }, [socket.socket])

    const callAccept = useCallback(async () => {
        caller && socket && socket.socket.id && socket.sendPreOfferAnswer({
            fromId: caller.toId,
            toId: '01717677540',
            preOfferAnswer: PreOfferAnswerType.CALL_ACCEPTED
        })
        await createPc(caller.toId, '01717677540')
    },[caller, socket])

    return (
        <div className="mt-4">
            <h1 className="text-center font-sans">
                {authSession.name}
            </h1>
            <hr/>
            {caller && (
                <>
                    <h2>Incoming call from {caller.fromName}</h2>
                    {
                        localStream && <video
                            className="videoContainer"
                            ref={(video: HTMLVideoElement | null) => {
                                if (video) {
                                    video.srcObject = localStream
                                }
                            }}
                            autoPlay
                            playsInline
                            muted={true}
                        />
                    }
<br/>
                    {
                        remoteList && <video
                            className="videoContainer"
                            ref={(video: HTMLVideoElement | null) => {
                                if (video) {
                                    video.srcObject = remoteList
                                }
                            }}
                            autoPlay
                            playsInline
                            muted={true}
                        />
                    }
                    <button onClick={() => callAccept()}
                        className="bg-blue-500 text-white text-2xl font-semibold pt-1 pr-2 pl-2 pb-1 mt-3 rounded hover:bg-blue-900">Call
                        Accept</button>
                </>

            )
            }

        </div>
    )
}

export default withAuth(Dashboard);