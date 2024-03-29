<script setup lang="ts">
import { onMounted, onUnmounted, ref, Ref } from 'vue';
import { appLogEventKey } from './../symbols'
import { useEventBus } from '@vueuse/core';
import { ILogEntry } from './../models';
import { formatDate } from './../formatters';

const appLogBus = useEventBus(appLogEventKey);
const logEntries: Ref<ILogEntry[]> = ref([]);

const addLogEntry = (entry: ILogEntry) => {
    logEntries.value.unshift(entry);
};

onMounted(() => {
    appLogBus.on(addLogEntry);
});

onUnmounted(() => {
    appLogBus.off(addLogEntry);
});

</script>

<template>
    <div class="app-log">
        <div v-for="entry in logEntries" :key="entry.id" :class="entry.severity">
            <span>{{ formatDate(entry.created) }}</span>
            <span>{{ entry.source }}</span>
            <span>{{ entry.message }}</span>
        </div>
    </div>
</template>