import { CSSProperties } from "react";
import { ButtonBaseType } from "../../types/buttons.types";
import { UntitledColors, UntitledColorShades } from "../../types";
import { UntitledIconType } from "../UntitledIcon/UntitledIcon.types";
import { UntitledTextFontSizes } from "../UntitledText/UntitledText.types";
/**
 * Props for the UntitledButton component.
 * @extends ButtonBaseType
 */
export default interface UntitledButtonProps extends ButtonBaseType{
    /**
     * Defines the size of the button.
     * 
     * Valid values:
     * `"sm"`,
     * `"md"`,
     * `"lg"`,
     * `"xl"`,
     * `"2xl"`
     */
    size?: ButtonSizes;

    /**
     * Icon name,
     * Please refer to {@link https://feathericons.com/ | Feather Icons} to see all available icons
     * 
     * @copyright Uses {@link https://github.com/feathericons/react-feather | React Feather} lib to render the icons
     */
    icon?: UntitledIconType;

    /**
     * Specifies the position of the icon within the button.
     * 
     * Valid values:
     * - `"append"`
     * - `"prepend"`
     */
    iconPosition?: ButtonIconPosition;

    /**
     * If true, the button will display only an icon (no text).
     */
    iconOnly?: boolean;

    /**
     * If true, the button will have a destructive style (e.g., red for delete actions).
     */
    destructive?: boolean;

    /**
     * Determines the variant of the button.
     * 
     * Valid values:
     * - `"primary"`
     * - `"secondary"`
     * - `"secondary-gray"`
     * - `"tertiary"`
     * - `"tertiary-gray"`
     * - `"link"`
     * - `"link-gray"`
     */
    variant?: ButtonVariant;

    /**
     * Custom styles applied to the button.
     * Accepts any valid CSS properties.
     * 
     * @example { backgroundColor: "red", padding: "10px" }
     */
    styles?: CSSProperties;

    /**
     * Background color of the button.
     * Can be a string (hex, RGB, etc.) or a predefined color type.
     * 
     * @example "#ff0000"
     * @example "orange"
     * @example "orange-400"
     */
    bgColor?: string | UntitledColors | UntitledColorShades;

     /**
     * Secondary background color, used for gradients or hover effects.
     * Can be a string (hex, RGB, etc.) or a predefined color type.
     * 
     * @example "#ff0000"
     * @example "orange"
     * @example "orange-100"
     */
    secondaryBgColor?: string | UntitledColors | UntitledColorShades;

    /**
     * Text and icon color of the button.
     * Can be a string (hex, RGB, etc.) or a predefined color type.
     * 
     * @example "#ffffff"
     * @example "gray"
     * @example "gray-100"
     */
    color?: UntitledColors | UntitledColorShades | string;

    /**
     * Icon and text font size
     */
    fontSize?: number;

    /**
     * Dot before text
     */
    dot?: boolean;

    /**
     * Dot color
     */
    dotColor?: string | UntitledColors | UntitledColorShades;
}
export type ButtonSizes = "sm" | "md" | "lg" | "xl" | "2xl";

export type ButtonIconPosition = "append" | "prepend";

export type ButtonVariant = "primary" | "secondary" | "secondary-gray" | "tertiary" | "tertiary-gray" | "link" | "link-gray";