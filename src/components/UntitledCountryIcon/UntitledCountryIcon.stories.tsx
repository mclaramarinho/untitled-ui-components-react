import { Meta, StoryFn } from '@storybook/react';
import UntitledCountryIcon from './UntitledCountryIcon';
import { eCountryIconAssetByAbbreviation, UntitledCountryIconProps } from './UntitledCountryIcon.types';

export default {
  title: 'Components/UntitledCountryIcon',
  component: UntitledCountryIcon,
} as Meta;

// const Template: StoryFn = (args:UntitledCountryIconProps) => <UntitledCountryIcon country={args.country} height={args.height} width={args.width} />;
const Template: StoryFn = (args) => <UntitledCountryIcon {...args as UntitledCountryIconProps} />;

export const Default = Template.bind({} as UntitledCountryIconProps);
Default.args = {height: 200, width: 200, country: eCountryIconAssetByAbbreviation.BR, altText: "Icone do brasil"} as UntitledCountryIconProps;
 