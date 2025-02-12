import { Meta, StoryFn } from '@storybook/react';
import UntitledIntegrationIcon from './UntitledIntegrationIcon';
import UntitledIntegrationIconProps, { eBrowserNames, eAllIntegrations } from './UntitledIntegrationIcon.types';
import { getSelectPropArgType } from '../../stories/helpers/selectProp';

const argTypes = {
  ...getSelectPropArgType("integration", eAllIntegrations),
}

export default {
  title: 'Components/UntitledIntegrationIcon',
  component: UntitledIntegrationIcon,
  argTypes: argTypes
} as Meta;

const Template: StoryFn<UntitledIntegrationIconProps> = (args) => <UntitledIntegrationIcon {...args} />;

export const Default = Template.bind({altText: "", integration: eBrowserNames.CHROME} as UntitledIntegrationIconProps);
Default.args = {altText: "", integration: eBrowserNames.CHROME} as UntitledIntegrationIconProps;