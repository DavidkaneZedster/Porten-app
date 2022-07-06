import React from "react";
import { about, categories, category, mail } from "../../assets/db/db";
import { PreFooterTitleComponent } from "../PreFooterTitleComponent/PreFooterTitleComponent";
import styles from "./PreFooter.module.css";

export const PreFooter = () => {
    return (
        <section className={styles.prefooter}>
            <div className={styles.container}>
                <div className={styles.prefooter__block}>
                    <div className={styles.about__block}>
                        <PreFooterTitleComponent title={about} />
                        <p className={styles.about__text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mi semper viverra nunc cursus tortor lectus
                            nunc nulla nibh. Egestas amet consectetur vel vitae
                            aliquam dictum suspendisse. Lobortis eget consequat,
                            tellus et et sed turpis. Pretium quisque vitae,
                            amet, porttitor odio ultricies massa pharetra leo.
                            Et ipsum urna fames in sit mi ultrices nisi, nunc.
                        </p>
                    </div>
                    <div className={styles.categories__block}>
                        <PreFooterTitleComponent title={category} />
                        <div className={styles.categories}>
                            {categories.map((item, i) => {
                                return (
                                    <div
                                        className={styles.categories__item}
                                        key={i}
                                    >
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.mail__block}>
                        <PreFooterTitleComponent title={mail} />
                        <p className={styles.mail__text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mi semper viverra nunc cursus tortor lectus
                            nunc nulla nibh.
                        </p>
                        <div className={styles.sender}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Ваша почта"
                            />
                            <button className={styles.btn}>Подписаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
