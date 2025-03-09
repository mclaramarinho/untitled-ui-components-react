import { ComponentBaseType } from "./component.types";

export interface ButtonBaseType extends ComponentBaseType{
    text?: string;
    formMethod?: "get" | "post" | "dialog";
    name?: string;
    type?: "submit" | "reset" | "button";
    value?: string;
    disabled?: boolean;
    role?: "checkbox" | "combobox" | "link" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "radio" | "switch" | "tab";
    ariaPressed?: boolean;
    onHover?: ()=>void;
    onKeyDown?: ()=>void;
    onMouseUp?: ()=>void;
    onMouseDown?: ()=>void;
}