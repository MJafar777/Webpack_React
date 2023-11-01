import { StateSchema } from 'app/providers/storeProvider';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
