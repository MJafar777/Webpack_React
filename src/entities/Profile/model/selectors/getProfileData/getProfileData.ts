import { StateSchema } from 'app/providers/storeProvider';

export const getProfileData = (state: StateSchema) => state.profile?.data;
