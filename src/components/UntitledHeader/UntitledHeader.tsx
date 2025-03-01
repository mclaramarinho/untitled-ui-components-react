import React, { CSSProperties, ReactElement, useEffect, useState } from 'react';
import { UntitledHeaderProps, HeaderLevelsByFontSize, UntitledHeaderFontSizes, UntitledHeaderLevels, HeaderFontSizeByLevel } from './UntitledHeader.types';
import s from "./UntitledHeader.module.scss";
import { getColorHEX } from '../../utils/colors';


const UntitledHeader: React.FC<UntitledHeaderProps> = (props) => {
  // ------------------- STATES ----------------------------------------------------------
  const [headerElement, setHeaderElement] = useState<ReactElement>();  


  // ------------------- CREATE HTML ELEMENT ----------------------------------------------------------
  const createHeadingElement = (): ReactElement => {
    let properties = getBaseProperties();

    if(props.level)
      return createReactElement(props.level, properties);

    let headerTagName: UntitledHeaderLevels = 'h3';

    if(typeof props.size === "number"){
      headerTagName = getHeaderLevelByTextSize() ?? headerTagName;
    }else if(props.size){
      headerTagName = HeaderLevelsByFontSize[props.size as UntitledHeaderFontSizes] ?? headerTagName;
    }

    return createReactElement(headerTagName, properties);
  }

  // ------------------- AUXILIARY FUNCTIONS ----------------------------------------------------------
  const getBaseProperties = () => {
    return {
      props: {
        className: getStylingClass(),
        style: props.styles ?? {
          color: getColorHEX(props.color),
          fontSize: typeof props.size === "number" ? props.size : undefined,
        } as CSSProperties
      } as React.HTMLAttributes<any>,
      children: [props.text] as React.ReactNode[]
    }
  }
  const getHeaderLevelByTextSize = () : UntitledHeaderLevels | undefined => {
    if(typeof props.size !== "number") return;
    const sizeType = getSizeClassificationByCustomTextSize();
    if(!sizeType) return 'h3';

    return HeaderLevelsByFontSize[sizeType];
  }

  const getSizeClassificationByCustomTextSize = (): UntitledHeaderFontSizes | undefined => {
    if(!props.size) return;
    if(typeof props.size !== 'number') return;

    const size = props.size as number;
    
    if(size >= 72) return '2XL';
    else if(size >= 60) return 'XL';
    else if(size >= 48) return 'LG';
    else if(size >= 36) return 'MD';
    else if(size >= 30) return 'SM';
    else return 'XS';
  }

 
  const createReactElement = (level: UntitledHeaderLevels, data: {props: React.HTMLAttributes<any>, children: React.ReactNode[]}) : ReactElement => {
    return React.createElement(level, data.props, data.children);
  }

  const getStylingClass = () => {
    const BASE_CLASS = "display-";
    let className = BASE_CLASS;

    if(typeof props.size === "number"){
      const sizeType = getSizeClassificationByCustomTextSize();
      className += sizeType ? sizeType.toLowerCase() : "md";
    }else if(props.size){
      className+=props.size.toLowerCase();
    }else{
      className += props.level ? HeaderFontSizeByLevel[props.level].toLowerCase() : "md";
    }
    
    className += "-" + (props.weight ?? "regular");
    return s[className]
  }

  // ------------------- HOOKS ----------------------------------------------------------
  useEffect(() => {
    setHeaderElement(createHeadingElement());
  }, [props])


  // ------------------- COMPONENT ----------------------------------------------------------
  return headerElement ? headerElement : "";
};

export default UntitledHeader;
