  import React from 'react';
  import MainPage from './MainPage';
  import { Theme } from 'app/providers/ThemeProvider';
  import { type ComponentMeta, type ComponentStory } from '@storybook/react';
  import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

  export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
      backgroundColor: { control: 'color' }
    }
  } as ComponentMeta<typeof MainPage>;

  const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

  export const Normal = Template.bind({});
  Normal.args = {};

  export const Dark = Template.bind({});
  Dark.args = {};
  Dark.decorators = [ThemeDecorator(Theme.DARK)];
