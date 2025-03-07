import { Meta, StoryFn } from '@storybook/react';
import UntitledButton from './UntitledButton';
import UntitledButtonProps from './UntitledButton.types';

export default {
  title: 'Components/UntitledButton',
  component: UntitledButton,
} as Meta;

const Template: StoryFn = (args) => <UntitledButton {...args} />;

export const Default = Template.bind({} as UntitledButtonProps);
Default.args = {text: "Default Button"} as UntitledButtonProps;
