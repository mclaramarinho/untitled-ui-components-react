import React from 'react';
import { UntitledCountryIconProps } from './UntitledCountryIcon.types';
import { icons } from "./assets";


/**
 * Country icon component
 * @param props 
 */
const UntitledCountryIcon: React.FC<UntitledCountryIconProps> = (props) => {
  const Icon = icons[props.country] as React.FC<React.SVGProps<SVGSVGElement>>;
  console.log(Icon);

  return <Icon width={props.size?.width} height={props.size?.height} aria-description={props.altText ?? `Icon ${props.country}`} />
};

export default UntitledCountryIcon;
