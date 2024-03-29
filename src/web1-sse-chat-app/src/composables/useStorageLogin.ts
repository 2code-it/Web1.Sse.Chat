import { ILoginUser } from '../models';
import { storageLoginKey } from '../symbols';
import { RemovableRef, useSessionStorage } from '@vueuse/core';

export const defaultLogin: ILoginUser = { id: 0, name: '', authToken: '' };

export function useStorageLogin(): RemovableRef<ILoginUser> {
    return useSessionStorage<ILoginUser>(storageLoginKey, defaultLogin);
}