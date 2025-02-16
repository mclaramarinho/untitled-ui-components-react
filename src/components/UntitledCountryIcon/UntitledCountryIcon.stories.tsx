import { Meta, ReactRenderer, StoryFn } from '@storybook/react';
import UntitledCountryIcon from './UntitledCountryIcon';
import { UntitledCountryIconProps } from './UntitledCountryIcon.types';
import { AnnotatedStoryFn } from 'storybook/internal/types';
import { FixedIconSize } from '../../types/icons.types';
// import { getSelectPropArgType } from '../../stories/helpers/selectProp';

const argTypes = {
  // ...getSelectPropArgType("country", eCountryAbbr),
}

export default {
  title: 'Components/UntitledCountryIcon',
  component: UntitledCountryIcon,
  argTypes: argTypes
} as Meta;


function buildCountryIcon(props:UntitledCountryIconProps) : AnnotatedStoryFn<ReactRenderer, UntitledCountryIconProps>{
  const component = Template.bind(props);
  component.args = props;
  return component;
}


const Template: StoryFn<UntitledCountryIconProps> = (args) => <UntitledCountryIcon {...args} />;

// Default sized icon
const DefaultSizedIconProps : UntitledCountryIconProps = {country: "BR", altText:"Brazil country icon"} ;
export const DefaultSizedIcon = buildCountryIcon(DefaultSizedIconProps);


// Small icon
const SmallIconProps : UntitledCountryIconProps = {size: FixedIconSize.SM, country: "BR", altText:"Brazil country icon"} ;
export const SmallIcon = buildCountryIcon(SmallIconProps);


// Medium icon
const MediumIconProps : UntitledCountryIconProps = {size: FixedIconSize.MD, country: "BR", altText:"Brazil country icon"} ;
export const MediumIcon = buildCountryIcon(MediumIconProps);


// Large icon
const LargeIconProps : UntitledCountryIconProps = {size: FixedIconSize.LG, country: "BR", altText:"Brazil country icon"} ;
export const LargeIcon = buildCountryIcon(LargeIconProps);


// Extra-large icon
const ExtraLargeIconProps : UntitledCountryIconProps = {size: FixedIconSize.XL, country: "BR", altText:"Brazil country icon"} ;
export const ExtraLargeIcon = buildCountryIcon(ExtraLargeIconProps);


// Double-extra-large icon
const DoubleExtraLargeIconProps : UntitledCountryIconProps = {size: FixedIconSize.XXL, country: "BR", altText:"Brazil country icon"} ;
export const DoubleExtraLargeIcon = buildCountryIcon(DoubleExtraLargeIconProps);


// Custom-sized icon
const CustomSizedIconProps : UntitledCountryIconProps = {size: { height: 200, width:200 }, country: "BR", altText:"Brazil country icon"} ;
export const CustomSizedIcon = buildCountryIcon(CustomSizedIconProps);
