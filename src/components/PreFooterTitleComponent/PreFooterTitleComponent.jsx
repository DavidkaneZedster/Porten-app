import React from "react";
import styles from "./PreFooterTitleComponent.module.css";

export const PreFooterTitleComponent = ({ title }) => {
    return (
        <>
            <h4 className={styles.title}>{title}</h4>
        </>
    );
};
