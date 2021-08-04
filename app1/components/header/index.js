import React from 'react';
import styles from './Header.module.css';
import { TopBar } from "./UI/TopBar";
import { DesktopMenu } from "./UI/DesktopMenu";

function App() {
    return (<div className={styles.App}>
        <TopBar />
        <div className={styles.headerBlock}>
            <DesktopMenu />
        </div>
    </div>)
}

export default App;
