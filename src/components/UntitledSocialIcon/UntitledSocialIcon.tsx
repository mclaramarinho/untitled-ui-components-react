import React from 'react';
import { UntitledSocialIconProps } from './UntitledSocialIcon.types';
import { icons } from './assets';

const UntitledSocialIcon: React.FC<UntitledSocialIconProps> = (props) => {
  const { social, size, altText, ariaHidden, variant } = props;

  const Icon = icons[variant??"default"][social] as React.FC<React.SVGProps<SVGSVGElement>>;

  return <Icon width={size?.width} height={size?.height} aria-description={altText} aria-hidden={ariaHidden} />
};

export default UntitledSocialIcon;
