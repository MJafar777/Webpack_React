import { StateSchema } from 'app/providers/storeProvider';

export const getCounter = (state: StateSchema) => state.counter;
