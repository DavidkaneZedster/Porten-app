import React from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import styles from "./Header.module.css";
import { Menu } from "../Menu/Menu";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__logo}>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div>
                    <Menu />
                </div>
            </header>
        </>
    );
};
