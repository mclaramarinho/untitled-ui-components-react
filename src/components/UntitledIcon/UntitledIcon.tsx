import React, { CSSProperties, useEffect, useState } from 'react';
import { UntitledIconProps, UntitleIconVariant } from './UntitledIcon.types';
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
const ICON_DEFAULT_COLOR = "#000000";
const LIGHT_ICON_DEFAULT_COLOR = "#000000";
const DARK_ICON_DEFAULT_COLOR = "#FFFFFF";

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
  const [iconColor, setIconColor] = useState<string>(ICON_DEFAULT_COLOR);
  const [isSquareVariant, setIsSquareVariant] = useState<boolean>(false);

  // STYLES --------------------------------------------------------------------------------------------------------------------
  let wrapperStyle = {
    width: wrapperSize,
    height: wrapperSize,
    background: bgColor,
    borderRadius: isSquareVariant ? wrapperSize*0.2 : wrapperSize
  } as CSSProperties;

  let innerWrapperStyle = {
    width: innerWrapperSize,
    height: innerWrapperSize,
    background: secondaryBgColor,
  } as CSSProperties;


  // METHODS --------------------------------------------------------------------------------------------------------------------
  const setColorFromDefaultColors = (color: UntitledColors) => {
    const colorShade = getColorFromDefaultColors(color, (shade??100));
    const secondaryColorShade = getColorFromDefaultColors(color, (secondaryShade??100));
    setBgColor(colorShade);
    setSecondaryBgColor(secondaryColorShade);
  }

  const getColorFromDefaultColors = (color:UntitledColors, shade:number) =>{
    const info = UntitledColorsList.AllColors[color];
    const colorHEX = info.shades[shade].hex;
    return colorHEX;
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
  };

  const decideIconColorValue = () => {
    if(props.customIconColor){
      setIconColor(props.customIconColor);
    }else if(props.iconColor){
      const color = getColorFromDefaultColors(props.iconColor, 500);
      setIconColor(color);
    }else{
      if(props.variant === "double-color-dark" || props.variant === "square-fill-dark" || props.variant === "square-fill"){
        setIconColor(DARK_ICON_DEFAULT_COLOR);
      }else{
        setIconColor(LIGHT_ICON_DEFAULT_COLOR);
      }
    }
  };


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

    if(!props.variant) setIsSquareVariant(false);

    else setIsSquareVariant(props.variant.includes("square"));

    decideIconColorValue();
  }, [props.variant])
  
  useEffect(() => {
    decideIconColorValue();
  }, [props.iconColor, props.customIconColor])

  useEffect(() => {setColorHexCodes()}, [props.bgColor, props.customBgColor, variant, props.variant])
  
  
  // COMPONENT --------------------------------------------------------------------------------------------------------------------
  return <div className={`untitled-icon-${variant} ${styles.untitledIcon}`} style={props.styles?.outerWrapper ? {...props.styles?.outerWrapper} : {...wrapperStyle}}>
    <div style={props.styles?.innerWrapper ? {...props.styles?.innerWrapper} : {...innerWrapperStyle}}>
      {IconComponentObject ? <IconComponentObject size={size} color={iconColor} /> : ""}
    </div>
  </div>
};

export default UntitledIcon;
