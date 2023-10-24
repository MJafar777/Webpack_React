import { type CounterSchema } from 'myEntities/Counter';
import { type UserSchema } from 'myEntities/User';
import { type LoginSchema } from 'features/AuthByUsername';
import {
  type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject
} from '@reduxjs/toolkit';
import { type CombinedState } from 'redux';
import { type ProfileSchema } from 'myEntities/Profile';
import { type AxiosInstance } from 'axios';
import { type NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
