import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlices';
import { profileReducer } from 'myEntities/Profile';
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import React from 'react';
const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
