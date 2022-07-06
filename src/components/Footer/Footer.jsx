import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__block}>
                <p className={styles.footer__text}>© 2020 Все права защищены</p>
                <p className={styles.footer__figma_text}>Сделано Figma.info</p>
            </div>
        </footer>
    );
};
