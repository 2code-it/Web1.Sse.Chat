<script setup lang="ts">
import LoginComponent from './components/LoginComponent.vue';
import MessageFormComponent from './components/MessageFormComponent.vue';
import MessagesComponent from './components/MessagesComponent.vue';
import UsersComponent from './components/UsersComponent.vue';
import AppLogComponent from './components/AppLogComponent.vue';

import { useChatApi } from './composables/useChatApi';
import { useFetchEventSource } from './composables/useFetchEventSource';
import { ILoginUser, IChatMessageIn, ISystemMessage } from './models';
import { onMounted, watch } from 'vue';
import { useAppLogger } from './composables/useAppLogger';
import { chatMessageEventKey, systemMessageEventKey } from './symbols';
import { useEventBus } from '@vueuse/core';
import { useStorageLogin } from './composables/useStorageLogin'

const storageLogin = useStorageLogin();
const { configureChatApi } = useChatApi();
const { listen, configureFetchEventSource } = useFetchEventSource();

if (import.meta.env.DEV) {
  configureChatApi({ baseUrl: 'http://localhost:5180' });
  configureFetchEventSource({ baseUrl: 'http://localhost:5180' });
}


const { logErrorObject } = useAppLogger();
let sseAbortController: AbortController | undefined;
const chatMessageEventBus = useEventBus(chatMessageEventKey);
const systemMessageEventBus = useEventBus(systemMessageEventKey);

const onError = (err: any) => {
  logErrorObject(err);
};

const onChatMessage = (message: IChatMessageIn) => {
  chatMessageEventBus.emit(message);
};

const onSystemMessage = (message: ISystemMessage) => {
  systemMessageEventBus.emit(message);
};


const configureWithLogin = (loginUser: ILoginUser) => {
  if (loginUser.id == 0) {
    sseAbortController?.abort();
  }
  else {
    configureFetchEventSource({ authToken: loginUser.authToken });
    configureChatApi({ authToken: loginUser.authToken });
    sseAbortController = new AbortController();
    listen<IChatMessageIn>(`/sse/ChatMessage?userId=${loginUser.id}`, sseAbortController.signal, onChatMessage, onError);
    listen<ISystemMessage>('/sse/SystemMessage', sseAbortController.signal, onSystemMessage, onError);
  }
};

watch(storageLogin, () => {
  configureWithLogin(storageLogin.value);
});

onMounted(() => {
  configureWithLogin(storageLogin.value);
});

</script>

<template>
  <div class="main">
    <AppLogComponent />
    <MessagesComponent />
    <UsersComponent />
    <MessageFormComponent />
    <LoginComponent />
  </div>
</template>