import React from "react";
import styles from "./Catalog.module.css";
import { useState, useEffect } from "react";
import { fetchCatalog } from "../../api/FetchCatalog.js";

export const Catalog = () => {
    const [catalog, setCatalog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getCatalog = async (params) => {
        try {
            setIsLoading(true);
            const res = await fetchCatalog(params);
            setCatalog(res);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCatalog();
    }, []);

    return (
        <div className={styles.dark__bg}>
            <section className={styles.catalog}>
                <h2 className={styles.all}>Catalog:</h2>
                <div className={styles.cards}>
                    {isLoading ? (
                        <div className={styles.loading}>Loading...</div>
                    ) : (
                        catalog?.data?.results.map((item) => (
                            <div className={styles.card} key={item.id}>
                                <h2 className={styles.title}>{item.name}</h2>
                                <img
                                    className={styles.catalog__img}
                                    width={"150px"}
                                    height={"150px"}
                                    src={item.image}
                                    alt="description"
                                />
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};
