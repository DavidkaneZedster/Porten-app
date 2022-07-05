import "./App.module.css";
import { PreHeader } from "./components/PreHeader/PreHeader";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";

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
            <div className="dark__bg">
                <div className="container"></div>
            </div>
        </>
    );
}

export default App;
