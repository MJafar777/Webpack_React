import { StateSchema } from 'app/providers/storeProvider';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
