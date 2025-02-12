import { Meta, StoryFn } from '@storybook/react';
import UntitledIcon from './UntitledIcon';
import UntitledIconProps from './UntitledIcon.types';

export default {
  title: 'Components/UntitledIcon',
  component: UntitledIcon,
} as Meta;

const Template: StoryFn<UntitledIconProps> = (args) => <UntitledIcon {...args} />;

export const Default = Template.bind({} as UntitledIconProps);
Default.args = {icon: "Camera"};
