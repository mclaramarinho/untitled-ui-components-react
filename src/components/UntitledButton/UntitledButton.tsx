import React, { CSSProperties, useEffect, useState } from 'react';
import UntitledButtonProps from './UntitledButton.types';
import { getColorHEX, getContrastColor, getContrastColorByHEX, getSubToneColor, getSubToneColorByHEX } from '../../utils/colors';
import * as icons from 'react-feather';
import { isUntitledColor, isUntitledColorShades } from '../../types';
import style from "./UntitledButton.module.scss";

const UntitledButton: React.FC<UntitledButtonProps> = (props) => {
	const [styles, setStyles] = useState<CSSProperties>();
	const [secondaryBgColor, setSecondaryBgColor] = useState<string>();
	const [bgColor, setBgColor] = useState<string>();
	const [textColor, setTextColor] = useState<string>();
	const [dotColor, setDotColor] = useState<string>();
	const [textSize, setTextSize] = useState<number>();
	const [IconComponentObject, setIconComponentObject] = useState<icons.Icon>();
	const [baseClasses, setBaseClasses] = useState<string>();

	const [shouldAppendIcon, setShouldAppendIcon] = useState<boolean>();
	const [showIcon, setShowIcon] = useState<boolean>();

	const [focused, setFocused] = useState<boolean>();
	
	// HOOKS ---------------------------------------------------------------------------------------------
	useEffect(() => {
		// Set base class name -----------------------------------------------------------------
		setBaseClassNames();

		// Set bg color - if none is provided, uses "brand-500"
		const bgColorTemp = setBgColorConfig();

		// Set TextColor ---------------------------------------------------------------------------------
		let textColorTemp = setTextColorConfig(bgColorTemp);

		// Set secondaryBgColor --------------------------------------------------------------------------
		setSecondaryBgColorConfig(bgColorTemp);

		// Icon component configuration ------------------------------------------------------------------
		setIconConfiguration();

		// Set Dot Color ---------------------------------------------------------------------------------
		setDotConfiguration(textColorTemp);


		// TODO - set styles property --------------------------------------------------------------------
		if(props.fontSize){
			const baseStyles = {
				fontSize: props.fontSize,
				// backgroundColor: bgColorTemp,
				color: textColorTemp,
			} as CSSProperties;
			setStyles({...props.styles ?? baseStyles})
		}
	}, [props])

	// AUXILIARY -----------------------------------------------------------------------------------------
	const setIconConfiguration = () => {
		// Icon component
		const IconComponent = props.icon ? icons[props.icon as keyof typeof icons] : icons["Circle"];
		setIconComponentObject(IconComponent);

		// Icon position
		if(props.icon && !props.iconPosition){
			setShouldAppendIcon(true);
		}else if(props.iconPosition && props.iconPosition === "prepend"){
			setShouldAppendIcon(false);
		}else if(props.iconPosition && props.iconPosition === "append"){
			setShouldAppendIcon(true);
		}else if(props.iconOnly){
			setShouldAppendIcon(true);
		}

		// Show icon?
		setShowIcon((props.icon || props.iconPosition || props.iconOnly) ? true : false);

		// Icon size
		if(props.fontSize){
			setTextSize(props.fontSize);
		}else{
			if(!props.size || props.size === "sm" || props.size === "md"){
				setTextSize(14)
			}else if(props.size === "lg" || props.size === "xl"){
				setTextSize(16);
			}else{
				setTextSize(18);
			}
		}
	}

	const setDotConfiguration = (textColorTemp: string) => {
		if(!props.dotColor){
			setDotColor(textColorTemp)
		}else{
			setDotColor(getColorHEX(props.dotColor));
		}
	}

	const setSecondaryBgColorConfig = (bgColorTemp: string) => {
		if(!props.secondaryBgColor){
			// infer color by background color
			if(isUntitledColor(props.bgColor) || isUntitledColorShades(props.bgColor)){
				setSecondaryBgColor(getSubToneColor(props.bgColor));
			}else{
				setSecondaryBgColor(getSubToneColorByHEX(bgColorTemp));
			}
		}else{
			setSecondaryBgColor(getColorHEX(props.secondaryBgColor));
		}
	}

	const setTextColorConfig = (bgColorTemp: string) : string => {
		let textColorTemp = "";
		if(!props.color){
			// infer color by background color
			if(isUntitledColor(props.bgColor) || isUntitledColorShades(props.bgColor)){
				textColorTemp = getContrastColor(props.bgColor);
			}else{
				textColorTemp = getContrastColorByHEX(bgColorTemp);
			}
		}else{
			textColorTemp = getColorHEX(props.color);
		}
		setTextColor(textColorTemp);

		return textColorTemp;
	}

	const setBgColorConfig = () : string => {
		const bgColorTemp = getColorHEX(props.bgColor);
		setBgColor(bgColorTemp);
		return bgColorTemp;
	}

	const setBaseClassNames = () => {
		let classes = style["untitled-button"] + " ";
		
		let variantClassName = "untitled-button-";
		variantClassName += props.size ?? "md";
		classes += style[variantClassName];

		setBaseClasses(classes);
	}

	// EVENTS --------------------------------------------------------------------------------------------
	const onFocusAction = (action?: () => void) => {
		setFocused(true);
		action && action();
	}

	const onUnfocusAction = (action?: () => void) => {
		setFocused(false);
		action && action();
	}



  	return <div style={{backgroundColor: focused ? secondaryBgColor : undefined}} className={style["untitled-button-shadow-box"]}>
		<button id={props.id} className={props.class ?? "" + " " + baseClasses}
			 name={props.name} type={props.type ?? "button"} value={props.value} formMethod={props.formMethod}
			 role={props.role ?? "button"} aria-pressed={props.ariaPressed ?? false} disabled={props.disabled ?? false}
			 style={styles}

			 onMouseEnter={props.onHover} 

			 onKeyDown={() => onFocusAction(props.onKeyDown)} 
			 onKeyUp={() => onUnfocusAction()}

			 onMouseDown={() => onFocusAction(props.onMouseDown)}
			 onMouseUp={() => onUnfocusAction(props.onMouseUp)} 
		>
			{!showIcon && props.dot ? 
				<span style={{color: dotColor, fontSize: textSize}}>
					●
				</span> 
			: ""}
			
			{(showIcon && !shouldAppendIcon && IconComponentObject) ? <IconComponentObject size={textSize} color={textColor} /> : null}

			{props.iconOnly ? null : props.text}
			
			{(showIcon && shouldAppendIcon && IconComponentObject) ? <IconComponentObject size={textSize} color={textColor} /> : null}
		</button>
	</div>;
};

export default UntitledButton;
/*
UntitledButton

HTML SPECIFIC ------------------ OK

formmethod: undefined / get / post / dialog 
name: undefined / string
type: submit / reset / button
value: string / undefined
aria-role: checkbox, combobox, link, menuitem, menuitemcheckbox, menuitemradio, option, radio, switch, tab / button (default) / undefined
aria-pressed: true / false / undefined / mixed


PROPS ------------------
Sizes: sm / md (default) / lg / xl / 2xl 

IconPosition: append (default) / prepend

IconOnly: true / false (default)

Icon: react feather icons
- if icon is undefined and iconOnly is false OK
	set to default circle icon

  Dot: true / false (default)
- if iconOnly or iconPosition is defined OK
	dot is ignored

- if iconOnly is true and icon is none OK
	default circle icon is applied

ClassName: string / undefined OK

Destructive: true / false (default)
- if destructive
	all colors are default, unless css variables are customized or styles are passed to button

Disabled: true / false (default) OK

Variant: primary (default) / secondary / secondary-gray / tertiary / tertiary-gray / link / link-gray
- if variant is (link or link-gray) and iconOnly is true
	set variant to primary and show a warning

Styles: CSSProperties / undefined OK

BackgroundColor: undefined (default Brand) / pre-existing colors/HEX

SecondaryColor (appears when focused): undefined (default Brand) / pre-existing colors / HEX
- if secondaryColor is undefined and backgroundColor is defined (preexisting)
	set to backgroundColor to correct shade

Color (text color): undefined (default color) / pre-existing color / HEX

CSS States: default / disabled / hover / focused / 

OnClick: () => void / undefined OK

OnHover: () => void / undefined OK

OnKeyDown: () => void / undefined OK

OnMouseUp: () => void / undefined OK

OnMouseDown: () => void / undefined OK

*/