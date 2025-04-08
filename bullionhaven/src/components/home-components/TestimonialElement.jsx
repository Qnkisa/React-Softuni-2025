import React from 'react';
import styles from '../../css-modules/TestimonialElement.module.css';

export default function TestimonialElement({ personName, testimonialDate, testimonialText }) {
    return (
        <div className={styles.testimonialDiv}>
            <div className={styles.starFlex}>
                <img src="/website-icons/star-icon.png" alt="star" />
                <img src="/website-icons/star-icon.png" alt="star" />
                <img src="/website-icons/star-icon.png" alt="star" />
                <img src="/website-icons/star-icon.png" alt="star" />
                <img src="/website-icons/star-icon.png" alt="star" />
            </div>
            <p className={styles.testimonialPersonName}>{personName}</p>
            <p className={styles.testimonialDate}>{testimonialDate}</p>
            <span>{testimonialText}</span>
        </div>
    );
}