import { IWebRTCSignaling } from "../../designPattern/types";

export interface IWebRtc{

    // OnIceCandidate(): void;
    OnConnectionStateChange(): void;
    ReceivingTracks(): void;
    AddTracks(localStream: MediaStream): void;
    sendWebRTCOffer(toId: string, fromId: string): Promise<IWebRTCSignaling>;

}