import React from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import styles from "./Header.module.css";
import { Menu } from "../Menu/Menu";

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__logo}>
                    <a href="/">
                        <Logo />
                    </a>
                </div>
                <div>
                    <Menu />
                </div>
            </header>
        </>
    );
};
