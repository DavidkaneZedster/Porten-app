import React from "react";
import styles from "./TitleComponent.module.css";

export const TitleComponent = ({ title }) => {
    return (
        <>
            <div className={styles.block__title}>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </>
    );
};
