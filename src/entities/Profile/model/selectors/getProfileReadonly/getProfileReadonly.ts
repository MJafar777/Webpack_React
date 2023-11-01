import { StateSchema } from 'app/providers/storeProvider';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
