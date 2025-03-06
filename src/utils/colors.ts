import { isUntitledColor, isUntitledColorShades, UntitledColors, UntitledColorShades, UntitledColorsList } from "../types";
import Logger from "./Logger";

export const getColorHEX = (colorValue?: string | UntitledColorShades | UntitledColors ) => {
    if(!colorValue)
        return UntitledColorsList.AllColors["brand"].shades["500"].hex;

    if(isUntitledColor(colorValue))
        return UntitledColorsList.AllColors[colorValue].shades["500"].hex;

    if(isUntitledColorShades(colorValue)){
        const colorTyped = colorValue as UntitledColorShades;
        const [color, shade] = colorTyped.split("-");
        return UntitledColorsList.AllColors[color].shades[shade].hex; 
    }

    return colorValue;
}

export type DarkOrLight = "dark" | "light";

export const isDarkOrLightColor = (colorHEX: string) : DarkOrLight => {
    try{
        // Remove the '#' if present
        const hex = colorHEX.replace(/^#/, "");

        // Convert hex to RGB
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // Calculate luminance using the YIQ formula
        const luminance = (r * 0.299 + g * 0.587 + b * 0.114);

        // Return black text for light backgrounds, white text for dark backgrounds
        return luminance >= 128 ? "light" : "dark";
    }catch(ex){
        Logger.error("isDarkOrLightColor - Could not read HEX code. Returning default luminance type.");
        return "dark";
    }
    
} 

export const getContrastColorByHEX = (colorHEX: string) : string => {
   const colorLuminance: DarkOrLight = isDarkOrLightColor(colorHEX);
   return colorLuminance === "dark" ? "#FFFFFF" : "#000000";
}

export const getContrastColor = (color: UntitledColors | UntitledColorShades) : string => {
    
    if(isUntitledColor(color)){
        // shade = 500
        const colorShade = color + "-100";
        return getColorHEX(colorShade);
    }
    else if(isUntitledColorShades(color)){
        const [c, shade] = color.toString().split("-");
        let colorShade = c;
        if(parseInt(shade) >= 500){
            colorShade += "-100";
        }else{
            colorShade += "-800";
        }

        return getColorHEX(colorShade);
    }
    else {
        let message = "Invalid color type."
        if(typeof color === "string"){
            message += " Please use getContrastColorByHEX function.";
        }

        throw message;
    }
}

export const getSubToneColorByHEX = (colorHEX: string) : string => {
    const colorLuminance: DarkOrLight = isDarkOrLightColor(colorHEX);
    return colorLuminance === "dark" ? "#FFFFFF4C" : "#0000004C";
}
 
export const getSubToneColor = (color: UntitledColors | UntitledColorShades) : string => {
    
    if(isUntitledColor(color)){
        // shade = 500
        const colorShade = color + "-300";
        return getColorHEX(colorShade);
    }
    else if(isUntitledColorShades(color)){
        const [c, shade] = color.toString().split("-");
        let colorShade = c;
        if(parseInt(shade) >= 500){
            colorShade += "-300";
        }else{
            colorShade += "-600";
        }

        return getColorHEX(colorShade);
    }
    else {
        let message = "Invalid color type."
        if(typeof color === "string"){
            message += " Please use getContrastColorByHEX function.";
        }

        throw message;
    }
}