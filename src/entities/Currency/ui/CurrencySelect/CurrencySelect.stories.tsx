
  import React from 'react';
  import { CurrencySelect } from './CurrencySelect';
  import { type ComponentMeta, type ComponentStory } from '@storybook/react';

  export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
      backgroundColor: { control: 'color' }
    }
  } as ComponentMeta<typeof CurrencySelect>;

  const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {};
