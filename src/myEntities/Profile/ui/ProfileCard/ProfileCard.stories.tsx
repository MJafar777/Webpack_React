import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country } from 'myEntities/Country';
import Avatar from 'shared/assets/test/storybook.jpg';
import { Currency } from 'myEntities/Currency';
export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'Behzod',
    lastname: 'hamroyev',
    country: Country.Armenia,
    currency:Currency.EUR,  
    age: 23,
    city: 'firs',
    first: 'sklsd',
    avatar: Avatar
  }
};

export const withError = Template.bind({});
withError.args = {
  error: 'Eroror'
};

export const Loading = Template.bind({});

Loading.args = {
  isLoading: true
};
