import TemplateButtonProps from "./TemplateButton.types";
import React from "react";
import s from './TemplateButton.module.scss';

const TemplateButton : React.FC<TemplateButtonProps> = (props) => {
    return <button className={s.button}>{ props.text }</button>;
}

export default TemplateButton;