import { isUntitledColor, isUntitledColorShades, UntitledColors, UntitledColorShades, UntitledColorsList } from "../types";

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