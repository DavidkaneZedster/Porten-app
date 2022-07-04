import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import { ReactComponent as Cart } from "../../assets/img/cart.svg";
import { ReactComponent as Search } from "../../assets/img/search.svg";
import { items } from "../../assets/db/db.js";
import burger from "../../assets/img/burger__icon.png";

export const Menu = () => {
    const [headerVisible, setHeaderVisible] = useState(true);

    const toggle = () => {
        setHeaderVisible(!headerVisible);
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
                                                <a
                                                    href="/"
                                                    className={
                                                        styles.menu__link
                                                    }
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.header__icons}>
                            <div className={styles.cart}>
                                <a href="/">
                                    <Cart />
                                </a>
                            </div>
                            <div className={styles.search}>
                                <a href="/">
                                    <Search />
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
