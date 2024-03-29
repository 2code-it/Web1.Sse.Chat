<script setup lang="ts">
import { ref, Ref, onMounted, onUnmounted } from 'vue';
import { IChatMessageIn, IChatMessage, IRequestUser } from './../models';
import { formatDate } from './../formatters';
import { chatMessageEventKey, requestUserEventKey } from './../symbols';
import { useEventBus } from '@vueuse/core';
import { useStorageLogin } from './../composables/useStorageLogin'

const storageLogin = useStorageLogin();
const messages: Ref<IChatMessage[]> = ref([]);
const chatMessageBus = useEventBus(chatMessageEventKey);
const requestUserBus = useEventBus(requestUserEventKey);

const onChatMessage = (message: IChatMessageIn) => {
    const request: IRequestUser = { userId: message.fromUserId };
    requestUserBus.emit(request);
    const newMessage: IChatMessage = { ...message, fromUserName: request.user?.name ?? '', fromSelf: storageLogin.value.id == message.fromUserId };
    messages.value.unshift(newMessage);
}

onMounted(() => {
    chatMessageBus.on(onChatMessage);
});

onUnmounted(() => {
    chatMessageBus.off(onChatMessage);
});

</script>

<template>
    <div class="messages">
        <div v-for="message in messages" :key="message.id" :class="{ 'from-self': message.fromSelf }">
            <div class="header">{{ message.fromUserName }} {{ formatDate(message.created) }}</div>
            <div class="text">{{ message.text }}</div>
        </div>
    </div>
</template>