import React from "react";
import styles from "./Season.module.css";
import { season, seasonData } from "../../assets/db/db";
import { WatchComponent } from "../WatchComponent/WatchComponent";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import { Link } from "react-router-dom";

export const Season = () => {
    return (
        <section className={styles.season}>
            <div className={styles.season__card}>
                <TitleComponent title={season} />
                <div className={styles.container}>
                    <WatchComponent data={seasonData} />
                </div>
            </div>
            <div className={styles.new__collection}>
                <div className={styles.container}>
                    <div className={styles.collection__block}>
                        <div className={styles.collection__image_title}>
                            <div className={styles.collection__title}>
                                <h3 className={styles.image__text}>
                                    Новая коллекция
                                </h3>
                            </div>
                            <div className={styles.catalog}>
                                <div className={styles.catalog__btn}>
                                    <Link
                                        className={styles.catalog__link}
                                        to="/catalog"
                                    >
                                        Каталог
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
