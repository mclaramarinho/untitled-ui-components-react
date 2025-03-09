import { Meta, StoryFn } from '@storybook/react';
import UntitledButton from './UntitledButton';
import UntitledButtonProps from './UntitledButton.types';
import { iconNamesFromFeatherIcons } from '../UntitledIcon/UntitledIcon.types';

export default {
  title: 'Components/UntitledButton',
  component: UntitledButton,
  argTypes: {
    icon: {
      options: iconNamesFromFeatherIcons,
      mapping: iconNamesFromFeatherIcons,
      control: {
        type: "select",
        labels: iconNamesFromFeatherIcons,
      }
    },
    bgColor: {
      control: "text"
    },
    secondaryBgColor: {
      control: "text"
    },
    color: {
      control: "text"
    },
    dotColor: {
      control: "text"
    },
    ariaPressed: {
      control: "boolean"
    }
  }
} as Meta;

const Template: StoryFn = (args) => <UntitledButton {...args} />;

export const Default = Template.bind({} as UntitledButtonProps);
Default.args = {text: "Default Button"} as UntitledButtonProps;
