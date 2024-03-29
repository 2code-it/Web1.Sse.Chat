import { appLogEventKey } from './../symbols';
import { useEventBus } from '@vueuse/core';
import { LogSeverity, ILogEntry } from '../models';
import { Ref, ref, watch } from 'vue';

const logBus = useEventBus(appLogEventKey);
const defaultSource = 'app';
let idSource = 1;

export function useAppLogger() {

    function logInfo(message: string, source = defaultSource) {
        log(message, source, 'info');
    }

    function logWarning(message: string, source = defaultSource) {
        log(message, source, 'warning');
    }

    function logError(message: string, source = defaultSource) {
        log(message, source, 'error');
    }

    function logErrorObject(errorObject: any, source = defaultSource) {
        if (errorObject ?? null == null) return;
        const message: string = typeof (errorObject) == 'string' ? <string>errorObject : errorObject?.message ?? 'Unspecified error';
        log(message, source, 'error');
    }

    function log(message: string, source = defaultSource, severity: LogSeverity = 'info', created = new Date()) {
        const entry: ILogEntry = { id: ++idSource, message, source, severity, created };
        logBus.emit(entry);
    }

    const errorRef: Ref<any> = ref();

    watch(errorRef, () => {
        logErrorObject(errorRef.value);
    });

    return {
        logInfo,
        logWarning,
        logError,
        logErrorObject,
        log,
        errorRef
    };
}