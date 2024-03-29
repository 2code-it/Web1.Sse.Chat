import type { EventBusKey } from '@vueuse/core';
import { ISystemMessage, IChatMessageIn, IRequestUser, ILogEntry, IRequestSelectedUsers } from './models';


export const appLogEventKey: EventBusKey<ILogEntry> = Symbol('log-event');
export const systemMessageEventKey: EventBusKey<ISystemMessage> = Symbol('system-message-event');
export const chatMessageEventKey: EventBusKey<IChatMessageIn> = Symbol('chat-message-event');
export const requestUserEventKey: EventBusKey<IRequestUser> = Symbol('request-user-event');
export const requestSelectedUsersEventKey: EventBusKey<IRequestSelectedUsers> = Symbol('request-selected-users-event');

export const storageLoginKey = 'user-login';