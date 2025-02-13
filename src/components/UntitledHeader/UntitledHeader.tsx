import React, { ReactElement, useEffect, useState } from 'react';
import UntitledHeaderProps, { HeaderLevelsByFontSize, UntitledHeaderFontSizes, UntitledHeaderLevels } from './UntitledHeader.types';
import { UntitledFontWeights } from '../../types/typography.types';
import "./UntitledHeader.scss";

const UntitledHeader: React.FC<UntitledHeaderProps> = (props) => {
  const [headerElement, setHeaderElement] = useState<ReactElement>();  

  const createHeadingElement = (): ReactElement => {
    // TODO - class name not applying scss styles
    let properties = {
      props: {className: getStylingClass()} as React.HTMLAttributes<any>,
      children: [props.text] as React.ReactNode[]
    }

    if(props.level)
      return createReactElement(props.level, properties);

    let headerTagName: UntitledHeaderLevels = 'h3';

    if(typeof props.size === "number"){
      const lvl = getHeaderLevelByTextSize();

      if(lvl) 
        headerTagName = lvl;
    }else if(props.size){
      const lvl = HeaderLevelsByFontSize[props.size as UntitledHeaderFontSizes];
      if(lvl)
        headerTagName = lvl;
    }

    return createReactElement(headerTagName, properties);
  }

  const getHeaderLevelByTextSize = () : UntitledHeaderLevels | undefined => {
    if(typeof props.size !== "number") return;
    const sizeType = getSizeClassificationByCustomTextSize();
    if(!sizeType) return 'h3';

    switch(sizeType){
      case '2XL':
        return 'h1';
      case 'XL':
        return 'h2';
      case 'LG':
        return 'h3';
      case 'MD':
        return 'h4';
      case 'SM':
        return 'h5';
      case 'XS':
        return 'h6';
    }
  }

  const getSizeClassificationByCustomTextSize = (): UntitledHeaderFontSizes | undefined => {
    if(!props.size) return;
    if(typeof props.size !== 'number') return;

    const size = props.size as number;
    if(size >= 72){
      return '2XL';
    }else if(size >= 60){
      return 'XL';
    }else if(size >= 48){
      return 'LG';
    }else if(size >= 36){
      return 'MD';
    }else if(size >= 30){
      return 'SM';
    }else{
      return 'XS';
    }
  }

  const createReactElement = (level: UntitledHeaderLevels, data: {props: React.HTMLAttributes<any>, children: React.ReactNode[]}) : ReactElement => {
    return React.createElement(level, data.props, data.children);
  }

  const getStylingClass = () => {
    const BASE_CLASS = ".display-";
    let className = BASE_CLASS;
    
    if(props.weight){
      className+=props.weight+"-";
    }else{
      className+="regular-" as UntitledFontWeights;
    }

    if(typeof props.size === "number"){
      const sizeType = getSizeClassificationByCustomTextSize();
      if(!sizeType){
        className += "md";
      }else{
        className+= sizeType.toLowerCase();
      }
    }else if(props.size){
      className+=props.size.toLowerCase();
    }else{
      className+="md";
    }

    return className
  }

  useEffect(() => {
    setHeaderElement(createHeadingElement());
  }, [props])

  return headerElement ? headerElement : "";
};

export default UntitledHeader;
