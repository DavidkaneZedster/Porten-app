import React from "react";
import { Link } from "react-router-dom";
import styles from "./Modal.module.css";

export const Modal = ({
    isRegisterVisible,
    setIsRegisterVisible,
    toggleScrolling,
}) => {
    const closeModal = () => {
        setIsRegisterVisible(!isRegisterVisible);
        toggleScrolling();
    };

    return (
        <>
            {isRegisterVisible ? (
                <div
                    className={styles.modal__wrapper}
                    onClick={(e) =>
                        e.currentTarget === e.target && closeModal()
                    }
                >
                    <div className={styles.modal__window}>
                        <form className={styles.gray__bg}>
                            <h3 className={styles.form__text}>Login</h3>
                            <input
                                className={styles.form__input}
                                type="text"
                                placeholder="Enter your mail"
                            />
                            <h3 className={styles.form__text}>Password</h3>
                            <input
                                className={styles.form__input}
                                type="text"
                                placeholder="Enter your password"
                            />
                            <h3 className={styles.form__text}>
                                Repeat your password
                            </h3>
                            <input
                                className={styles.form__input}
                                type="text"
                                placeholder="Repeat your password"
                            />
                            <button
                                className={styles.register__btn}
                                onClick={(e) =>
                                    e.currentTarget === e.target && closeModal()
                                }
                            >
                                Register
                            </button>
                            <Link
                                className={styles.sign__in}
                                to="/signin"
                                onClick={(e) =>
                                    e.currentTarget === e.target && closeModal()
                                }
                            >
                                Already have accout? Sign in.
                            </Link>
                        </form>
                        <div className={styles.overlay}></div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};
