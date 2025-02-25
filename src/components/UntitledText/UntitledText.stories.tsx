import { Meta, StoryFn } from '@storybook/react';
import UntitledText from './UntitledText';
import { UntitledTextProps } from './UntitledText.types';

export default {
  title: 'Components/UntitledText',
  component: UntitledText,
} as Meta;

const Template: StoryFn = (args) => <UntitledText {...args} />;

export const Default = Template.bind({} as UntitledTextProps);
Default.args = {};
