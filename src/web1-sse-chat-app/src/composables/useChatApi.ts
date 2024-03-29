
import { createFetch, CreateFetchOptions } from '@vueuse/core';
import { IChatApiOptions, ILoginRequest, ILoginResponse, IChatUser, IChatMessageOut } from '../models';
import { ref, Ref } from 'vue';


enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
};

const currentOptions: IChatApiOptions = {
    baseUrl: '',
};

function getFetchOptions(requestMethod: RequestMethod = RequestMethod.GET, body?: BodyInit): CreateFetchOptions {
    const headers: any = { 'Content-Type': 'application/json' };
    if (currentOptions.authToken != undefined) headers['Authorization'] = `Bearer ${currentOptions.authToken}`;
    return {
        baseUrl: currentOptions.baseUrl,
        options: {
            onFetchError(ctx) {
                return { error: ctx.data?.detail };
            },
        },
        fetchOptions: {
            headers: headers,
            method: requestMethod,
            body: body
        }
    }
}

export function useChatApi() {

    function configureChatApi(options: IChatApiOptions) {
        Object.assign(currentOptions, { ...currentOptions, ...options });
    }

    async function login(userName: string, errorRef: Ref<any>): Promise<ILoginResponse | null> {
        const loginRequest: ILoginRequest = { name: userName };
        const dataRef: Ref<ILoginResponse | null> = ref(null);
        await fetch<ILoginResponse>('/users/login', RequestMethod.POST, loginRequest, dataRef, errorRef);
        return dataRef.value;
    }

    async function logout(userId: number, errorRef: Ref<any>): Promise<void> {
        await fetch(`/users/${userId}`, RequestMethod.DELETE, null, null, errorRef);
    }

    async function getUsers(dataRef: Ref<IChatUser[] | null>, errorRef: Ref<any>) {
        await fetch('/users', RequestMethod.GET, undefined, dataRef, errorRef);
    }

    async function sendMessage(message: IChatMessageOut, errorRef: Ref<any>): Promise<void> {
        await fetch('/messages', RequestMethod.POST, message, null, errorRef);
    }

    async function fetch<T>(path: string, method: RequestMethod, body?: any, dataRef: Ref<T | null> | null = null, errorRef: Ref<any> | null = null) {
        const bodyString: string | undefined = body == undefined ? undefined : JSON.stringify(body);
        const fetch = createFetch(getFetchOptions(method, bodyString));
        const { data, error } = await fetch<T>(path).json<T>();
        if (dataRef != null) dataRef.value = data.value;
        if (errorRef != null) errorRef.value = error.value;
    }

    return {
        configureChatApi,
        login,
        logout,
        getUsers,
        sendMessage
    };
}