import React from 'react'
import styles from './DepInform.module.scss'

const DepInform = () => {
  return (
    <div className={styles.card__body__inform}>
      <div className={styles.card_body__inform__section}>
        <span className={styles.card_body__inform__section__title}>MOW - HKT</span>
        <span className={styles.card_body__inform__section__value}>10:45 – 08:00</span>
      </div>
      <div className={styles.card_body__inform__section}>
        <span className={styles.card_body__inform__section__title}>В пути</span>
        <span className={styles.card_body__inform__section__value}>21ч 15м</span>
      </div>
      <div className={styles.card_body__inform__section}>
        <span className={styles.card_body__inform__section__title}>2 пересадки</span>
        <span className={styles.card_body__inform__section__value}>HKG, JNB</span>
      </div>
    </div>
  )
}

export default DepInform
