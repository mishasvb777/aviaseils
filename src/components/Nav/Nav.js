import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <button>Самый дешевый</button>
      <button>Самый быстрый</button>
      <button>Оптимальный</button>
    </div>
  )
}

export default Nav
