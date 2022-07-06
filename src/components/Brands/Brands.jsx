import React from "react";
import { brands, brandsList } from "../../assets/db/db";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import styles from "./Brands.module.css";

export const Brands = () => {
    return (
        <section className={styles.brands}>
            <TitleComponent title={brands} />
            <div className={styles.brands__list}>
                {brandsList.map((item, i) => {
                    return (
                        <div className={styles.image} key={i}>
                            <img src={item.image} alt="brand" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
