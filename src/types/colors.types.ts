export type UntitledColors = 'gray' | 'brand' | 'error' | 'warning' | 'success' | 'blue-gray' | 'blue-light' | 'blue' | 'indigo' | 'purple' | 'pink' | 'rose' | 'orange';

const validColors: Set<string> = new Set([
    'gray', 'brand', 'error', 'warning', 'success', 'blue-gray', 'blue-light', 'blue', 'indigo', 'purple', 'pink', 'rose', 'orange'
]);

export function isUntitledColor(value: unknown) : value is UntitledColors {
    return typeof value === "string" && validColors.has(value);
}

export type UntitledColorShades =
   'gray-50' | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'gray-500' | 'gray-600' | 'gray-700' | 'gray-800' | 'gray-900'
  | 'brand-50' | 'brand-100' | 'brand-200' | 'brand-300' | 'brand-400' | 'brand-500' | 'brand-600' | 'brand-700' | 'brand-800' | 'brand-900'
  | 'error-50' | 'error-100' | 'error-200' | 'error-300' | 'error-400' | 'error-500' | 'error-600' | 'error-700' | 'error-800' | 'error-900'
  | 'warning-50' | 'warning-100' | 'warning-200' | 'warning-300' | 'warning-400' | 'warning-500' | 'warning-600' | 'warning-700' | 'warning-800' | 'warning-900'
  | 'success-50' | 'success-100' | 'success-200' | 'success-300' | 'success-400' | 'success-500' | 'success-600' | 'success-700' | 'success-800' | 'success-900'
  | 'blue-gray-50' | 'blue-gray-100' | 'blue-gray-200' | 'blue-gray-300' | 'blue-gray-400' | 'blue-gray-500' | 'blue-gray-600' | 'blue-gray-700' | 'blue-gray-800' | 'blue-gray-900'
  | 'blue-light-50' | 'blue-light-100' | 'blue-light-200' | 'blue-light-300' | 'blue-light-400' | 'blue-light-500' | 'blue-light-600' | 'blue-light-700' | 'blue-light-800' | 'blue-light-900'
  | 'blue-50' | 'blue-100' | 'blue-200' | 'blue-300' | 'blue-400' | 'blue-500' | 'blue-600' | 'blue-700' | 'blue-800' | 'blue-900'
  | 'indigo-50' | 'indigo-100' | 'indigo-200' | 'indigo-300' | 'indigo-400' | 'indigo-500' | 'indigo-600' | 'indigo-700' | 'indigo-800' | 'indigo-900'
  | 'purple-50' | 'purple-100' | 'purple-200' | 'purple-300' | 'purple-400' | 'purple-500' | 'purple-600' | 'purple-700' | 'purple-800' | 'purple-900'
  | 'pink-50' | 'pink-100' | 'pink-200' | 'pink-300' | 'pink-400' | 'pink-500' | 'pink-600' | 'pink-700' | 'pink-800' | 'pink-900'
  | 'rose-50' | 'rose-100' | 'rose-200' | 'rose-300' | 'rose-400' | 'rose-500' | 'rose-600' | 'rose-700' | 'rose-800' | 'rose-900'
  | 'orange-50' | 'orange-100' | 'orange-200' | 'orange-300' | 'orange-400' | 'orange-500' | 'orange-600' | 'orange-700' | 'orange-800' | 'orange-900';

const validColorShades: Set<string> = new Set([
    
    'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500', 'gray-600', 'gray-700', 'gray-800', 'gray-900',
    'brand-50', 'brand-100', 'brand-200', 'brand-300', 'brand-400', 'brand-500', 'brand-600', 'brand-700', 'brand-800', 'brand-900',
    'error-50', 'error-100', 'error-200', 'error-300', 'error-400', 'error-500', 'error-600', 'error-700', 'error-800', 'error-900',
    'warning-50', 'warning-100', 'warning-200', 'warning-300', 'warning-400', 'warning-500', 'warning-600', 'warning-700', 'warning-800', 'warning-900',
    'success-50', 'success-100', 'success-200', 'success-300', 'success-400', 'success-500', 'success-600', 'success-700', 'success-800', 'success-900',
    'blue-gray-50', 'blue-gray-100', 'blue-gray-200', 'blue-gray-300', 'blue-gray-400', 'blue-gray-500', 'blue-gray-600', 'blue-gray-700', 'blue-gray-800', 'blue-gray-900',
    'blue-light-50', 'blue-light-100', 'blue-light-200', 'blue-light-300', 'blue-light-400', 'blue-light-500', 'blue-light-600', 'blue-light-700', 'blue-light-800', 'blue-light-900',
    'blue-50', 'blue-100', 'blue-200', 'blue-300', 'blue-400', 'blue-500', 'blue-600', 'blue-700', 'blue-800', 'blue-900',
    'indigo-50', 'indigo-100', 'indigo-200', 'indigo-300', 'indigo-400', 'indigo-500', 'indigo-600', 'indigo-700', 'indigo-800', 'indigo-900',
    'purple-50', 'purple-100', 'purple-200', 'purple-300', 'purple-400', 'purple-500', 'purple-600', 'purple-700', 'purple-800', 'purple-900',
    'pink-50', 'pink-100', 'pink-200', 'pink-300', 'pink-400', 'pink-500', 'pink-600', 'pink-700', 'pink-800', 'pink-900',
    'rose-50', 'rose-100', 'rose-200', 'rose-300', 'rose-400', 'rose-500', 'rose-600', 'rose-700', 'rose-800', 'rose-900',
    'orange-50', 'orange-100', 'orange-200', 'orange-300', 'orange-400', 'orange-500', 'orange-600', 'orange-700', 'orange-800', 'orange-900',
]);

export function isUntitledColorShades(value: unknown) : value is UntitledColorShades {
    return typeof value === "string" && validColorShades.has(value);
}

interface UntitledColorsMap {
    [index: string]: UntitledColorInfo;
}

interface UntitledColorInfo {
    name: string;
    cssVariablePrefix: string;
    shades: UntitledColorShadesList;
}

interface UntitledColorShadesList {
    [index:number]: UntitledColorShadeInfo;
    [index: string]: UntitledColorShadeInfo;
    25: UntitledColorShadeInfo;
    50: UntitledColorShadeInfo;
    100: UntitledColorShadeInfo;
    200: UntitledColorShadeInfo;
    300: UntitledColorShadeInfo;
    400: UntitledColorShadeInfo;
    500: UntitledColorShadeInfo;
    600: UntitledColorShadeInfo;
    700: UntitledColorShadeInfo;
    800: UntitledColorShadeInfo;
    900: UntitledColorShadeInfo;
}

interface UntitledColorShadeInfo {
    hex: string;
}

export class UntitledColorsList {
    static get AllColors () {
        return {
            "gray": this.PrimaryGray,
            "brand": this.PrimaryBrand,
            "error": this.PrimaryError,
            "warning": this.PrimaryWarning,
            "success": this.PrimarySuccess,
            "blue-gray": this.SecondaryBlueGray,
            "blue-light": this.SecondaryBlueLight,
            "blue": this.SecondaryBlue,
            "indigo": this.SecondaryIndigo,
            "purple": this.SecondaryPurple,
            "pink": this.SecondaryPink,
            "rose": this.SecondaryRose,
            "orange": this.SecondaryOrange
        } as UntitledColorsMap;
    }
    static get PrimaryGray () {
        return {
            name: "PrimaryGray",
            cssVariablePrefix: "primary-gray",
            shades: {
                25: {
                    hex: "#FDFDFD"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#FAFAFA"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#F5F5F5"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#E9EAEB"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#D5D7DA"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#A4A7AE"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#717680"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#535862"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#414651"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#252B37"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#101828"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    };

    static get PrimaryBrand () {
        return {
            name: "PrimaryBrand",
            cssVariablePrefix: "primary-brand",
            shades: {
                25: {
                    hex: "#FCFAFF"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#F9F5FF"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#F4EBFF"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#E9D7FE"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#D6BBFB"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#B692F6"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#9E77ED"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#7F56D9"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#6941C6"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#53389E"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#42307D"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }

    static get PrimaryError () {
        return {
            name: "PrimaryError",
            cssVariablePrefix: "primary-error",
            shades: {
                25: {
                    hex: "#FFFBFA"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#FEF3F2"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#FEE4E2"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#FECDCA"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#FDA29B"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#F97066"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#F04438"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#D92D20"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#B42318"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#912018"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#7A271A"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }

    static get PrimaryWarning () {
        return {
            name: "PrimaryWarning",
            cssVariablePrefix: "primary-warning",
            shades: {
                25: {
                    hex: "#FFFCF5"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#FFFAEB"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#FEF0C7"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#FEDF89"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#FEC84B"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#FDB022"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#F79009"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#DC6803"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#B54708"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#93370D"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#7A2E0E"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }

    static get PrimarySuccess () {
        return {
            name: "PrimarySuccess",
            cssVariablePrefix: "primary-success",
            shades: {
                25: {
                    hex: "#F6FEF9"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#ECFDF3"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#D1FADF"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#A6F4C5"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#6CE9A6"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#32D583"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#12B76A"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#039855"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#027A48"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#05603A"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#054F31"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }
    
    static get SecondaryBlueGray () {
        return {
            name: "SecondaryBlueGray",
            cssVariablePrefix: "secondary-blue-gray",
            shades: {
                25: {
                    hex: "#FCFCFD"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#F8F9FC"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#EAECF5"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#D5D9EB"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#AFB5D9"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#717BBC"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#4E5BA6"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#3E4784"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#363F72"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#293056"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#101323"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }

    static get SecondaryBlueLight () {
        return {
            name: "SecondaryBlueLight",
            cssVariablePrefix: "secondary-blue-light",
            shades: {
                25: {
                    hex: "#F5FBFF"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#F0F9FF"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#E0F2FE"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#B9E6FE"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#7CD4FD"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#36BFFA"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#0BA5EC"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#0086C9"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#026AA2"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#065986"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#0B4A6F"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }

    static get SecondaryBlue () {
        return {
            name: "SecondaryBlue",
            cssVariablePrefix: "secondary-blue",
            shades: {
                25: {
                    hex: "#F5FAFF"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#EFF8FF"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#D1E9FF"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#B2DDFF"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#84CAFF"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#53B1FD"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#2E90FA"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#1570EF"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#175CD3"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#1849A9"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#194185"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }
    
    static get SecondaryIndigo () {
        return {
            name: "SecondaryIndigo",
            cssVariablePrefix: "secondary-indigo",
            shades: {
                25: {
                    hex: "#F5F8FF"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#EEF4FF"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#E0EAFF"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#C7D7FE"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#A4BCFD"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#8098F9"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#6172F3"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#444CE7"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#3538CD"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#2D31A6"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#2D3282"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }

    static get SecondaryPurple () {
        return {
            name: "SecondaryPurple",
            cssVariablePrefix: "secondary-purple",
            shades: {
                25: {
                    hex: "#FAFAFF"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#F4F3FF"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#EBE9FE"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#D9D6FE"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#BDB4FE"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#9B8AFB"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#7A5AF8"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#6938EF"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#5925DC"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#4A1FB8"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#3E1C96"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }

    static get SecondaryPink () {
        return {
            name: "SecondaryPink",
            cssVariablePrefix: "secondary-pink",
            shades: {
                25: {
                    hex: "#FEF6FB"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#FDF2FA"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#FCE7F6"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#FCCEEE"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#FAA7E0"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#F670C7"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#EE46BC"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#DD2590"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#C11574"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#9E165F"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#851651"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }

    static get SecondaryRose () {
        return {
            name: "SecondaryRose",
            cssVariablePrefix: "secondary-rose",
            shades: {
                25: {
                    hex: "#FFF5F6"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#FFF1F3"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#FFE4E8"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#FECDD6"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#FEA3B4"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#FD6F8E"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#F63D68"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#E31B54"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#C01048"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#A11043"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#89123E"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }

    static get SecondaryOrange () {
        return {
            name: "SecondaryOrange",
            cssVariablePrefix: "secondary-orange",
            shades: {
                25: {
                    hex: "#FFFAF5"
                } as UntitledColorShadeInfo,
                50: {
                    hex: "#FFF6ED"
                } as UntitledColorShadeInfo,
                100: {
                    hex: "#FFEAD5"
                } as UntitledColorShadeInfo,
                200: {
                    hex: "#FDDCAB"
                } as UntitledColorShadeInfo,
                300: {
                    hex: "#FEB273"
                } as UntitledColorShadeInfo,
                400: {
                    hex: "#FD853A"
                } as UntitledColorShadeInfo,
                500: {
                    hex: "#FB6514"
                } as UntitledColorShadeInfo,
                600: {
                    hex: "#EC4A0A"
                } as UntitledColorShadeInfo,
                700: {
                    hex: "#C4320A"
                } as UntitledColorShadeInfo,
                800: {
                    hex: "#9C2A10"
                } as UntitledColorShadeInfo,
                900: {
                    hex: "#7E2410"
                } as UntitledColorShadeInfo,
            } as UntitledColorShadesList
        } as UntitledColorInfo;
    }
}
 