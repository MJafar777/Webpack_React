import { StateSchema } from 'app/providers/storeProvider';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
