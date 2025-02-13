export type UntitledColors = 'gray' | 'brand' | 'error' | 'warning' | 'success' | 'blue-gray' | 'blue-light' | 'blue' | 'indigo' | 'purple' | 'pink' | 'rose' | 'orange';

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
 