import { Meta, StoryFn } from '@storybook/react';
import UntitledIcon from './UntitledIcon';
import { UntitledIconProps, iconNamesFromFeatherIcons} from './UntitledIcon.types';

export default {
  title: 'Components/UntitledIcon',
  component: UntitledIcon,
  argTypes: {
    "icon": {
      options: iconNamesFromFeatherIcons,
      mapping: iconNamesFromFeatherIcons,
      control: {
        type: 'select',
        labels: iconNamesFromFeatherIcons,
      },
    }
  }
} as Meta;

const Template: StoryFn<UntitledIconProps> = (args) => <UntitledIcon {...args} />;

export const Default = Template.bind({} as UntitledIconProps);
Default.args = {icon: "Camera"};
