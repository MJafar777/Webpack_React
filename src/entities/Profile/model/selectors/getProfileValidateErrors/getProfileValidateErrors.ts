import { StateSchema } from 'app/providers/storeProvider';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
