import { $api } from 'shared/api/api';
import { To } from 'react-router-dom';
import { userReducer } from 'myEntities/User';
import { type NavigateOptions } from 'react-router';
import { counterReducer } from 'myEntities/Counter';
import {createReducerManager} from './ReducerManager'
import { type CombinedState, type Reducer } from 'redux';
import { type StateSchema, type ThunkExtraArg } from './StateSchema';
import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
