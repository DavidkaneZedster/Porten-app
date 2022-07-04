import "./App.module.css";
import { PreHeader } from "./components/PreHeader/PreHeader";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

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
            <Main />
        </>
    );
}

export default App;
