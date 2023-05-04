import React from 'react'
import styles from './Card.module.scss'
import DepInform from './DepInform/DepInform'
import avia_logo from '../../assets/avia-logo.svg'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <span className={styles.card__header__price}>13 400</span>
        <img className="card__header__image" src={avia_logo} alt="avia company logotip" />
      </div>
      <div className={styles.card__body}>
        <DepInform />
        <DepInform />
      </div>
    </div>
  )
}

export default Card
