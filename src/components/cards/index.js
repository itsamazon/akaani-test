import React from 'react';
import styles from "./styles.module.css"


export const Card = ({ background, color, icon, text, detail }) => {
    return (
        <div className={styles.card_container}>
            <div className={styles.cardIcon} style={{ background: `${background}`, color: `${color}` }}>
                {icon}
            </div>
            <div className={styles.textSection}>
                <p>{text}</p>
                <h4>{detail}</h4>
            </div>
        </div>
    )
}
