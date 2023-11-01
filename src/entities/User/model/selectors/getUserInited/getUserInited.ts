import { StateSchema } from 'app/providers/storeProvider';

export const getUserInited = (state: StateSchema) => state.user._inited;
