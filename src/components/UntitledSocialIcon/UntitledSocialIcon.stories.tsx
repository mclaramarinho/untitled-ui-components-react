import { Meta, StoryFn } from '@storybook/react';
import UntitledSocialIcon from './UntitledSocialIcon';
import { UntitledSocialIconProps, eSocialNetworkIconVariants, eSocialNetworks } from './UntitledSocialIcon.types';
import { getSelectPropArgType } from '../../stories/helpers/selectProp';


const argTypes = {
  ...getSelectPropArgType("social", eSocialNetworks),
  ...getSelectPropArgType("variant", eSocialNetworkIconVariants),
}


export default {
  title: 'Components/UntitledSocialIcon',
  component: UntitledSocialIcon,
  argTypes: argTypes
} as Meta;

const Template: StoryFn<UntitledSocialIconProps> = (args) => <UntitledSocialIcon {...args} />;

// DEFAULT
export const Default = Template.bind({altText: "", social: eSocialNetworks.FACEBOOK} as UntitledSocialIconProps);
Default.args = {altText: "", social: eSocialNetworks.FACEBOOK, variant: eSocialNetworkIconVariants.DEFAULT} as UntitledSocialIconProps;

// GRAY
export const GrayVariant = Template.bind({altText: "", social: eSocialNetworks.FACEBOOK} as UntitledSocialIconProps);
GrayVariant.args = {altText: "", social: eSocialNetworks.FACEBOOK, variant: eSocialNetworkIconVariants.GRAY} as UntitledSocialIconProps;

// GRAY HOVER
export const GrayHoverVariant = Template.bind({altText: "", social: eSocialNetworks.FACEBOOK} as UntitledSocialIconProps);
GrayHoverVariant.args = {altText: "", social: eSocialNetworks.FACEBOOK, variant: eSocialNetworkIconVariants.GRAY_HOVER} as UntitledSocialIconProps;


// WHITE 
export const WhiteVariant = Template.bind({altText: "", social: eSocialNetworks.FACEBOOK} as UntitledSocialIconProps);
WhiteVariant.args = {altText: "", social: eSocialNetworks.FACEBOOK, variant: eSocialNetworkIconVariants.WHITE} as UntitledSocialIconProps;


// WHITE HOVER
export const WhiteHoverVariant = Template.bind({altText: "", social: eSocialNetworks.FACEBOOK} as UntitledSocialIconProps);
WhiteHoverVariant.args = {altText: "", social: eSocialNetworks.FACEBOOK, variant: eSocialNetworkIconVariants.WHITE_HOVER} as UntitledSocialIconProps;