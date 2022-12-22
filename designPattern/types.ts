import {CallStatusType, CallType, PreOfferAnswerType} from "../enum";

export type IPreOffer = {
    toId: string;
    toName: string;
    toImage: string;
    callType: CallType;
    fromId: string;
    fromName: string;
    fromImage: string;
}

export type IPreOfferAnswer = {
    fromId: string;
    toId: string;
    preOfferAnswer: PreOfferAnswerType;
}

export interface ISocketEvent{
    connection(user: any):void;
    disconnect():void;
    sendPreOffer(item:IPreOffer):void;
    sendPreOfferAnswer(item: IPreOfferAnswer):void;
    userRegistrationOnSocket(user: any):void;
}

export interface IWebRTCSignaling{
    type: string;
    answer?: string;
    offer?: any;
    candidate?: string;
    fromId: string;
    toId: string
}