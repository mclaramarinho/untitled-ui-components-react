import React from 'react';
import { UntitledPaymentMethodIconProps } from './UntitledPaymentMethodIcon.types';
import { icons } from './assets';

const UntitledPaymentMethodIcon: React.FC<UntitledPaymentMethodIconProps> = (props) => {
  const { paymentMethod, size, ariaHidden, altText } = props;

  const Icon = icons[paymentMethod] as React.FC<React.SVGProps<SVGSVGElement>>;

  return <Icon width={size?.width} height={size?.height} aria-hidden={ariaHidden} aria-description={altText} />
};

export default UntitledPaymentMethodIcon;
