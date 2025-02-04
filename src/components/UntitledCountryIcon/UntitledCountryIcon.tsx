import React, { useEffect, useState } from 'react';
import { UntitledCountryIconProps } from './UntitledCountryIcon.types';
import { ModuleExport } from 'storybook/internal/types';

const UntitledCountryIcon: React.FC<UntitledCountryIconProps> = (props) => {
  const [icon, setIcon] = useState<ModuleExport>();

  useEffect(() => {
    import(`../../assets/icons/countries/${props.country}`)
      .then(m => setIcon(m.default));
  }, []);

  return <img src={icon} width={props.width} height={props.height} alt={props.altText ?? `Icon ${props.country}`} />
};

export default UntitledCountryIcon;
