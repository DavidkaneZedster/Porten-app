import "./App.module.css";
import { PreHeader } from "./components/PreHeader/PreHeader";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";

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
        </>
    );
}

export default App;
