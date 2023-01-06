import {io, Socket} from 'socket.io-client';

import {socketListener} from '../enum';
import {IPreOffer, IPreOfferAnswer, ISocketEvent, IWebRTCSignaling} from "./types";

export class SocketIO implements ISocketEvent {

    public socket: Socket;
    private static instance: SocketIO;
    private socketId = '';

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     * http://localhost:3599
     */

    // private constructor() {
    //     console.log('constructor........')
    //     this.socket = io('http://localhost:3599', {
    //         withCredentials: true,
    //         extraHeaders: {    "my-custom-header": "abcd"  }
    //     });
    // }

    //https://socket.theroyalsoft.com
    // http://localhost:3005
    private constructor() {
        this.socket = io('https://socket.theroyalsoft.com', {
            withCredentials: true
            // extraHeaders: {   "Access-Control-Allow-Origin":'true'  }
        });
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): SocketIO {
        if (!SocketIO.instance) {
            SocketIO.instance = new SocketIO();
        }
        return SocketIO.instance;
    }

    connection(user: any): void {
        this.socket.connect();
        this.socket.off(socketListener.CONNECT)
        this.socket.on(socketListener.CONNECT, () => {
            this.socketId = this.socket.id;
            user.socketId = this.socketId;
            this.socket.emit(socketListener.USER_SESSION, JSON.stringify(user));
        });
    }

    sendPreOffer(item: IPreOffer): void {
        this.socket.emit(socketListener.PRE_OFFER, item);
    }

    sendPreOfferAnswer(item: IPreOfferAnswer): void {
        this.socket.emit(socketListener.PRE_OFFER_ANSWER, JSON.stringify(item));
    }

    userRegistrationOnSocket(user: any): void {
        this.socket.emit(socketListener.USER_SESSION, JSON.stringify(user));
    }

    sendDataUsingWebRTCSignaling(data: IWebRTCSignaling): void {
        console.log(data);
        this.socket.emit("webRTC-signaling", JSON.stringify(data));
    }

    disconnect(): void {
        this.socket.disconnect();
        this.socket.on(socketListener.DISCONNECT, (reason) => {
            if (reason === 'io server disconnect') {
                // the disconnection was initiated by the server, you need to reconnect manually
                this.socket.connect();
            }
        });
    }


}
