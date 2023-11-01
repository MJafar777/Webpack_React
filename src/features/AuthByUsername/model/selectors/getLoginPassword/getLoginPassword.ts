import { StateSchema } from 'app/providers/storeProvider';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
