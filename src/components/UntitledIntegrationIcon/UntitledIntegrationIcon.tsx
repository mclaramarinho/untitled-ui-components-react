import React, { useEffect, useState } from 'react';
import { UntitledIntegrationIconProps } from './UntitledIntegrationIcon.types';
import { icons } from "./assets";

const UntitledIntegrationIcon: React.FC<UntitledIntegrationIconProps> = (props) => {
  const [Icon, setIcon] = useState<React.FC<React.SVGProps<SVGSVGElement>>>(icons[props.integration]);

  useEffect(() => {
    setIcon(icons[props.integration]);
  }, [props.integration])


  return <Icon width={props.size?.width} height={props.size?.height} aria-hidden={props.ariaHidden} aria-description={props.altText} />
};

export default UntitledIntegrationIcon;
