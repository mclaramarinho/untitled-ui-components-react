import { Meta, StoryFn } from '@storybook/react';
import UntitledHeader from './UntitledHeader';
import UntitledHeaderProps from './UntitledHeader.types';
import { UntitledColorsList, UntitledColors } from '../../types/colors.types';

export default {
  title: 'Components/UntitledHeader',
  component: UntitledHeader,
} as Meta;

const Template: StoryFn<UntitledHeaderProps> = (args) => <UntitledHeader {...args} />;

export const Default = Template.bind({text: "Template", color: "gray" } as UntitledHeaderProps);
Default.args = {text: "Template", color: "gray"};
