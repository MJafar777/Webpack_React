import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'myEntities/Country';
import { Currency } from 'myEntities/Currency';
import Avatar from '../../../shared/assets/test/storybook.jpg'
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
        username: 'Behzod',
        lastname: 'hamroyev',
        country: Country.Armenia,
        currency:Currency.EUR,  
        age: 23,
        city: 'firs',
        first: 'sklsd',
        avatar: Avatar
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
        username: 'Behzod',
        lastname: 'hamroyev',
        country: Country.Armenia,
        currency:Currency.EUR,  
        age: 23,
        city: 'firs',
        first: 'sklsd',
        avatar: Avatar
      }
    }
  }) 
];
