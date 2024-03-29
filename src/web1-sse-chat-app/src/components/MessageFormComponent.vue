<script setup lang="ts">
import { IChatMessageOut, IRequestSelectedUsers } from './../models';
import { ref } from 'vue';
import { useChatApi } from './../composables/useChatApi';
import { useAppLogger } from '../composables/useAppLogger';
import { useStorageLogin } from './../composables/useStorageLogin'
import { useEventBus } from '@vueuse/core';
import { requestSelectedUsersEventKey } from '../symbols';

const storageLogin = useStorageLogin();
const messageText = ref('');
const { sendMessage } = useChatApi();
const { errorRef, logError } = useAppLogger();
const requestSelectedUsersBus = useEventBus(requestSelectedUsersEventKey);


const onTextEnterKeyUp = (ev: KeyboardEvent) => {
    if (ev.shiftKey) return;
    trySendMessage();
};

const trySendMessage = () => {
    if (messageText.value.length == 0) return;
    if (storageLogin.value.id == 0) {
        logError('Login user unknown');
        return;
    }
    const request: IRequestSelectedUsers = { users: [] };
    requestSelectedUsersBus.emit(request);
    const selectedUserIds = request.users.map(x => x.id);
    if (selectedUserIds.length > 0) {
        selectedUserIds.push(storageLogin.value.id);
    }

    const message: IChatMessageOut = {
        fromUserId: storageLogin.value.id,
        toUserIds: selectedUserIds,
        text: messageText.value
    };
    sendMessage(message, errorRef);
    messageText.value = '';
}

</script>

<template>
    <div class="message-form">
        <form class="pure-form" onsubmit="return false">
            <div><textarea v-model="messageText" @keyup.enter="onTextEnterKeyUp"
                    style="height: 100%; width:100%; resize: none;"></textarea></div>
            <div><input type="button" @click="trySendMessage" value="send" style="width:100%; height:100%" /></div>
        </form>
    </div>
</template>