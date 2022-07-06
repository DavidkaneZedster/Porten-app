import React from "react";
import styles from "./NewProduct.module.css";
import { newData, newProduct } from "../../assets/db/db";
import { WatchComponent } from "../WatchComponent/WatchComponent";
import { TitleComponent } from "../TitleComponent/TitleComponent";

export const NewProduct = () => {
    return (
        <section className={styles.product}>
            <div className={styles.products}>
                <TitleComponent title={newProduct} />
                <WatchComponent data={newData} />
            </div>
        </section>
    );
};
