import React from 'react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
// import Avatar from '../../../shared/assets/test/storybook.jpg'

import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'Jafar',
        lastname: 'Mirzaraximov',
        country: Country.Armenia,
        currency:Currency.EUR,  
        age: 24,
        city: 'tashkent',
        first: '',
        avatar: 'https://avatars.githubusercontent.com/u/94430558?v=4'
      }
    }
  })
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'Jafar',
        lastname: 'Mirzaraximov',
        country: Country.Armenia,
        currency:Currency.EUR,  
        age: 24,
        city: 'Tashkent',
        first: '',
        avatar: 'https://avatars.githubusercontent.com/u/94430558?v=4'
      }
    }
  }) 
];