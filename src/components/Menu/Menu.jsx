import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import { ReactComponent as Cart } from "../../assets/img/cart.svg";
import { ReactComponent as Search } from "../../assets/img/search.svg";
import { items } from "../../assets/db/db.js";
import burger from "../../assets/img/burger__icon.png";
import { Link } from "react-router-dom";

export const Menu = () => {
    const [headerVisible, setHeaderVisible] = useState(true);
    const [scrollIsActive, setScrollIsActive] = useState(false);

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
        <>
            <div className={styles.header__menu}>
                <div className={styles.burger__btn} onClick={toggle}>
                    <img src={burger} alt="menu" />
                </div>
                {headerVisible && (
                    <>
                        <div className={styles.menu}>
                            <nav>
                                <ul className={styles.menu__list}>
                                    {items.map((item, i) => {
                                        return (
                                            <li
                                                className={styles.menu__item}
                                                key={i}
                                            >
                                                <Link
                                                    to="/"
                                                    className={
                                                        styles.menu__link
                                                    }
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.header__icons}>
                            <div className={styles.cart}>
                                <Link to="/">
                                    <Cart />
                                </Link>
                            </div>
                            <div className={styles.search}>
                                <Link to="/">
                                    <Search />
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
