import React from 'react'
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <button className={styles.nav__button + ' ' + styles['nav__button-active']}>Самый дешевый</button>
      <button className={styles.nav__button}>Самый быстрый</button>
      <button className={styles.nav__button}>Оптимальный</button>
    </div>
  )
}

export default Nav
