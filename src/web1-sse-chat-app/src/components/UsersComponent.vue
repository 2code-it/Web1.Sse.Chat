<script setup lang="ts">
import { IChatUser, IRequestUser, ISystemMessage, IRequestSelectedUsers } from './../models';
import { ref, Ref, onMounted, onUnmounted, watch } from 'vue';
import { useChatApi } from './../composables/useChatApi';
import { requestSelectedUsersEventKey, requestUserEventKey, systemMessageEventKey } from './../symbols';
import { useEventBus } from '@vueuse/core';
import { useAppLogger } from '../composables/useAppLogger';
import { useStorageLogin, defaultLogin } from './../composables/useStorageLogin'

const storageLogin = useStorageLogin();
const users: Ref<IChatUser[]> = ref([]);
const { getUsers, logout } = useChatApi();
const { errorRef } = useAppLogger();
const requestUserBus = useEventBus(requestUserEventKey);
const requestSelectedUsersBus = useEventBus(requestSelectedUsersEventKey);
const systemMessageBus = useEventBus(systemMessageEventKey);


const onRequestUser = (request: IRequestUser) => {
    request.user = users.value.find(x => x.id == request.userId);
};

const onRequestSelectedUsers = (request: IRequestSelectedUsers) => {
    request.users = users.value.filter(x => x.isSelected);
};

const onSystemMessage = (message: ISystemMessage) => {
    if (!message.messageType.startsWith('User')) return;

    const userFromMessage: IChatUser = <IChatUser>message.data;
    const user = users.value.find(x => x.id == userFromMessage.id);

    switch (message.messageType) {
        case 'UserModified':
            if (user != undefined) Object.assign(user, userFromMessage);
            break;
        case 'UserRemoved':
            if (user != undefined) users.value.splice(users.value.indexOf(user), 1);
            break;
        case 'UserAdded':
            if (user == undefined) users.value.push(userFromMessage);
            break;
    }
};

const userLogout = async () => {
    await logout(storageLogin.value.id, errorRef);
    setTimeout(() => { storageLogin.value = defaultLogin; }, 500);
};

const loadUsersWhenLoggedIn = () => {
    if (storageLogin.value.id == 0) return;
    setTimeout(() => { getUsers(users, errorRef); }, 500);
};

watch(storageLogin, loadUsersWhenLoggedIn);


onMounted(() => {
    requestUserBus.on(onRequestUser);
    requestSelectedUsersBus.on(onRequestSelectedUsers);
    systemMessageBus.on(onSystemMessage);
    loadUsersWhenLoggedIn();

});

onUnmounted(() => {
    requestUserBus.off(onRequestUser);
    requestSelectedUsersBus.off(onRequestSelectedUsers);
    systemMessageBus.off(onSystemMessage);
});

</script>

<template>
    <div class="users">
        <div class="logout"><button class="pure-btn" @click="userLogout">{{ storageLogin.name }} logout</button></div>
        <div v-for="user in users" :key="user.id" @click="(_) => { user.isSelected = !user.isSelected }"
            :class="{ 'is-selected': user.isSelected }">{{ user.name }}</div>
    </div>
</template>