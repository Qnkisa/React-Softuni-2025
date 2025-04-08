import React from 'react';
import styles from '../../css-modules/CurrencyInfoComponent.module.css';

export default function CurrencyInfoComponent({ currencyInfoHeading, currencyInfoText }) {
    return (
        <div className={styles.currencyInfoComponent}>
            <p>{currencyInfoHeading}</p>
            <span>{currencyInfoText}</span>
        </div>
    );
}