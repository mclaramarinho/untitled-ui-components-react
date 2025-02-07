import { Meta, ReactRenderer, StoryFn } from '@storybook/react';
import UntitledCountryIcon from './UntitledCountryIcon';
import { eCountryAbbr, UntitledCountryIconProps } from './UntitledCountryIcon.types';
import { AnnotatedStoryFn } from 'storybook/internal/types';
import { FixedIconSize } from '../../types/icons.types';


export default {
  title: 'Components/UntitledCountryIcon',
  component: UntitledCountryIcon,
  argTypes: {
    country: {
      options: Object.values(eCountryAbbr),
      mapping: Object.values(eCountryAbbr),
      control: {
        type: 'select',
        labels: Object.keys(eCountryAbbr),
      },
    }
  }
} as Meta;


function buildCountryIcon(props:UntitledCountryIconProps) : AnnotatedStoryFn<ReactRenderer, UntitledCountryIconProps>{
  const component = Template.bind(props);
  component.args = props;
  return component;
}


const Template: StoryFn<UntitledCountryIconProps> = (args) => <UntitledCountryIcon {...args} />;

// Default sized icon
const DefaultSizedIconProps : UntitledCountryIconProps = {country: eCountryAbbr.BR, altText:"Brazil country icon"} ;
export const DefaultSizedIcon = buildCountryIcon(DefaultSizedIconProps);


// Small icon
const SmallIconProps : UntitledCountryIconProps = {size: FixedIconSize.SM, country: eCountryAbbr.BR, altText:"Brazil country icon"} ;
export const SmallIcon = buildCountryIcon(SmallIconProps);


// Medium icon
const MediumIconProps : UntitledCountryIconProps = {size: FixedIconSize.MD, country: eCountryAbbr.BR, altText:"Brazil country icon"} ;
export const MediumIcon = buildCountryIcon(MediumIconProps);


// Large icon
const LargeIconProps : UntitledCountryIconProps = {size: FixedIconSize.LG, country: eCountryAbbr.BR, altText:"Brazil country icon"} ;
export const LargeIcon = buildCountryIcon(LargeIconProps);


// Extra-large icon
const ExtraLargeIconProps : UntitledCountryIconProps = {size: FixedIconSize.XL, country: eCountryAbbr.BR, altText:"Brazil country icon"} ;
export const ExtraLargeIcon = buildCountryIcon(ExtraLargeIconProps);


// Double-extra-large icon
const DoubleExtraLargeIconProps : UntitledCountryIconProps = {size: FixedIconSize.XXL, country: eCountryAbbr.BR, altText:"Brazil country icon"} ;
export const DoubleExtraLargeIcon = buildCountryIcon(DoubleExtraLargeIconProps);


// Custom-sized icon
const CustomSizedIconProps : UntitledCountryIconProps = {size: { height: 200, width:200 }, country: eCountryAbbr.BR, altText:"Brazil country icon"} ;
export const CustomSizedIcon = buildCountryIcon(CustomSizedIconProps);
