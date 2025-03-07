import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import UntitledButtonProps from './UntitledButton.types';
import { getColorHEX, getContrastColor, getContrastColorByHEX, getSubToneColor, getSubToneColorByHEX } from '../../utils/colors';
import * as icons from 'react-feather';
import { isUntitledColor, isUntitledColorShades } from '../../types';
import style from "./UntitledButton.module.scss";




const UntitledButton: React.FC<UntitledButtonProps> = (props) => {
	const [styles, setStyles] = useState<CSSProperties>();

	const [baseClasses, setBaseClasses] = useState<string>();

	const [secondaryBgColor, setSecondaryBgColor] = useState<string>();

	const [textColor, setTextColor] = useState<string>();
	const [textSize, setTextSize] = useState<number>();
	
	const [dotColor, setDotColor] = useState<string>();
	
	const [shouldAppendIcon, setShouldAppendIcon] = useState<boolean>();
	const [showIcon, setShowIcon] = useState<boolean>();
	const [IconComponentObject, setIconComponentObject] = useState<icons.Icon>();

	const [focused, setFocused] = useState<boolean>();
	const [hovered, setHovered] = useState<boolean>();

	const buttonRef = useRef<HTMLButtonElement|null>(null);
	
// HOOKS ---------------------------------------------------------------------------------------------
	useEffect(() => {
		resetButtonProperties();
	}, [props])

	
	useEffect(() => {
		if(buttonRef.current){
			if(props.variant && !["primary", "secondary", "secondary-gray"].includes(props.variant)){
				return;
			}
			
			const PRIMARY_SHADOW = `0px 0px 0px 4px ${secondaryBgColor}, 0px 1px 2px 0px #0A0D120D`;
			const SECONDARY_SHADOW = `0px 0px 0px 4px ${secondaryBgColor}, 0px 1px 2px 0px #0A0D120D`;
			const SECONDARY_GRAY_SHADOW = `0px 1px 2px 0px #0A0D120D, 0px 0px 0px 4px ${secondaryBgColor}`;

			// console.log(secondaryBgColor)
			
			const shadow = (!props.variant || props.variant === "primary") ? PRIMARY_SHADOW 
							: props.variant === "secondary" ? SECONDARY_SHADOW 
							: props.variant === "secondary-gray" ? SECONDARY_GRAY_SHADOW
							: "none";
			
			buttonRef.current.style.boxShadow = focused ? shadow : "none";
		}
	}, [focused])

	useEffect(() => {
		resetButtonProperties();
	}, [hovered])

// AUXILIARY -----------------------------------------------------------------------------------------
	const resetButtonProperties = () => {
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
		const baseStyles = {
			fontSize: props.fontSize,
			backgroundColor: bgColorTemp,
			color: textColorTemp,
			...setBorderColor(),
		} as CSSProperties;
		console.log({...props.styles ?? baseStyles})
		setStyles({...props.styles ?? baseStyles})
	}

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

	// SETS BORDER COLOR FOR THE BUTTON
	const setBorderColor = () : CSSProperties => {
		if(props.variant === "secondary-gray"){
			return {
				border: "solid",
				borderWidth: 1,
				borderColor:getColorHEX(props.destructive ? "error-300" :"gray-300") 
			}
		}else {
			return {
				border: "none"
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

	// SETS THE SECONDARY BACKGOUND COLOR FOR THE BUTTON (USED ON ACTIVE AND FOCUSED STATES)
	const setSecondaryBgColorConfig = (bgColorTemp: string) => {
		if(bgColorTemp === "transparent"){
			bgColorTemp = "#FFFFFF";
		}
		let secondary = "";
		// console.log("bgColorTemp", bgColorTemp)

		if(!props.secondaryBgColor){
			// infer color by background color
			if(props.destructive){
				if(!props.variant || props.variant === "primary"){
					secondary = getColorHEX("error-200");
				}
				else if(props.variant === "secondary"){
					secondary = getColorHEX("error-100");
				}
				else if(props.variant === "secondary-gray"){
					secondary = getColorHEX("error-200");
				}
				else if(props.variant === "tertiary" || props.variant === "tertiary-gray"){
					secondary = getColorHEX("error-50");
				}
			}
			else if(isUntitledColor(props.bgColor) || isUntitledColorShades(props.bgColor)){
				// console.log("is untitled")
				secondary = getSubToneColor(props.bgColor);
			}else{
				// console.log("is not untitled")
				secondary = getSubToneColorByHEX(bgColorTemp);
			}
		}else{
			secondary = getColorHEX(props.secondaryBgColor);
		}
		// console.log("secondary", secondary)
		setSecondaryBgColor(secondary);
	}

	const setTextColorBasedOnVariant = () : string => {
		if(!props.variant || props.variant === "primary"){
			return "#FFFFFF";
		}

		if (props.destructive){
			return props.disabled ? getColorHEX("error-300") : getColorHEX("error-700");
		}

		const colorStateByVariantMap: {[key: string]: { [state: string]: string }} = {
			"link-gray": {
				"disabled": getColorHEX("gray-300"),
				"hovered": getColorHEX("gray-700"),
				"default": getColorHEX("gray-600")
			},
			"link": {
				"disabled": getColorHEX("gray-300"),
				"hovered": getColorHEX("brand-800"),
				"default": getColorHEX("brand-700")
			},
			"tertiary-gray": {
				"disabled": getColorHEX("gray-300"),
				"hovered": getColorHEX("gray-700"),
				"default": getColorHEX("brand-600")
			},
			"tertiary": {
				"disabled": getColorHEX("gray-300"),
				"hovered": getColorHEX("brand-700"),
				"default": getColorHEX("brand-700")
			},
			"secondary-gray": {
				"disabled": getColorHEX("gray-300"),
				"hovered": getColorHEX("gray-800"),
				"default": getColorHEX("brand-700")
			},
			"secondary": {
				"disabled": getColorHEX("brand-300"),
				"hovered": getColorHEX("brand-700"),
				"default": getColorHEX("brand-700")
			},
		}
		const state:string = props.disabled ? "disabled" : hovered ? "hovered" : "default";
		return colorStateByVariantMap[props.variant][state] ?? getColorHEX("gray-600");
	}

	// SETS THE TEXT COLOR BASED ON props.color or infers by the background color
	const setTextColorConfig = (bgColorTemp: string) : string => {
		if(bgColorTemp === "transparent"){
			bgColorTemp = "#FFFFFF";
		}
		let textColorTemp = "";
		if(!props.color){
			// infer color by background color
			if(isUntitledColor(props.bgColor) || isUntitledColorShades(props.bgColor)){
				console.log("is untitled")
				textColorTemp = getContrastColor(props.bgColor);
			}else{
				if(props.bgColor){
					textColorTemp = getContrastColorByHEX(bgColorTemp);
				}else{
					textColorTemp = setTextColorBasedOnVariant();				
				}
			}
		}else{
			textColorTemp = getColorHEX(props.color);
		}
		setTextColor(textColorTemp);

		return textColorTemp;
	}

	const setBgColorBasedOnVariant = () => {
		const map : {[key: string]: { [state: string]: string }} = {
			"link-gray": {
				"disabled": "transparent",
				"hovered": "transparent",
				"default": "transparent"
			},
			"link": {
				"disabled": "transparent",
				"hovered": "transparent",
				"default": "transparent"
			},
			"tertiary-gray": {
				"disabled": "transparent",
				"hovered": getColorHEX("gray-50"),
				"default": "transparent"
			},
			"tertiary": {
				"disabled": "transparent",
				"hovered": getColorHEX("brand-50"),
				"default": "transparent"
			},
			"secondary-gray": {
				"disabled": "transparent",
				"hovered": getColorHEX("gray-50"),
				"default": "transparent"
			},
			"secondary": {
				"disabled": getColorHEX("gray-25"),
				"hovered": getColorHEX("brand-100"),
				"default": getColorHEX("brand-50"),
			},
			"primary": {
				"disabled": getColorHEX("brand-200"),
				"hovered": getColorHEX("brand-600"),
				"default": getColorHEX("brand-600")
			}
		}

		const mapDestructive : {[key: string]: { [state: string]: string }} = {
			"link-gray": {
				"disabled": "transparent",
				"hovered":  "transparent",
				"default": "transparent"
			},
			"link": {
				"disabled": "transparent",
				"hovered":  "transparent",
				"default": "transparent"
			},
			"tertiary-gray": {
				"disabled": "transparent",
				"hovered": getColorHEX("error-50"),
				"default": "transparent"
			},
			"tertiary": {
				"disabled": "transparent",
				"hovered": getColorHEX("error-50"),
				"default": "transparent"
			},
			"secondary-gray": {
				"disabled": "transparent",
				"hovered": getColorHEX("error-50"),
				"default": "transparent"
			},
			"secondary": {
				"disabled": getColorHEX("error-25"),
				"hovered": getColorHEX("error-100"),
				"default": getColorHEX("error-50")
			},
			"primary": {
				"disabled": getColorHEX("error-200"),
				"hovered": getColorHEX("error-700"),
				"default": getColorHEX("error-600")
			}
		}

		if(props.destructive){
			return mapDestructive[props.variant ?? "primary"][props.disabled ? "disabled" : hovered ? "hovered" : "default"];
		}else{
			return map[props.variant ?? "primary"][props.disabled ? "disabled" : hovered ? "hovered" : "default"];
		}
	}

	// SETS THE BACKGROUND COLOR - BASED ON: props.bgColor, props.variant, props.destructive
	const setBgColorConfig = () : string => {
		let bgColorTemp = "";

		if(!props.bgColor || props.destructive){
			bgColorTemp = setBgColorBasedOnVariant();
		}else{
			bgColorTemp = getColorHEX(props.bgColor);
		}
		return bgColorTemp;
	}

	const setBaseClassNames = () => {
		let classes = style["untitled-button"] + " ";
		
		let sizeClassName = "untitled-button-";
		sizeClassName += props.size ?? "md";
		classes += style[sizeClassName];

		setBaseClasses(classes);
	}

	// DECIDES IF CAN SHOW OR NOT THE CONTAINER AROUND THE BUTTON (SECONDARY COLORED BACKGROUND)
	const canShowShadowContainer = () => {
		const v = props.variant;
		return v === "primary" || v === "secondary" || v === "secondary-gray" || v === "tertiary" || v === "tertiary-gray";
	}

// EVENTS --------------------------------------------------------------------------------------------
	const onFocusAction = (action?: () => void) => {
		setFocused(canShowShadowContainer);
		action && action();
	}

	const onUnfocusAction = (action?: () => void) => {
		setFocused(false);
		action && action();
	}

	const onHoverAction = (action?: () => void) => {
		setHovered(true);
		action && action();
	}




  	return <button ref={buttonRef}
		 id={props.id} className={(props.class ?? "") + " " + baseClasses} ui-variant={props.variant ?? "primary"}
			 name={props.name} type={props.type ?? "button"} value={props.value} formMethod={props.formMethod}
			 role={props.role ?? "button"} aria-pressed={props.ariaPressed ?? false} disabled={props.disabled ?? false}
			 style={styles}

			 onMouseEnter={() => onHoverAction(props.onHover)} 
			 onMouseLeave={() => setHovered(false)}

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
	;
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