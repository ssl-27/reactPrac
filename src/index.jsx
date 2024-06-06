import React from 'react';
import styles from './index.scss'
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
const Main = () => <h1 className={styles.main}>Hi JSX！</h1>;

root.render(<Main />)