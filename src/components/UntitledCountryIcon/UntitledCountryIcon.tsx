import React from 'react';
import { UntitledCountryIconProps } from './UntitledCountryIcon.types';
import UntitledSvgRenderer from '../UntitledSvgRenderer';
import { useImageProperties } from '../../hooks/useImageProperties';

/**
 * Country icon component
 * @param props 
 */
const UntitledCountryIcon: React.FC<UntitledCountryIconProps> = (props) => {
  const BASE_URL = "../assets/icons/countries/";

  const { width, height, src } = useImageProperties({ assetBaseUrl: BASE_URL, assetPath: props.country, width: props.size?.width, height: props.size?.height})

  return <UntitledSvgRenderer img={src} width={width} height={height} altText={props.altText ?? `Icon ${props.country}`} />
};

export default UntitledCountryIcon;
