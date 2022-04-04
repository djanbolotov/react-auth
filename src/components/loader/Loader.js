import React from 'react'
import styles from './Loader.module.css';

export default function Loading() {
    return (
        <div className={styles.loader_wrap}>
        <div className={styles.loader}>
            <div className={styles.box_1 + " " + styles.box}></div>
            <div className={styles.box_2 + " " + styles.box}></div>
            <div className={styles.box_3 + " " + styles.box}></div>
            <div className={styles.box_4 + " " + styles.box}></div>
            <div className={styles.box_5 + " " + styles.box}></div>
        </div>
    </div>
    )
}