import React from "react";
import styles from "./Season.module.css";
import { seasonData } from "../../assets/db/db";

export const Season = () => {
    return (
        <section className={styles.season}>
            <div className={styles.season__card}>
                <div className={styles.season__title}>
                    <h3 className={styles.title}>СЕЗОН 2020/21</h3>
                </div>
                <div className={styles.cards}>
                    {seasonData.map((item, i) => {
                        return (
                            <div className={styles.cards__item} key={i}>
                                <div className={styles.cards__image}>
                                    <img src={item.image} alt="watch" />
                                </div>
                                <div>
                                    <div className={styles.cards__item_name}>
                                        {item.name}
                                    </div>
                                    <p className={styles.cards__item_price}>
                                        {item.price}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
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
                                    <a
                                        className={styles.catalog__link}
                                        href="/"
                                    >
                                        Каталог
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
