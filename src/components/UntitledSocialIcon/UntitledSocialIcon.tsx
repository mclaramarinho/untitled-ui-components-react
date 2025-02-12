import React, { useEffect, useState } from 'react';
import UntitledSocialIconProps from './UntitledSocialIcon.types';
import { useImageProperties } from '../../hooks/useImageProperties';
import UntitledSvgRenderer from '../UntitledSvgRenderer';

const UntitledSocialIcon: React.FC<UntitledSocialIconProps> = (props) => {
  const BASE_URL = `../assets/icons/social`;
  
  const [imageName, setImageName] = useState<string>("");
  const [assetBaseUrl, setAssetBaseUrl] = useState<string>(`${BASE_URL}/default/`);
  
  const getImgName = () => props.social+".svg";

  let { width, height, src } = useImageProperties({ assetBaseUrl: assetBaseUrl, assetFileName: imageName, width: props.size?.width, height: props.size?.height})

  useEffect(() => {
    setImageName(getImgName());
  }, [props.social])

  useEffect(() => {
    setAssetBaseUrl(`${BASE_URL}/${props.variant ?? 'default'}/`)
  }, [props.variant])

  if(src){
    return <UntitledSvgRenderer altText={props.altText} width={width} height={height} img={src} ariaHidden={props.ariaHidden} />
  }
};

export default UntitledSocialIcon;
