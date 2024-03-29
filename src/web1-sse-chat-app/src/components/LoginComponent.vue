<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAppLogger } from './../composables/useAppLogger';
import { useChatApi } from '../composables/useChatApi';
import { ILoginUser } from '../models';
import { useStorageLogin } from './../composables/useStorageLogin'

const storageLogin = useStorageLogin();

const { login } = useChatApi();
const { errorRef } = useAppLogger();
const userName = ref('');
const isVisible = computed(() => {
    return storageLogin.value.id == 0;
});

const tryLogin = async () => {
    const loginResponse = await login(userName.value, errorRef);
    if (loginResponse != null) {
        const loginUser: ILoginUser = { name: userName.value, id: loginResponse.userId, authToken: loginResponse.token };
        storageLogin.value = loginUser;
    }
};

</script>

<template>
    <div class="overlay" v-if="isVisible">
        <form class="pure-form login" onsubmit="return false">
            <input type="text" v-model="userName" placeholder="user name" @keydown.enter="tryLogin"
                style="width: 96%" />
            <input type="button" @click="tryLogin" value="login" class="pure-button pure-button-primary" />
        </form>
    </div>
</template>