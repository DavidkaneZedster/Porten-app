import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import burger from "../../assets/img/burger__icon.png";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { MobileMenu } from "./MobileMenu/MobileMenu";

export const Menu = () => {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [scrollIsActive, setScrollIsActive] = useState(true);

    const disableScrolling = () => {
        const x = window.scrollX;
        const y = window.scrollY;
        window.onscroll = () => {
            window.scrollTo(x, y);
        };
    };

    const enableScrolling = () => {
        window.onscroll = () => {};
    };

    const toggleScrolling = () => {
        scrollIsActive ? disableScrolling() : enableScrolling();
        setScrollIsActive(!scrollIsActive);
    };

    const toggle = () => {
        setHeaderVisible(!headerVisible);
        toggleScrolling();
    };

    return (
        <div className={styles.header__menu}>
            <div className={styles.burger__btn} onClick={toggle}>
                <img src={burger} alt="menu" />
            </div>
            <DesktopMenu />
            {headerVisible && <MobileMenu />}
        </div>
    );
};
