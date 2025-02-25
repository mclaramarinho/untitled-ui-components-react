import React, { useEffect, useState } from 'react';
import { UntitledSocialIconProps } from './UntitledSocialIcon.types';
import { icons } from './assets';

const UntitledSocialIcon: React.FC<UntitledSocialIconProps> = (props) => {
  const [Icon, setIcon] = useState<React.FC<React.SVGProps<SVGSVGElement>>>(icons[props.variant??"default"][props.social]);

  useEffect(() => {
    setIcon(icons[props.variant??"default"][props.social]);
  }, [props.variant, props.social])

  return <Icon width={props.size?.width} height={props.size?.height} aria-description={props.altText} aria-hidden={props.ariaHidden} />
};

export default UntitledSocialIcon;
