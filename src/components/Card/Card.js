import React from 'react'
import styles from './Card.module.css'
import DepInform from './DepInform/DepInform'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className="card__header">
        <span className="card__header__price">13 400</span>
        <img className="card__header__image" src="./assets/avia-logo" />
      </div>
      <div className="card__body">
        <DepInform />
        <DepInform />        
      </div>
    </div>
  )
}

export default Card
