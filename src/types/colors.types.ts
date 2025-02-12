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
    [index:string]: UntitledColorShadeInfo;
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

// TODO - Missing secondary colors
export class UntitledColorsList {
    static get AllColors () {
        return {
            "gray": this.PrimaryGray,
            "brand": this.PrimaryBrand,
            "error": this.PrimaryError,
            "warning": this.PrimaryWarning,
            "success": this.PrimarySuccess
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
}
 