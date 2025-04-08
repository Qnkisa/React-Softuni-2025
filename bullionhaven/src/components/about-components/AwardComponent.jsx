import React from 'react';
import styles from '../../css-modules/AwardComponent.module.css';

export default function AwardComponent({ name, image, description }) {
    return (
        <div className={styles.awardComponent}>
            <img src={image} alt={name} className={styles.awardComponentImg} />
            <div className={styles.awardComponentLine}></div>
            <p className={styles.awardName}>{name}</p>
            <span className={styles.awardDescription}>{description}</span>
        </div>
    );
}