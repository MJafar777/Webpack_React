import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, type AppDispatch } from './config/store';
import type { StateSchema, ThunkConfig } from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type AppDispatch,
  type ThunkConfig
};
