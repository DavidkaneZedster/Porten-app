import React from "react";
import styles from "./WatchComponent.module.css";

export const WatchComponent = ({ data }) => {
    return (
        <div className={styles.cards}>
            {data.map((item, i) => {
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
    );
};
