import React, { useEffect, useState } from 'react';
import { UntitledCountryIconProps } from './UntitledCountryIcon.types';
import { icons } from "./assets";


/**
 * Country icon component
 * @param props 
 */
const UntitledCountryIcon: React.FC<UntitledCountryIconProps> = (props) => {
  let [Icon, setIcon] = useState<React.FC<React.SVGProps<SVGSVGElement>>>(icons[props.country]);

  useEffect(() => {
    setIcon(icons[props.country] as React.FC<React.SVGProps<SVGSVGElement>>);
  }, [props.country])

  return <Icon width={props.size?.width} height={props.size?.height} 
          aria-description={props.altText ?? `Icon ${props.country}`} aria-hidden={props.ariaHidden} />
};

export default UntitledCountryIcon;
