import { StateSchema } from 'app/providers/storeProvider';

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
