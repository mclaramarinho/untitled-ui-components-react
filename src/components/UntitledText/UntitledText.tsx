import React, { CSSProperties, ReactElement, useEffect, useState } from 'react';
import s from './UntitledText.module.scss';
import { UntitledTextFontSizes, UntitledTextProps } from './UntitledText.types';
import { getColorHEX } from '../../utils/getColorHEX';

const UntitledText: React.FC<UntitledTextProps> = (props) => {
  const [pElement, setPElement] = useState<ReactElement>();  

  const createElement = () => {
    let properties = getBaseProperties();
    return createReactElement(properties);
  };
  const createReactElement = (data: {props: React.HTMLAttributes<any>, children: React.ReactNode[]}) : ReactElement => {
    return React.createElement("p", data.props, data.children);
  }
  const getBaseProperties = () => {
      return {
        props: {
          className: getStylingClass(),
          style: props.styles ?? {
            color: getColorHEX(props.color),
            fontSize: typeof props.size === "number" ? props.size : undefined
          } as CSSProperties
        } as React.HTMLAttributes<any>,
        children: [props.text] as React.ReactNode[]
      }
    }

  const getStylingClass = () => {
    const BASE_CLASS = "text-";
    let className = BASE_CLASS;

    if(typeof props.size === "number"){
      const sizeType = getSizeClassificationByCustomTextSize();
      className += !sizeType ? "md" : sizeType.toLowerCase();
    }else {
      className+=props.size?.toLowerCase() ?? "md";
    }
    
    className += "-" + (props.weight ? props.weight : "regular");

    return s[className]
  }

  const getSizeClassificationByCustomTextSize = (): UntitledTextFontSizes | undefined => {
      if(!props.size) return;
      if(typeof props.size !== 'number') return;
  
      const size = props.size as number;

      if(size >= 20) return 'XL';
      else if(size >= 18) return 'LG';
      else if(size >= 16) return 'MD';
      else if(size >= 14) return 'SM';
      else return 'XS';
  }

  useEffect(() => {
    setPElement(createElement());
  }, [props])

  return pElement ? pElement : '';
};

export default UntitledText;
