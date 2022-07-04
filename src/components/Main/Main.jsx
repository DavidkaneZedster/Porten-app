import React from "react";
import styles from "./Main.module.css";
import logo from "../../assets/img/logo.svg";

export const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.block}>
                    <div className={styles.main__text}>
                        <img
                            className={styles.main__logo}
                            src={logo}
                            alt="main__logo"
                        />
                        <div className={styles.subscription}>
                            Санкт-Петербург
                        </div>
                    </div>
                    <div className={styles.main__subscription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Purus interdum purus, est tortor pulvinar ut in.
                        Fringilla a diam enim sed justo, sed iaculis sagittis.
                        Tortor id eu interdum nec ut iaculis. Penatibus
                        ullamcorper ultricies morbi ipsum sem metus pharetra,
                        mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
                    </div>
                </div>
            </div>
        </main>
    );
};
