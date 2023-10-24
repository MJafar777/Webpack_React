import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen:true,
  children:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda rerum, sunt aliquam fugit culpa. Nesciunt obcaecati illum sed aut? Amet error rerum ipsa recusandae. Eveniet, earum ut! Dolorem velit beatae nam quis quo debitis. Unde vel necessitatibus libero. Eligendi rem velit neque cumque, recusandae nesciunt asperiores dolore, deserunt optio dolores ipsum debitis earum harum dignissimos facere odio molestiae atque fuga maiores perspiciatis suscipit est? Id soluta inventore atque mollitia debitis adipisci eum cupiditate iste beatae distinctio eaque possimus culpa dicta numquam ipsa, expedita odit, sequi velit reprehenderit! Eos tempora qui perspiciatis aut reprehenderit culpa deserunt esse harum eligendi maxime?  '
};

export const Dark=Template.bind({})

Dark.args={
  isOpen:true,
  children:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda rerum, sunt aliquam fugit culpa. Nesciunt obcaecati illum sed aut? Amet error rerum ipsa recusandae. Eveniet, earum ut! Dolorem velit beatae nam quis quo debitis. Unde vel necessitatibus libero. Eligendi rem velit neque cumque, recusandae nesciunt asperiores dolore, deserunt optio dolores ipsum debitis earum harum dignissimos facere odio molestiae atque fuga maiores perspiciatis suscipit est? Id soluta inventore atque mollitia debitis adipisci eum cupiditate iste beatae distinctio eaque possimus culpa dicta numquam ipsa, expedita odit, sequi velit reprehenderit! Eos tempora qui perspiciatis aut reprehenderit culpa deserunt esse harum eligendi maxime?  '

}
Dark.decorators=[ThemeDecorator(Theme.DARK)] 