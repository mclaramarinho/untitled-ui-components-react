import React, { useEffect, useState } from 'react';
import { UntitledPaymentMethodIconProps } from './UntitledPaymentMethodIcon.types';
import { icons } from './assets';

const UntitledPaymentMethodIcon: React.FC<UntitledPaymentMethodIconProps> = (props) => {
  const [Icon, setIcon] = useState<React.FC<React.SVGProps<SVGSVGElement>>>(icons[props.paymentMethod]);

  useEffect(() => {
    setIcon(icons[props.paymentMethod]);
  }, [props.paymentMethod])

  return <Icon width={props.size?.width} height={props.size?.height} aria-hidden={props.ariaHidden} aria-description={props.altText} />
};

export default UntitledPaymentMethodIcon;
