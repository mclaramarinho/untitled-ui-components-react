import React from 'react';
import { UntitledIntegrationIconProps } from './UntitledIntegrationIcon.types';
import { icons } from "./assets";

const UntitledIntegrationIcon: React.FC<UntitledIntegrationIconProps> = (props) => {
  const { integration, size, ariaHidden, altText } = props;
  const Icon = icons[integration] as React.FC<React.SVGProps<SVGSVGElement>>;

  return <Icon width={size?.width} height={size?.height} aria-hidden={ariaHidden} aria-description={altText} />
};

export default UntitledIntegrationIcon;
