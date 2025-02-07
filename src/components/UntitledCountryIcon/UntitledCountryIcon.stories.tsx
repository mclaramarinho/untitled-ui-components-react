import { Meta, StoryFn } from '@storybook/react';
import UntitledCountryIcon from './UntitledCountryIcon';
import { eCountryIconAssetByAbbreviation, UntitledCountryIconProps } from './UntitledCountryIcon.types';

export default {
  title: 'Components/UntitledCountryIcon',
  component: UntitledCountryIcon,
} as Meta;

const Template: StoryFn = (args) => <UntitledCountryIcon {...args as UntitledCountryIconProps} />;

const DefaultProps : UntitledCountryIconProps = {size:{height: 200, width:200}, country: eCountryIconAssetByAbbreviation.BR, altText:"icone do brasil"} ;
export const Default = Template.bind(DefaultProps);
Default.args = DefaultProps;