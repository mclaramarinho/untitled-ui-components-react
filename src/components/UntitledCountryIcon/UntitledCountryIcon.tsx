import React, { useEffect, useState } from 'react';
import { UntitledCountryIconProps } from './UntitledCountryIcon.types';
import UntitledSvgRenderer from '../UntitledSvgRenderer';

const UntitledCountryIcon: React.FC<UntitledCountryIconProps> = (props) => {
  const BASE_URL = "../../assets/icons/countries/";


  const [iconPath, setIconPath] = useState<string>();
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();


  useEffect(() => {
    setWidth(props.size?.width);
    setHeight(props.size?.height);
  }, [props.size?.width, props.size?.height]);
  
  useEffect(() => {
    setIconPath(BASE_URL + props.country);
  }, [props.country]);

  
  return <UntitledSvgRenderer imgPath={iconPath} width={width} height={height} altText={props.altText ?? `Icon ${props.country}`} />
};

export default UntitledCountryIcon;
