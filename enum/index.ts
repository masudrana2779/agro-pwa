export enum MessageType {
    SESSION_DESCRIPTION = "SESSION_DESCRIPTION",
    ICE_CANDIDATE = "ICE_CANDIDATE",
    PRESCRIPTION_RECEIVED = "PRESCRIPTION_RECEIVED",
    PRESENCE_STATUS = "PRESENCE_STATUS",
    CAll_STATUS = "CAll_STATUS",
    PATIENT = "PATIENT",
}

export enum CallStatusType {
    CALL_DOCTOR_RECEIVED = "CALL_DOCTOR_RECEIVED",
    CALL_CONNECTED = "CALL_CONNECTED",
    CALL_REJECTED = "CALL_REJECTED",
    CALL_ENDED = "CALL_ENDED",
    CALL_UNAVAILABLE = "CALL_UNAVAILABLE"
}

export enum UserType {
    USER = 1,
    KISHI_BID = 7
}

export enum activeStatus {
    ONLINE = 'online',
    OFFLINE = 'offline',
    BUSY = 'busy',
    RINGING = 'ringing',
    CONNECTED = 'connected',
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    SPAM = 'spam',
    ABUSE = 'abuse',
    DROPPED = 'dropped',
    CS_QUERY = 'cs_query',
    SAVE_DRAFT = 'save_draft',
    COMPLETED = 'completed',
}

export enum Channel {
    WEB = 'web',
    IOS = 'ios',
    ANDROID = 'android'
}

export enum preOfferAnswer {
    CALLEE_NOT_FOUND = "CALLEE_NOT_FOUND",
    CALL_ACCEPTED = "CALL_ACCEPTED",
    CALL_REJECTED = "CALL_REJECTED",
    CALL_UNAVAILABLE = "CALL_UNAVAILABLE",
    CALLEE_NO_ANSWER = "CALLEE_NO_ANSWER",
    CALL_HANGED_UP = "CALL_HANGED_UP",
    CALL_ENDED = "CALL_ENDED",
    VIDEO_OFF='VIDEO_OFF',
    VIDEO_ON='VIDEO_ON',
}

export enum ImageBaseUrl {
    cmsBaseUrl = 'https://cms.medico.bio/uploaded/'
}

export enum CallType {
    CHAT_PERSONAL_CODE = "CHAT_PERSONAL_CODE",
    VIDEO_PERSONAL_CODE = "VIDEO_PERSONAL_CODE",
}

export enum webRTCSignaling {
    OFFER = "OFFER",
    ANSWER = "ANSWER",
    ICE_CANDIDATE = "ICE_CANDIDATE"
}

export enum pageRedirect {
    LOGIN = 99,
    PROFILE_UPDATE = 100,
}

export enum PreOfferAnswerType {
    CALLEE_NOT_FOUND = 'CALLEE_NOT_FOUND',
    CALL_ACCEPTED = 'CALL_ACCEPTED',
    CALL_REJECTED = 'CALL_REJECTED',
    CALL_UNAVAILABLE = 'CALL_UNAVAILABLE',
    CALLEE_NO_ANSWER = 'CALLEE_NO_ANSWER',
    CALL_HANGED_UP = 'CALL_HANGED_UP',
    CALL_ENDED = 'CALL_ENDED',
    VIDEO_OFF='VIDEO_OFF',
    VIDEO_ON='VIDEO_ON',
}

export enum socketListener {
    CONNECT = 'connect',
    USER_SESSION = 'user_session',
    PRE_OFFER = 'pre-offer',
    PRE_OFFER_ANSWER = 'pre-offer-answer',
    USER_HANGED_UP = 'user-hanged-up',
    CHAT_MESSAGE = 'chat-message',
    DISCONNECT = 'disconnect'
}
