import React from 'react'
import styles from './CardList.module.scss'
import Card from '../Card/Card'

const CardList = () => {
  return (
    <div className={styles.cardList}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <button className={styles.showmore}> Показать еще 5 билетов</button>
    </div>
  )
}

export default CardList
