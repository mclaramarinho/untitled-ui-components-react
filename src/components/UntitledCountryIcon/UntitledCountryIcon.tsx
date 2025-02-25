import React from 'react';
import { UntitledCountryIconProps } from './UntitledCountryIcon.types';
import { icons } from "./assets";


/**
 * Country icon component
 * @param props 
 */
const UntitledCountryIcon: React.FC<UntitledCountryIconProps> = (props) => {
  const { country, size, ariaHidden, altText} = props;
  const Icon = icons[country] as React.FC<React.SVGProps<SVGSVGElement>>;

  return <Icon width={size?.width} height={size?.height} 
          aria-hidden={ariaHidden}
          aria-description={altText ?? `Icon ${country}`} />
};

export default UntitledCountryIcon;
