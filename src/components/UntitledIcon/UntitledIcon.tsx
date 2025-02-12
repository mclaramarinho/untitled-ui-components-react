import React, { CSSProperties, useEffect, useState } from 'react';
import UntitledIconProps, { UntitleIconVariant } from './UntitledIcon.types';
import * as icons from 'react-feather';
import styles from "./UntitledIcon.module.scss";
import { UntitledColors, UntitledColorsList } from '../../types/colors.types';

const DEFAULT_ICON_VARIANT: UntitleIconVariant = "no-bg";
const DEFAULT_WRAPPER_SCALE: number = 2;
const DEFAULT_INNER_WRAPPER_SCALE: number = 1.6;
const DEFAULT_ICON_SIZE: number = 24;
const DEFAULT_WRAPPER_SIZE = DEFAULT_ICON_SIZE * DEFAULT_WRAPPER_SCALE;
const DEFAULT_INNER_WRAPPER_SIZE = DEFAULT_ICON_SIZE * DEFAULT_INNER_WRAPPER_SCALE;
const DEFAULT_COLOR_WRAPPER: UntitledColors = "brand";


// TODO - allow setting custom icon color
// TODO - allow setting untitled ui colors
/**
 * @param props.icon - Please refer to {@link https://feathericons.com/ | Feather Icons} to see all available icons
 * @param props.size - Single number
 * @copyright Uses {@link https://github.com/feathericons/react-feather | React Feather} lib to render the icons
 */
const UntitledIcon: React.FC<UntitledIconProps> = (props) => {

  // STATES --------------------------------------------------------------------------------------------------------------------
  const [IconComponentObject, setIconComponentObject] = useState<icons.Icon>();
  const [size, setSize] = useState<number>();
  const [variant, setVariant] = useState<UntitleIconVariant|undefined>(DEFAULT_ICON_VARIANT);
  const [wrapperSize, setWrapperSize] = useState<number>(24);
  const [innerWrapperSize, setInnerWrapperSize] = useState<number>(24);
  const [bgColor, setBgColor] = useState<string|undefined>();
  const [secondaryBgColor, setSecondaryBgColor] = useState<string|undefined>();
  const [shade, setShade] = useState<number>(100);
  const [secondaryShade, setSecondaryShade] = useState<number>(100);


  // STYLES --------------------------------------------------------------------------------------------------------------------
  let wrapperStyle = {
    width: wrapperSize,
    height: wrapperSize,
    background: bgColor,
  } as CSSProperties;

  let innerWrapperStyle = {
    width: innerWrapperSize,
    height: innerWrapperSize,
    background: secondaryBgColor,
  } as CSSProperties;


  // METHODS --------------------------------------------------------------------------------------------------------------------
  const setColorFromDefaultColors = (color: UntitledColors) => {
    const info = UntitledColorsList.AllColors[color];
    const colorShade = info.shades[shade??100].hex;
    const secondaryColorShade = info.shades[secondaryShade??100].hex;
    setBgColor(colorShade);
    setSecondaryBgColor(secondaryColorShade);
  }

  const setColorHexCodes = () => {
    setSecondaryBgColor(props.customSecondaryBgColor);

    if(variant === "no-bg"){
      setBgColor(undefined);
      setSecondaryBgColor(undefined);
      return;
    }

    if(props.customBgColor){
      setBgColor(props.customBgColor);

      if(props.customSecondaryBgColor){
        setSecondaryBgColor(props.customBgColor);
      }else{
        setBgColor(props.customBgColor);
      }
    }else if(props.bgColor){
      setColorFromDefaultColors(props.bgColor);
    }else{
      setColorFromDefaultColors(DEFAULT_COLOR_WRAPPER);
    }
  };

  const setShadeValues = (variant: UntitleIconVariant ) => {
    switch(variant){
      case "no-bg":
        setShade(100);
        setSecondaryShade(100);
        break;
      case "light":
        setShade(100);
        setSecondaryShade(100);
        break;
      case "double-color-light":
        setShade(100);
        setSecondaryShade(50);
        break;
      case "double-color-dark":
        setSecondaryShade(600);
        setShade(700);
        break;
      case "square-fill-light":
        setSecondaryShade(50);
        setShade(50);
        break;
      case "square-fill":
        setSecondaryShade(500);
        setShade(500);
        break;
      case "square-fill-dark":
        setSecondaryShade(800);
        setShade(800);
        break;
    }
  }

  const setWrapperAndIconSizes = () => {
    setSize(props.size);
    setWrapperSize(!props.size ? DEFAULT_WRAPPER_SIZE : (props.size*DEFAULT_WRAPPER_SCALE));
    setInnerWrapperSize(!props.size ? DEFAULT_INNER_WRAPPER_SIZE : (props.size*DEFAULT_INNER_WRAPPER_SCALE));
  }


  // EFFECTS --------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const IconComponent = icons[props.icon as keyof typeof icons];
    setIconComponentObject(IconComponent);
  }, [props.icon])

  useEffect(() => {
    setWrapperAndIconSizes();
  }, [props.size])

  useEffect(() => {
    setVariant(props.variant ?? DEFAULT_ICON_VARIANT);
    setShadeValues(props.variant ?? DEFAULT_ICON_VARIANT);
  }, [props.variant])

  useEffect(() => {setColorHexCodes()}, [props.bgColor, props.customBgColor, variant, props.variant])
  
  
  // COMPONENT --------------------------------------------------------------------------------------------------------------------
  return <div className={`untitled-icon-${variant} ${styles.untitledIcon}`} style={wrapperStyle}>
    <div style={innerWrapperStyle}>
      {IconComponentObject ? <IconComponentObject size={size} /> : ""}
    </div>
  </div>
};

export default UntitledIcon;
