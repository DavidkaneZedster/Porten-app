import React from "react";
import { Brands } from "../../components/Brands/Brands";
import { Collection } from "../../components/Collection/Collection";
import { Footer } from "../../components/Footer/Footer";
import { Main } from "../../components/Main/Main";
import { NewProduct } from "../../components/NewProduct/NewProduct";
import { PreFooter } from "../../components/PreFooter/PreFooter";
import { Season } from "../../components/Season/Season";
import styles from "../../App.module.css";

export const MainPage = () => {
    return (
        <>
            <Main />
            <div className={styles.dark__bg}>
                <Season />
                <Collection />
                <div className={styles.container}>
                    <NewProduct />
                </div>
            </div>
            <div className={styles.gray__bg}>
                <div className={styles.container}>
                    <Brands />
                </div>
            </div>
            <PreFooter />
            <div className={styles.gray__bg}>
                <Footer />
            </div>
        </>
    );
};
