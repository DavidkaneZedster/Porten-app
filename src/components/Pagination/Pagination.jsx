import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({ catalogPerPage, totalCatalog, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCatalog / catalogPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.dark__bg}>
            <ul className={styles.pagination}>
                {pageNumbers.map((number) => (
                    <li
                        className={styles.page__item}
                        key={number}
                        onClick={() => paginate(number)}
                    >
                        <span className={styles.page__link}>{number}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
