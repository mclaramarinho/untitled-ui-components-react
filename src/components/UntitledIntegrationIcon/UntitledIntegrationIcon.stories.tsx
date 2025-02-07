import { Meta, StoryFn } from '@storybook/react';
import UntitledIntegrationIcon from './UntitledIntegrationIcon';
import UntitledIntegrationIconProps, { eBrowserNames } from './UntitledIntegrationIcon.types';

export default {
  title: 'Components/UntitledIntegrationIcon',
  component: UntitledIntegrationIcon,
} as Meta;

const Template: StoryFn<UntitledIntegrationIconProps> = (args) => <UntitledIntegrationIcon {...args} />;

export const Default = Template.bind({altText: "", integration: eBrowserNames.CHROME} as UntitledIntegrationIconProps);
Default.args = {altText: "", integration: eBrowserNames.CHROME} as UntitledIntegrationIconProps;