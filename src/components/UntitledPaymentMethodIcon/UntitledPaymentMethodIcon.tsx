import React from 'react';
import UntitledPaymentMethodIconProps from './UntitledPaymentMethodIcon.types';
import UntitledSvgRenderer from '../UntitledSvgRenderer';
import { useImageProperties } from '../../hooks/useImageProperties';

const UntitledPaymentMethodIcon: React.FC<UntitledPaymentMethodIconProps> = (props) => {
  const BASE_URL = "../assets/icons/payment_methods/";
  
  const { width, height, src } = useImageProperties({ assetBaseUrl: BASE_URL, assetFileName: getFileNameByEnum(), width: props.size?.width, height: props.size?.height})
  

  function getFileNameByEnum(){
    return props.paymentMethod + ".svg";
  }

  return <UntitledSvgRenderer altText={props.altText} width={width} height={height} img={src} ariaHidden={props.ariaHidden} />
};

export default UntitledPaymentMethodIcon;
