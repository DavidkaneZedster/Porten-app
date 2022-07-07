import React from "react";
import styles from "./Collection.module.css";
import image from "../../assets/img/collection__image_continue.png";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import { collection } from "../../assets/db/db";
import { Link } from "react-router-dom";

export const Collection = () => {
    return (
        <section className={styles.collection}>
            <div className={styles.collection__image}>
                <img className={styles.image} src={image} alt="collection" />
            </div>

            <div className={styles.collection__text}>
                <div className={styles.container}>
                    <TitleComponent title={collection} />
                    <div className={styles.subscription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Non rutrum ornare ut mattis habitant dui arcu. Sagittis
                        amet nunc ut neque quis nibh arcu. Vivamus vestibulum
                        nisi et venenatis sed scelerisque magna consectetur.
                        Amet convallis quis gravida facilisis vulputate.
                        Faucibus facilisi habitasse ipsum interdum dictum
                        aliquet. Velit quis ullamcorper pulvinar nulla malesuada
                        integer. Aenean praesent viverra nulla nullam natoque
                        volutpat curabitur auctor. Viverra viverra ullamcorper
                        scelerisque risus dignissim egestas. Id aliquam a
                        aliquam egestas leo orci pharetra sed diam.{" "}
                    </div>
                    <div className={styles.btn}>
                        <div className={styles.btn__collection}>
                            <Link className={styles.btn__link} to="/">
                                Посмотреть коллекцию
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
