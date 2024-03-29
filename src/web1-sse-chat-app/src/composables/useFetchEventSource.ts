
import { EventSourceMessage, fetchEventSource } from "@microsoft/fetch-event-source";

interface IUseFetchEventSourceOptions {
    authToken?: string;
    baseUrl?: string;
}

const currentOptions: IUseFetchEventSourceOptions = { baseUrl: '' };

const isIsoDateString = (dateString: string): boolean => {
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(dateString);
}

const isoDateReviver = (_: any, value: any): any => {
    if (typeof (value) != 'string') return value;
    if (!isIsoDateString(value)) return value;
    return new Date(value);
}

export function useFetchEventSource() {

    function configureFetchEventSource(options: IUseFetchEventSourceOptions) {
        Object.assign(currentOptions, { ...currentOptions, ...options });
    }

    function listen<T>(path: string, signal: AbortSignal, onMessage: (message: T) => void, onError: (err: any) => void) {
        const url = `${currentOptions.baseUrl}${path}`;

        fetchEventSource(url, {
            signal: signal,
            headers: { 'Authorization': `Bearer ${currentOptions.authToken}` },
            onmessage: (message: EventSourceMessage) => {
                onMessage(<T>JSON.parse(message.data, isoDateReviver));
            },
            onerror: onError
        });
    }

    return {
        configureFetchEventSource,
        listen
    }
}