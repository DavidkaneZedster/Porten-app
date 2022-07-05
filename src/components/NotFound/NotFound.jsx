import React from "react";
import styles from "./NotFound.module.css";

export const NotFound = () => {
    return (
        <>
            <div className={styles.nothing}>Content Not Found :(</div>
            <p className={styles.nothing__rus}>
                По заданному запросу ничего не было найдено,
                <span className={styles.space}>
                    попробуйте изменить Ваш запрос
                </span>
            </p>
        </>
    );
};
