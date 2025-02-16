import { Meta, StoryFn } from '@storybook/react';
import UntitledPaymentMethodIcon from './UntitledPaymentMethodIcon';
import { UntitledPaymentMethodIconProps, ePaymentMethod } from './UntitledPaymentMethodIcon.types';
import { getSelectPropArgType } from '../../stories/helpers/selectProp';

const args = {argTypes: {
  ...getSelectPropArgType("paymentMethod", ePaymentMethod),
}}


export default {
  title: 'Components/UntitledPaymentMethodIcon',
  component: UntitledPaymentMethodIcon,
  ...args,
} as Meta;

const Template: StoryFn<UntitledPaymentMethodIconProps> = (args:UntitledPaymentMethodIconProps) => <UntitledPaymentMethodIcon {...args} />;

export const Default = Template.bind({paymentMethod: ePaymentMethod.VISA} as UntitledPaymentMethodIconProps);
Default.args = {paymentMethod: ePaymentMethod.VISA} as UntitledPaymentMethodIconProps;
