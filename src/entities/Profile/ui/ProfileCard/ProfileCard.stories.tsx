  import React from 'react';
  import { ProfileCard } from './ProfileCard';
  import { Country } from 'entities/Country';
  import { Currency } from 'entities/Currency';
  import Avatar from 'shared/assets/test/storybook.jpg';
  import { type ComponentMeta, type ComponentStory } from '@storybook/react';

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
      username: 'Jafar',
      lastname: 'Mirzaraximov',
      country: Country.Armenia,
      currency:Currency.EUR,  
      age: 24,
      city: 'Tashkent',
      first: 'vjvjvjv',
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
