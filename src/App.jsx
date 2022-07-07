import "./App.module.css";
import { PreHeader } from "./components/PreHeader/PreHeader";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { MainPage } from "./pages/MainPage/MainPage";

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
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
