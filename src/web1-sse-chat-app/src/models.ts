

export interface ILoginRequest {
    name: string;
}

export interface ILoginResponse {
    userId: number;
    token: string;
}

export interface IChatApiOptions {
    baseUrl?: string;
    authToken?: string;
}

export interface IUserBase {
    id: number;
    name: string;
}

export interface IChatUser extends IUserBase {
    isSelected: boolean;
}

export interface ILoginUser extends IUserBase {
    authToken: string;
}

export interface IChatMessageOut {
    fromUserId: number;
    toUserIds: number[];
    text: string;
}

export interface IChatMessageIn extends IChatMessageOut {
    id: number;
    created: Date;
}

export interface IChatMessage extends IChatMessageIn {
    fromUserName: string;
    fromSelf: boolean;
}

export interface ISystemMessage {
    messageType: string;
    data: any;
}

export type LogSeverity = 'info' | 'warning' | 'error';

export interface ILogEntry {
    id: number;
    created: Date;
    source?: string;
    severity: string;
    message: string;
}

export interface IRequestUser {
    userId: number;
    user?: IChatUser;
}

export interface IRequestSelectedUsers {
    users: IChatUser[];
}