import React from "react";
import styles from "./PreHeader.module.css";
import { ReactComponent as Phone } from "../../assets/img/phone.svg";
import { ReactComponent as Login } from "../../assets/img/login.svg";

export const PreHeader = () => {
    return (
        <section className={styles.preHeader}>
            <div className={styles.preHeader__block}>
                <div className={styles.phone__image}>
                    <Phone />
                </div>
                <div className={styles.preHeader__info}>
                    8 (812) 123-45-67 <span className={styles.tab} />
                    <span className={styles.spaces}>|</span>
                    Работаем 7 дней в неделю <span className={styles.tab} />
                    <span className={styles.spaces}>|</span> 9:00 — 18:00
                </div>
            </div>
            <div className={styles.preHeader__block}>
                <div className={styles.login__image}>
                    <Login />
                </div>
                <div>
                    <a className={styles.preHeader__login} href="/">
                        Войти / Регистрация
                    </a>
                </div>
            </div>
        </section>
    );
};
