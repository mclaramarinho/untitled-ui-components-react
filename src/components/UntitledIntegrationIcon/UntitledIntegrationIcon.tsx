import React from 'react';
import { UntitledIntegrationIconProps } from './UntitledIntegrationIcon.types';
import { useImageProperties } from '../../hooks/useImageProperties';
import UntitledSvgRenderer from '../UntitledSvgRenderer';

const UntitledIntegrationIcon: React.FC<UntitledIntegrationIconProps> = (props) => {
  const BASE_URL = "../assets/icons/integration/";
  
  const { width, height, src } = useImageProperties({ assetBaseUrl: BASE_URL, assetFileName: getFileNameByEnum(), width: props.size?.width, height: props.size?.height})
  

  function getFileNameByEnum(){
    return props.integration + ".svg";
  }

  return <UntitledSvgRenderer altText={props.altText} width={width} height={height} img={src} ariaHidden={props.ariaHidden} />
};

export default UntitledIntegrationIcon;
