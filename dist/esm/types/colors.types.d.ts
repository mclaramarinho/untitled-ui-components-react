export type UntitledColors = 'gray' | 'brand' | 'error' | 'warning' | 'success' | 'blue-gray' | 'blue-light' | 'blue' | 'indigo' | 'purple' | 'pink' | 'rose' | 'orange';
export declare const validColors: Set<string>;
export declare function isUntitledColor(value: unknown): value is UntitledColors;
export type UntitledColorShades = 'gray-50' | 'gray-100' | 'gray-200' | 'gray-300' | 'gray-400' | 'gray-500' | 'gray-600' | 'gray-700' | 'gray-800' | 'gray-900' | 'brand-50' | 'brand-100' | 'brand-200' | 'brand-300' | 'brand-400' | 'brand-500' | 'brand-600' | 'brand-700' | 'brand-800' | 'brand-900' | 'error-50' | 'error-100' | 'error-200' | 'error-300' | 'error-400' | 'error-500' | 'error-600' | 'error-700' | 'error-800' | 'error-900' | 'warning-50' | 'warning-100' | 'warning-200' | 'warning-300' | 'warning-400' | 'warning-500' | 'warning-600' | 'warning-700' | 'warning-800' | 'warning-900' | 'success-50' | 'success-100' | 'success-200' | 'success-300' | 'success-400' | 'success-500' | 'success-600' | 'success-700' | 'success-800' | 'success-900' | 'blue-gray-50' | 'blue-gray-100' | 'blue-gray-200' | 'blue-gray-300' | 'blue-gray-400' | 'blue-gray-500' | 'blue-gray-600' | 'blue-gray-700' | 'blue-gray-800' | 'blue-gray-900' | 'blue-light-50' | 'blue-light-100' | 'blue-light-200' | 'blue-light-300' | 'blue-light-400' | 'blue-light-500' | 'blue-light-600' | 'blue-light-700' | 'blue-light-800' | 'blue-light-900' | 'blue-50' | 'blue-100' | 'blue-200' | 'blue-300' | 'blue-400' | 'blue-500' | 'blue-600' | 'blue-700' | 'blue-800' | 'blue-900' | 'indigo-50' | 'indigo-100' | 'indigo-200' | 'indigo-300' | 'indigo-400' | 'indigo-500' | 'indigo-600' | 'indigo-700' | 'indigo-800' | 'indigo-900' | 'purple-50' | 'purple-100' | 'purple-200' | 'purple-300' | 'purple-400' | 'purple-500' | 'purple-600' | 'purple-700' | 'purple-800' | 'purple-900' | 'pink-50' | 'pink-100' | 'pink-200' | 'pink-300' | 'pink-400' | 'pink-500' | 'pink-600' | 'pink-700' | 'pink-800' | 'pink-900' | 'rose-50' | 'rose-100' | 'rose-200' | 'rose-300' | 'rose-400' | 'rose-500' | 'rose-600' | 'rose-700' | 'rose-800' | 'rose-900' | 'orange-50' | 'orange-100' | 'orange-200' | 'orange-300' | 'orange-400' | 'orange-500' | 'orange-600' | 'orange-700' | 'orange-800' | 'orange-900';
export declare const validColorShades: Set<string>;
export declare function isUntitledColorShades(value: unknown): value is UntitledColorShades;
interface UntitledColorsMap {
    [index: string]: UntitledColorInfo;
}
interface UntitledColorInfo {
    name: string;
    cssVariablePrefix: string;
    shades: UntitledColorShadesList;
}
interface UntitledColorShadesList {
    [index: number]: UntitledColorShadeInfo;
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
export declare class UntitledColorsList {
    static get AllColors(): UntitledColorsMap;
    static get PrimaryGray(): UntitledColorInfo;
    static get PrimaryBrand(): UntitledColorInfo;
    static get PrimaryError(): UntitledColorInfo;
    static get PrimaryWarning(): UntitledColorInfo;
    static get PrimarySuccess(): UntitledColorInfo;
    static get SecondaryBlueGray(): UntitledColorInfo;
    static get SecondaryBlueLight(): UntitledColorInfo;
    static get SecondaryBlue(): UntitledColorInfo;
    static get SecondaryIndigo(): UntitledColorInfo;
    static get SecondaryPurple(): UntitledColorInfo;
    static get SecondaryPink(): UntitledColorInfo;
    static get SecondaryRose(): UntitledColorInfo;
    static get SecondaryOrange(): UntitledColorInfo;
}
export {};
