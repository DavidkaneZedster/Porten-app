import "./App.module.css";
import { PreHeader } from "./components/PreHeader/PreHeader";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { Season } from "./components/Season/Season";
import { Collection } from "./components/Collection/Collection";
import { NewProduct } from "./components/NewProduct/NewProduct";
import { Brands } from "./components/Brands/Brands";
import { PreFooter } from "./components/PreFooter/PreFooter";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <>
            <div className={styles.dark__bg}>
                <div className={styles.container}>
                    <PreHeader />
                </div>
            </div>
            <div className={styles.gray__bg}>
                <div className={styles.container}>
                    <Header />
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/routes" element={<Header />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
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
}

export default App;
