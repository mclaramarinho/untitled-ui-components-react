import React, { createContext, CSSProperties, useContext, useEffect, useRef, useState } from 'react';
import UntitledButtonProps, { ButtonIconPosition, ButtonSizes, ButtonVariant } from './UntitledButton.types';
import { getColorHEX, getContrastColor, getContrastColorByHEX, getSubToneColor, getSubToneColorByHEX } from '../../utils/colors';
import * as icons from 'react-feather';
import { isUntitledColor, isUntitledColorShades, UntitledColors, UntitledColorShades } from '../../types';
import style from "./UntitledButton.module.scss";

interface UntitledButtonContextType {
	props?: UntitledButtonProps;
	baseClasses?: string;
	textSize?: number;
	shouldAppendIcon?: boolean;
	showIcon?: boolean;
	iconComponent?: icons.Icon;
}

const ButtonContext = createContext<UntitledButtonContextType|undefined>(undefined);


const getBgColorConfig = (state: "disabled" | "hovered" | "default", 
							isDestructive: boolean, 
							colorShadeMap: {[key: string]: number},
							bgColor?: UntitledColors | UntitledColorShades | string,
						) : string => {
	const color = isDestructive ? "error" : 
					!bgColor ? "brand" : 
					bgColor;
	
	if(isDestructive || !bgColor || isUntitledColor(color)){
		return getColorHEX(`${color}-${colorShadeMap[state]}`);
	}
	else if(isUntitledColorShades(bgColor)){
		return getColorHEX(color);
	}
	else{
		return color;
	}
};

const getIconConfig = (icon?: keyof typeof icons, iconPosition?: ButtonIconPosition, iconOnly?: boolean, fontSize?: number, size?: ButtonSizes) : {iconComponent: icons.Icon, shouldAppendIcon: boolean, showIcon: boolean, fontSize: number,} => {
	// Icon component
	const IconComponent = icon ? icons[icon as keyof typeof icons] : icons["Circle"];

	// Icon position
	let shouldAppendIcon = false;
	if(icon && !iconPosition){
		shouldAppendIcon = true;
	}else if(iconPosition && iconPosition === "prepend"){
		shouldAppendIcon = false;
	}else if(iconPosition && iconPosition === "append"){
		shouldAppendIcon = true;
	}else if(iconOnly){
		shouldAppendIcon = true;
	}

	// Show icon?
	const showIcon = (icon || iconPosition || iconOnly) ? true : false;

	// Icon size
	let textSize = 0;
	if(fontSize){
		textSize = fontSize;
	}else{
		if(!size || size === "sm" || size === "md"){
			textSize = 14
		}else if(size === "lg" || size === "xl"){
			textSize = 16;
		}else{
			textSize = 18;
		}
	}

	return {
		iconComponent: IconComponent,
		shouldAppendIcon: shouldAppendIcon,
		showIcon: showIcon,
		fontSize: textSize
	}
}

const getDotColor = (textColor: string, color?: UntitledColors | UntitledColorShades | string) : string => {
	return !color ? textColor : getColorHEX(color);
}

const onHoverAction = (hoverStateSetter: (value: React.SetStateAction<boolean | undefined>) => void, action?: () => void) => {
	hoverStateSetter(true);
	action && action();
}

const onFocusAction = (focusStateSetter: (value: React.SetStateAction<boolean | undefined>) => void, action?: () => void) => {
	focusStateSetter(true);
	action && action();
}

const onUnfocusAction = (unfocusStateSetter: (value: React.SetStateAction<boolean | undefined>) => void, action?: () => void) => {
	unfocusStateSetter(false);
	action && action();
}

const getBaseStyles = (variant: ButtonVariant, isDestructive: boolean, bgColor: string, textColor: string, fontSize?: number) : CSSProperties => {
	
	if(variant === "secondary-gray"){
		return {
			fontSize: fontSize,
			backgroundColor: bgColor,
			color: textColor,
			border: "solid",
			borderWidth: 1,
			borderColor: getColorHEX(isDestructive ? "error-300" :"gray-300") 
		} as CSSProperties;
	}
	
	return {
		fontSize: fontSize,
		backgroundColor: bgColor,
		color: textColor,
		border: "none"
	} as CSSProperties;
}

const validateContext = (ctx?: UntitledButtonContextType) => {
	if(!ctx){
		throw new Error("Child button must be used within a UntitledButton component");
	}

	if(!ctx.props){
		throw new Error("Child button must be used within a UntitledButton component");
	}

	const {props, baseClasses, textSize, shouldAppendIcon, showIcon, iconComponent} = ctx;

	return {props, baseClasses, textSize, shouldAppendIcon, showIcon, iconComponent};
}


// PARENT COMPONENT -------------------------------------------------------------------------------------
const UntitledButton: React.FC<UntitledButtonProps> = (props) => {
	const [baseClasses, setBaseClasses] = useState<string>("");
	const [textSize, setTextSize] = useState<number>(16); // Ou um valor padrão adequado
	const [shouldAppendIcon, setShouldAppendIcon] = useState<boolean>(false);
	const [showIcon, setShowIcon] = useState<boolean>(false);
	const [IconComponentObject, setIconComponentObject] = useState<icons.Icon | null>(null);

	const [ctxData, setCtxData] = useState<UntitledButtonContextType>({props});

	useEffect(() => {
		setBaseClasses(style["untitled-button"] + " " + style[`untitled-button-${props.size ?? "md"}`]);
		setIconConfiguration();

		setCtxData({props, baseClasses, textSize, shouldAppendIcon, showIcon, iconComponent: IconComponentObject ?? undefined});
	}, [props])

	useEffect(() => {
		setCtxData({props, baseClasses, textSize, shouldAppendIcon, showIcon, iconComponent: IconComponentObject ?? undefined});
	}
	, [baseClasses, textSize, shouldAppendIcon, showIcon, IconComponentObject])

	const setIconConfiguration = () => {
		const {iconComponent, shouldAppendIcon, showIcon, fontSize} = getIconConfig(props.icon, props.iconPosition, props.iconOnly, props.fontSize, props.size);

		setIconComponentObject(iconComponent);

		setShouldAppendIcon(shouldAppendIcon);

		setShowIcon(showIcon);

		setTextSize(fontSize);
	}


	return <ButtonContext.Provider value={ctxData}>
		{ (!props.variant || props.variant === "primary") ? <PrimaryButton /> : null }
		{ props.variant === "secondary" ? <SecondaryButton /> : null }
		{ props.variant === "secondary-gray" ? <SecondaryGrayButton /> : null }
		{ props.variant === "tertiary" ? <TertiaryButton /> : null }
		{ props.variant === "tertiary-gray" ? <TertiaryGrayButton /> : null }
		{ props.variant === "link" || props.variant === "link-gray" ? <LinkButton /> : null }
	</ButtonContext.Provider>
};

// CHILD COMPONENT - PRIMARY VARIANT -------------------------------------------------------------------------------------
const PrimaryButton: React.FC = () => {
	const ctx = useContext(ButtonContext);
	try{
		const {props, baseClasses, textSize, shouldAppendIcon, showIcon, iconComponent} = validateContext(ctx);
		const IconComponentObject = iconComponent as icons.Icon;

		// STATES ---------------------------------------------------------------------------------------------
		const buttonRef = useRef<HTMLButtonElement|null>(null);

		const [hovered, setHovered] = useState<boolean>();
		const [focused, setFocused] = useState<boolean>();

		const [styles, setStyles] = useState<CSSProperties>();

		const [secondaryBgColor, setSecondaryBgColor] = useState<string>();
		const [dotColor, setDotColor] = useState<string>();

		const [textColor, setTextColor] = useState<string>();

		// CONSTANTS -----------------------------------------------------------------------------------------
		const BG_COLOR_SHADE = {
			"disabled": 200,
			"hovered": 600,
			"default": 600
		}

		// HOOKS ---------------------------------------------------------------------------------------------
		useEffect(() => resetButtonProperties(), [props]);

		useEffect(() => {
			if(buttonRef.current){
				const PRIMARY_SHADOW = `0px 0px 0px 4px ${secondaryBgColor}, 0px 1px 2px 0px #0A0D120D`;
				buttonRef.current.style.boxShadow = focused ? PRIMARY_SHADOW : "none";
			}
		}, [focused])

		useEffect(() => resetButtonProperties(), [hovered]);

		// AUXILIARY -----------------------------------------------------------------------------------------
		const resetButtonProperties = () => {
			const bgColorTemp = setBgColorConfig();

			const textColorTemp = setTextColorConfig();
			setTextColor(textColorTemp);

			setSecondaryBgColorConfig(bgColorTemp);

			setDotColor(getDotColor(textColorTemp, props.dotColor));

			const baseStyles = getBaseStyles("primary", props.destructive??false, bgColorTemp, textColorTemp, props.fontSize);
			setStyles({...props.styles ?? baseStyles});
		}

		const setBgColorConfig = () : string => {
			const state = props.disabled ? "disabled" : hovered ? "hovered" : "default";
			return getBgColorConfig(state, props.destructive??false, BG_COLOR_SHADE, props.bgColor);
		};
		
		const setTextColorConfig = () : string => {
			return !props.color ? "#FFFFFF" : getColorHEX(props.color);
		}

		const setSecondaryBgColorConfig = (bgColorTemp: string) => {
			let secondary = "";
			if(!props.secondaryBgColor){
				secondary = props.destructive ? getColorHEX("error-200")
							: (isUntitledColor(props.bgColor) || isUntitledColorShades(props.bgColor)) ? getSubToneColor(props.bgColor)
							: getSubToneColorByHEX(bgColorTemp);
			}
			else{
				secondary = getColorHEX(props.secondaryBgColor);
			}

			setSecondaryBgColor(secondary);
		}

		return <button ref={buttonRef} id={props.id} name={props.name} disabled={props.disabled ?? false}
				className={(props.class ?? "") + " " + baseClasses} ui-variant={props.variant}
				type={props.type ?? "button"} value={props.value} formMethod={props.formMethod}
				role={props.role ?? "button"} aria-pressed={props.ariaPressed ?? false} 
				style={styles}

				onMouseEnter={() => onHoverAction(setHovered, props.onHover)} 
				onMouseLeave={() => setHovered(false)}

				onKeyDown={() => onFocusAction(setFocused, props.onKeyDown)} 
				onKeyUp={() => onUnfocusAction(setFocused)}

				onMouseDown={() => onFocusAction(setFocused, props.onMouseDown)}
				onMouseUp={() => onUnfocusAction(setFocused, props.onMouseUp)} 
		>
			{!showIcon && props.dot ? 
				<span style={{color: dotColor, fontSize: textSize}}>
					●
				</span> 
			: ""}
			
			{(showIcon && !shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}

			{props.iconOnly ? null : props.text}
			
			{(showIcon && shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}
		</button>
	}catch(ex){
		throw ex;
	}
}

// CHILD COMPONENT - SECONDARY VARIANT -------------------------------------------------------------------------------------
const SecondaryButton: React.FC = () => {
	const ctx = useContext(ButtonContext);
	
	try{
		const {props, baseClasses, textSize, shouldAppendIcon, showIcon, iconComponent} = validateContext(ctx);
		const IconComponentObject = iconComponent as icons.Icon;

		// STATES ---------------------------------------------------------------------------------------------
		const buttonRef = useRef<HTMLButtonElement|null>(null);

		const [hovered, setHovered] = useState<boolean>();
		const [focused, setFocused] = useState<boolean>();

		const [styles, setStyles] = useState<CSSProperties>();

		const [secondaryBgColor, setSecondaryBgColor] = useState<string>();
		const [dotColor, setDotColor] = useState<string>();

		const [textColor, setTextColor] = useState<string>();

		// CONSTANTS -----------------------------------------------------------------------------------------
		const BG_COLOR_SHADE = {
			"disabled": 25,
			"hovered": 100,
			"default": 50
		}
		const TEXT_COLOR_SHADE: {[key:string]: number} = {
			"disabled": 300,
			"hovered": 700,
			"default": 700
		}
		

		// HOOKS ---------------------------------------------------------------------------------------------
		useEffect(() => resetButtonProperties(), [props]);

		useEffect(() => {
			if(buttonRef.current){
				const SECONDARY_SHADOW = `0px 0px 0px 4px ${secondaryBgColor}, 0px 1px 2px 0px #0A0D120D`;
				buttonRef.current.style.boxShadow = focused ? SECONDARY_SHADOW : "none";
			}
			resetButtonProperties()
		}, [focused])

		useEffect(() => resetButtonProperties(), [hovered]);

		// AUXILIARY -----------------------------------------------------------------------------------------
		const resetButtonProperties = () => {
			const bgColorTemp = setBgColorConfig();

			const textColorTemp = setTextColorConfig(bgColorTemp);
			setTextColor(textColorTemp);

			setSecondaryBgColorConfig(bgColorTemp);

			setDotColor(getDotColor(textColorTemp, props.dotColor));

			const baseStyles = getBaseStyles("secondary", props.destructive??false, bgColorTemp, textColorTemp, props.fontSize);
			setStyles({...props.styles ?? baseStyles});
		}

		const setBgColorConfig = () : string => {
			const state = props.disabled ? "disabled" : focused ? "default" : hovered ? "hovered" : "default";
			return getBgColorConfig(state, props.destructive??false, BG_COLOR_SHADE, props.bgColor);
		};
		
		const setTextColorConfig = (bgColorTemp: string) : string => {
			const state:string = props.disabled ? "disabled" : hovered ? "hovered" : "default";
			if(props.destructive){
				return getColorHEX(`error-${TEXT_COLOR_SHADE[state]}`);
			}

			if(!props.color){
				const isUntitled = isUntitledColor(props.bgColor);
				const isShade = isUntitledColorShades(props.bgColor);

				if(isUntitled){
					return getColorHEX(`${props.bgColor}-${TEXT_COLOR_SHADE[state]}`);
				}
				else if(isShade){
					return getContrastColor(props.bgColor as UntitledColorShades);
				}
				else{
					if(bgColorTemp){
						return getContrastColorByHEX(bgColorTemp);
					}else{
						return getColorHEX(`brand-${TEXT_COLOR_SHADE[state]}`);
					}
				}
			}else{
				return getColorHEX(props.color);
			}
		}

		const setSecondaryBgColorConfig = (bgColorTemp: string) => {
			let secondary = "";
			if(!props.secondaryBgColor){
				if(props.destructive){
					secondary = "error-100";
				}else if(isUntitledColor(props.bgColor)){
					secondary = getColorHEX(`${props.bgColor}-100`);
				}else if(isUntitledColorShades(props.bgColor)){
					secondary = getSubToneColor(props.bgColor);
				}else{
					secondary = getSubToneColorByHEX(bgColorTemp);
				}
			}
			else{
				secondary = getColorHEX(props.secondaryBgColor);
			}

			setSecondaryBgColor(secondary);
		}

		return <button ref={buttonRef} id={props.id} name={props.name} disabled={props.disabled ?? false}
				className={(props.class ?? "") + " " + baseClasses} ui-variant={props.variant}
				type={props.type ?? "button"} value={props.value} formMethod={props.formMethod}
				role={props.role ?? "button"} aria-pressed={props.ariaPressed ?? false} 
				style={styles}

				onMouseEnter={() => onHoverAction(setHovered, props.onHover)} 
				onMouseLeave={() => setHovered(false)}

				onKeyDown={() => onFocusAction(setFocused, props.onKeyDown)} 
				onKeyUp={() => onUnfocusAction(setFocused)}

				onMouseDown={() => onFocusAction(setFocused, props.onMouseDown)}
				onMouseUp={() => onUnfocusAction(setFocused, props.onMouseUp)} 
		>
			{!showIcon && props.dot ? 
				<span style={{color: dotColor, fontSize: textSize}}>
					●
				</span> 
			: ""}
			
			{(showIcon && !shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}

			{props.iconOnly ? null : props.text}
			
			{(showIcon && shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}
		</button>
	}catch(ex){
		throw ex;
	}
}

// CHILD COMPONENT - SECONDARY GRAY VARIANT -------------------------------------------------------------------------------------
const SecondaryGrayButton: React.FC = () => {
	const ctx = useContext(ButtonContext);
	
	try{
		const {props, baseClasses, textSize, shouldAppendIcon, showIcon, iconComponent} = validateContext(ctx);
		const IconComponentObject = iconComponent as icons.Icon;

		// STATES ---------------------------------------------------------------------------------------------
		const buttonRef = useRef<HTMLButtonElement|null>(null);

		const [hovered, setHovered] = useState<boolean>();
		const [focused, setFocused] = useState<boolean>();

		const [styles, setStyles] = useState<CSSProperties>();

		const [secondaryBgColor, setSecondaryBgColor] = useState<string>();
		const [dotColor, setDotColor] = useState<string>();

		const [textColor, setTextColor] = useState<string>();

		// CONSTANTS -----------------------------------------------------------------------------------------
		const BG_COLOR_SHADE = {
			"disabled": 0,
			"hovered": 50,
			"default": 0
		}
		const TEXT_COLOR_SHADE: {[key:string]: number} = {
			"disabled": 300,
			"hovered": 800,
			"default": 700
		}

		// HOOKS ---------------------------------------------------------------------------------------------
		useEffect(() => resetButtonProperties(), [props]);

		useEffect(() => {
			if(buttonRef.current){
				const SECONDARY_GRAY_SHADOW = `0px 1px 2px 0px #0A0D120D, 0px 0px 0px 4px ${secondaryBgColor}`;
				buttonRef.current.style.boxShadow = focused ? SECONDARY_GRAY_SHADOW : "none";
			}
		}, [focused])

		useEffect(() => resetButtonProperties(), [hovered]);

		// AUXILIARY -----------------------------------------------------------------------------------------
		const resetButtonProperties = () => {
			const bgColorTemp = setBgColorConfig();

			const textColorTemp = setTextColorConfig();
			setTextColor(textColorTemp);

			setSecondaryBgColorConfig(bgColorTemp);

			setDotColor(getDotColor(textColorTemp, props.dotColor));

			const baseStyles = getBaseStyles("secondary-gray", props.destructive??false, bgColorTemp, textColorTemp, props.fontSize);
			setStyles({...props.styles ?? baseStyles});
		}

		const setBgColorConfig = () : string => {
			if(props.disabled){
				return "transparent";
			}else if(hovered){
				const shade = BG_COLOR_SHADE["hovered"];
				const colorName = props.destructive ? "error" : "gray";
				return getColorHEX(colorName+"-"+shade);
			}else{
				return "transparent";
			}
		};

		const setTextColorConfig = () : string => {
			const state:string = props.disabled ? "disabled" : hovered ? "hovered" : "default";
			if(props.destructive){
				return getColorHEX(`error-${TEXT_COLOR_SHADE[state]}`);
			}

			if(!props.color){
				return getColorHEX(`gray-${TEXT_COLOR_SHADE[state]}`);
			}else{
				return getColorHEX(props.color);
			}
		}

		const setSecondaryBgColorConfig = (bgColorTemp: string) => {
			let secondary = "";
			if(bgColorTemp === "transparent"){
				bgColorTemp = "#FFFFFF";
			}

			if(props.destructive){
				secondary = getColorHEX("error-200");
			}
			else if(!props.secondaryBgColor){
				secondary = getColorHEX(`gray-100`);
			}else{
				if(isUntitledColor(props.secondaryBgColor)){
					secondary = getColorHEX(`${props.secondaryBgColor}-100`);
				}
				else if(isUntitledColorShades(props.secondaryBgColor)){
					secondary = getSubToneColor(props.secondaryBgColor);
				}
				else{
					secondary = getColorHEX(props.secondaryBgColor);
				}
			}

			setSecondaryBgColor(secondary);
		}

		return <button ref={buttonRef} id={props.id} name={props.name} disabled={props.disabled ?? false}
				className={(props.class ?? "") + " " + baseClasses} ui-variant={props.variant}
				type={props.type ?? "button"} value={props.value} formMethod={props.formMethod}
				role={props.role ?? "button"} aria-pressed={props.ariaPressed ?? false} 
				style={styles}

				onMouseEnter={() => onHoverAction(setHovered, props.onHover)} 
				onMouseLeave={() => setHovered(false)}

				onKeyDown={() => onFocusAction(setFocused, props.onKeyDown)} 
				onKeyUp={() => onUnfocusAction(setFocused)}

				onMouseDown={() => onFocusAction(setFocused, props.onMouseDown)}
				onMouseUp={() => onUnfocusAction(setFocused, props.onMouseUp)}

		>
			{!showIcon && props.dot ? 
				<span style={{color: dotColor, fontSize: textSize}}>
					●
				</span> 
			: ""}
			
			{(showIcon && !shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}

			{props.iconOnly ? null : props.text}
			
			{(showIcon && shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}
		</button>
	}catch(ex){
		throw ex;
	}
}

// CHILD COMPONENT - TERTIARY VARIANT -------------------------------------------------------------------------------------
const TertiaryButton: React.FC = () => {
	const ctx = useContext(ButtonContext);
	
	try{
		const {props, baseClasses, textSize, shouldAppendIcon, showIcon, iconComponent} = validateContext(ctx);
		const IconComponentObject = iconComponent as icons.Icon;

		// STATES ---------------------------------------------------------------------------------------------
		const buttonRef = useRef<HTMLButtonElement|null>(null);

		const [hovered, setHovered] = useState<boolean>();
		
		const [focused, setFocused] = useState<boolean>();

		const [styles, setStyles] = useState<CSSProperties>();

		const [dotColor, setDotColor] = useState<string>();

		const [textColor, setTextColor] = useState<string>();

		// CONSTANTS -----------------------------------------------------------------------------------------
		const BG_COLOR_SHADE: {[key:string]: number} = {
			"disabled": 0,
			"hovered": 50,
			"default": 0
		}
		const TEXT_COLOR_SHADE: {[key:string]: number} = {
			"disabled": 300,
			"hovered": 700,
			"default": 700
		}

		// HOOKS ---------------------------------------------------------------------------------------------
		useEffect(() => resetButtonProperties(), [props]);
		useEffect(() => resetButtonProperties(), [hovered, focused]);

		// AUXILIARY -----------------------------------------------------------------------------------------
		const resetButtonProperties = () => {
			const bgColorTemp = setBgColorConfig();

			const textColorTemp = setTextColorConfig();
			setTextColor(textColorTemp);

			setDotColor(getDotColor(textColorTemp, props.dotColor));

			const baseStyles = getBaseStyles("tertiary", props.destructive??false, bgColorTemp, textColorTemp, props.fontSize);
			setStyles({...props.styles ?? baseStyles});
		}

		const setBgColorConfig = () : string => {
			if(hovered && !focused){
				if(props.destructive){
					return getColorHEX(`error-${BG_COLOR_SHADE["hovered"]}`);
				}

				if(!props.bgColor){
					return getColorHEX(`brand-${BG_COLOR_SHADE["hovered"]}`);
				}
				else if(isUntitledColor(props.bgColor)){
					return getColorHEX(`${props.bgColor}-${BG_COLOR_SHADE["hovered"]}`);
				}
				else{
					return getColorHEX(props.bgColor);
				}
			}else{
				return "transparent";
			}
		};

		const setTextColorConfig = () : string => {
			const state:string = props.disabled ? "disabled" : hovered ? "hovered" : "default";
			if(props.destructive){
				return getColorHEX(`error-${TEXT_COLOR_SHADE[state]}`);
			}

			if(!props.color){
				if(isUntitledColor(props.bgColor)){
					return getColorHEX(`${props.bgColor}-${TEXT_COLOR_SHADE[state]}`);
				}
				else if(isUntitledColorShades(props.bgColor)){
					return getContrastColor(props.bgColor as UntitledColorShades);
				}
				else{
					if(hovered){
						return props.bgColor ? getContrastColorByHEX(props.bgColor) : getColorHEX(`brand-${TEXT_COLOR_SHADE[state]}`);
					}else{
						return getColorHEX(props.bgColor);
					}
				}
			}else{
				return getColorHEX(props.color);
			}
		}


		return <button ref={buttonRef} id={props.id} name={props.name} disabled={props.disabled ?? false}
				className={(props.class ?? "") + " " + baseClasses} ui-variant={props.variant}
				type={props.type ?? "button"} value={props.value} formMethod={props.formMethod}
				role={props.role ?? "button"} aria-pressed={props.ariaPressed ?? false} 
				style={styles}

				onMouseEnter={() => onHoverAction(setHovered, props.onHover)} 
				onMouseLeave={() => setHovered(false)}

				onKeyDown={props.onKeyDown} 

				onMouseDown={() => onFocusAction(setFocused, props.onMouseDown)}
				onMouseUp={() => onUnfocusAction(setFocused, props.onMouseUp)} 
		>
			{!showIcon && props.dot ? 
				<span style={{color: dotColor, fontSize: textSize}}>
					●
				</span> 
			: ""}
			
			{(showIcon && !shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}

			{props.iconOnly ? null : props.text}
			
			{(showIcon && shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}
		</button>
	}catch(ex){
		throw ex;
	}
}

// // CHILD COMPONENT - TERTIARY GRAY VARIANT -------------------------------------------------------------------------------------
const TertiaryGrayButton: React.FC = () => {
	const ctx = useContext(ButtonContext);
	
	try{
		const {props, baseClasses, textSize, shouldAppendIcon, showIcon, iconComponent} = validateContext(ctx);
		const IconComponentObject = iconComponent as icons.Icon;

		// STATES ---------------------------------------------------------------------------------------------
		const buttonRef = useRef<HTMLButtonElement|null>(null);

		const [hovered, setHovered] = useState<boolean>();
		
		const [focused, setFocused] = useState<boolean>();

		const [styles, setStyles] = useState<CSSProperties>();

		const [dotColor, setDotColor] = useState<string>();

		const [textColor, setTextColor] = useState<string>();

		// CONSTANTS -----------------------------------------------------------------------------------------
		const BG_COLOR_SHADE: {[key:string]: number} = {
			"disabled": 0,
			"hovered": 50,
			"default": 0
		}
		const TEXT_COLOR_SHADE: {[key:string]: number} = {
			"disabled": 300,
			"hovered": 700,
			"default": 600
		}

		// HOOKS ---------------------------------------------------------------------------------------------
		useEffect(() => resetButtonProperties(), [props]);
		useEffect(() => resetButtonProperties(), [hovered, focused]);

		// AUXILIARY -----------------------------------------------------------------------------------------
		const resetButtonProperties = () => {
			const bgColorTemp = setBgColorConfig();

			const textColorTemp = setTextColorConfig();
			setTextColor(textColorTemp);

			setDotColor(getDotColor(textColorTemp, props.dotColor));

			const baseStyles = getBaseStyles("tertiary-gray", props.destructive??false, bgColorTemp, textColorTemp, props.fontSize);
			setStyles({...props.styles ?? baseStyles});
		}

		const setBgColorConfig = () : string => {
			if(hovered && !focused){
				if(props.destructive){
					return getColorHEX(`error-${BG_COLOR_SHADE["hovered"]}`);
				}
				return getColorHEX(`gray-${BG_COLOR_SHADE["hovered"]}`);
			}else{
				return "transparent";
			}
		};

		const setTextColorConfig = () : string => {
			const state:string = props.disabled ? "disabled" : focused ? "default" : hovered ? "hovered" : "default";
			if(props.destructive){
				return getColorHEX(`error-${TEXT_COLOR_SHADE[state]}`);
			}

			return getColorHEX(`gray-${TEXT_COLOR_SHADE[state]}`);
		}


		return <button ref={buttonRef} id={props.id} name={props.name} disabled={props.disabled ?? false}
				className={(props.class ?? "") + " " + baseClasses} ui-variant={props.variant}
				type={props.type ?? "button"} value={props.value} formMethod={props.formMethod}
				role={props.role ?? "button"} aria-pressed={props.ariaPressed ?? false} 
				style={styles}

				onMouseEnter={() => onHoverAction(setHovered, props.onHover)} 
				onMouseLeave={() => setHovered(false)}

				onKeyDown={props.onKeyDown} 

				onMouseDown={() => onFocusAction(setFocused, props.onMouseDown)}
				onMouseUp={() => onUnfocusAction(setFocused, props.onMouseUp)} 
		>
			{!showIcon && props.dot ? 
				<span style={{color: dotColor, fontSize: textSize}}>
					●
				</span> 
			: ""}
			
			{(showIcon && !shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}

			{props.iconOnly ? null : props.text}
			
			{(showIcon && shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}
		</button>
	}catch(ex){
		throw ex;
	}
}

// // CHILD COMPONENT - LINK VARIANT -------------------------------------------------------------------------------------
const LinkButton: React.FC = () => {
	const ctx = useContext(ButtonContext);
	
	try{
		const {props, baseClasses, textSize, shouldAppendIcon, showIcon, iconComponent} = validateContext(ctx);
		const IconComponentObject = iconComponent as icons.Icon;

		// STATES ---------------------------------------------------------------------------------------------
		const buttonRef = useRef<HTMLButtonElement|null>(null);

		const [hovered, setHovered] = useState<boolean>();
		
		const [focused, setFocused] = useState<boolean>();

		const [styles, setStyles] = useState<CSSProperties>();

		const [dotColor, setDotColor] = useState<string>();

		const [textColor, setTextColor] = useState<string>();

		// CONSTANTS -----------------------------------------------------------------------------------------
		const TEXT_COLOR_SHADE: {[key:string]: number} = {
			"disabled": 300,
			"hovered": 800,
			"default": 700
		}

		// HOOKS ---------------------------------------------------------------------------------------------
		useEffect(() => resetButtonProperties(), [props]);
		useEffect(() => resetButtonProperties(), [hovered, focused]);

		// AUXILIARY -----------------------------------------------------------------------------------------
		const resetButtonProperties = () => {
			const textColorTemp = setTextColorConfig();
			setTextColor(textColorTemp);

			setDotColor(getDotColor(textColorTemp, props.dotColor));

			const baseStyles = getBaseStyles(props.variant!, props.destructive??false, "transparent", textColorTemp, props.fontSize);
			setStyles({...props.styles ?? baseStyles});
		}

		const setTextColorConfig = () : string => {
			const state:string = props.disabled ? "disabled" : focused ? "default" : hovered ? "hovered" : "default";
			if(props.destructive){
				return getColorHEX(`error-${TEXT_COLOR_SHADE[state]}`);
			}

			if(props.variant === "link"){
				if(!props.color){
					return getColorHEX(`brand-${TEXT_COLOR_SHADE[state]}`);
				}else{
					return getColorHEX(props.color);
				}
			}

			return getColorHEX(`gray-${TEXT_COLOR_SHADE[state]}`);
		}

		const onFocused = (action?: () => void) => {
			setFocused(true);
			
			if(props.url){
				if(props.url.startsWith("http://") || props.url.startsWith("https://")){
					window.open(props.url, "_blank");
				}else{
					window.open(`https://${props.url}`, "_blank");
				}
			}

			action && action();
		}

		const onUnfocused = (action?: () => void) => {
			setFocused(false);
			action && action();
		}


		return <button ref={buttonRef} id={props.id} disabled={props.disabled ?? false}
				className={(props.class ?? "") + " " + baseClasses} ui-variant={props.variant}
				type={"button"} role="link" aria-pressed={props.ariaPressed ?? false} 
				style={styles}

				onMouseEnter={() => onHoverAction(setHovered, props.onHover)} 
				onMouseLeave={() => setHovered(false)}

				onKeyDown={props.onKeyDown}

				onMouseDown={() => onFocused(props.onMouseDown)}
				onMouseUp={() => onUnfocused(props.onMouseUp)} 
		>
			{!showIcon && props.dot ? 
				<span style={{color: dotColor, fontSize: textSize}}>
					●
				</span> 
			: ""}
			
			{(showIcon && !shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}

			{props.iconOnly ? null : props.text}
			
			{(showIcon && shouldAppendIcon) ? <IconComponentObject size={textSize} color={textColor} /> : null}
		</button>
	}catch(ex){
		throw ex;
	}
}


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