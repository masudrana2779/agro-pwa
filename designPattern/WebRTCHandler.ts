import {webRTCSignaling} from "../enum";
import {IWebRtc} from "../interfaces/rtc/IWebRtc";
import {IWebRTCSignaling} from "./types";


export const configuration = {
    sdpSemantics:'unified-plan',
    iceServers: [{
        urls: ['stun:getcoturn.apigate.pro']
    }, {
        username: "root",
        credential: "live@#01",
        urls: [
            "turn:getcoturn.apigate.pro:3478",
            "turn:getcoturn.apigate.pro:3479",
            "turn:getcoturn.apigate.pro:5349",
            "turn:getcoturn.apigate.pro:5350"
        ]
    }]
};

export class WebRTCHandler implements IWebRtc {

    private static instance: WebRTCHandler;
    public peerConnection: RTCPeerConnection;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {
        console.log('constructor........ WebRTCHandler')
        this.peerConnection = new RTCPeerConnection(configuration);
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): WebRTCHandler {
        if (!WebRTCHandler.instance) {
            console.log("new instance WebRTCHandler")
            WebRTCHandler.instance = new WebRTCHandler();
        }
        return WebRTCHandler.instance;
    }

    AddTracks(localStream: MediaStream): void {
        for (const track of localStream.getTracks()) {
            this.peerConnection.addTrack(track, localStream);
        }
    }

    OnConnectionStateChange(): void {
        this.peerConnection.onconnectionstatechange = (event: Event) => {
            if (this.peerConnection.connectionState === "connected") {
                console.log("connected")
            }
        };
    }

    OnIceCandidate2(fromId: string, toId: string, socket: any): void {
        this.peerConnection.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
            if (event.candidate) {
                // send our ice candidates to other peer
                console.log("ice",event.candidate);
              //  socket.sendDataUsingWebRTCSignaling({type: webRTCSignaling.ICE_CANDIDATE, candidate:event.candidate, toId,fromId})

            }
        };
    }

    ReceivingTracks(): any {
        const remoteStream = new MediaStream();
        this.peerConnection.ontrack = (event: RTCTrackEvent) => {
            remoteStream.addTrack(event.track);
        };
        return remoteStream;
    }

    async sendWebRTCOffer(fromId: string, toId: string): Promise<IWebRTCSignaling> {
        let offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        return {
            type: webRTCSignaling.OFFER,
            offer: offer.sdp,
            toId,
            fromId
        };
    }

    async sendWebRTCAnswer(toId: string, fromId: string, offer: any): Promise<IWebRTCSignaling> {

        await this.peerConnection.setRemoteDescription(offer);
        const answer: any = await this.peerConnection.createAnswer();
        await this.peerConnection.setLocalDescription(answer);
        console.log("ff",answer)

        return {
            type: webRTCSignaling.ANSWER,
            answer,
            toId,
            fromId
        };
    }

    setRemoteDesc(data:any) {
        data.answer && this.peerConnection.setRemoteDescription({type:'answer', sdp:data.answer}).then(r=>console.log("r",r)).catch(e=>console.log("e",e));
    };



}