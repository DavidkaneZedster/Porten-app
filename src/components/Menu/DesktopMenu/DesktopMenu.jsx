import React from "react";
import { items } from "../../../assets/db/db";
import styles from "./DesktopMenu.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../../assets/img/cart.svg";
import { ReactComponent as Search } from "../../../assets/img/search.svg";

export const DesktopMenu = () => {
    return (
        <>
            <div className={styles.menu}>
                <nav>
                    <ul className={styles.menu__list}>
                        {items.map((item, i) => {
                            return (
                                <li className={styles.menu__item} key={i}>
                                    <Link to="/" className={styles.menu__link}>
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
    );
};
