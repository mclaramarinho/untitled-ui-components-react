import TemplateButtonProps from "./TemplateButton.types";
import React from "react";
import styles from './TemplateButton.module.scss';

const TemplateButton : React.FC<TemplateButtonProps> = (props) => {
    return <button className={styles.button}>{ props.text }</button>;
}

export default TemplateButton;