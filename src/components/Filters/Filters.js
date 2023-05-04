import React from 'react'
import styles from './Filters.module.scss'

const Filters = () => {
  return (
    <div className={styles.filters}>
      <span className={styles.filters__title}>Количество пересадок</span>

      <div className={styles.filters__item}>
        <input type="checkbox" id="all" name="all" />
        <label htmlFor="all">Все</label>
      </div>

      <div className={styles.filters__item}>
        <input type="checkbox" id="non_stop" name="non_stop" checked />
        <label htmlFor="non_stop">Без пересадок</label>
      </div>

      <div className={styles.filters__item}>
        <input
          type="checkbox"
          id="one_transplant"
          name="one_transplant"
          checked
        />
        <label htmlFor="one_transplant">1 пересадка</label>
      </div>

      <div className={styles.filters__item}>
        <input
          type="checkbox"
          id="two_transplant"
          name="two_transplant"
          checked
        />
        <label htmlFor="two_transplant">2 пересадки</label>
      </div>

      <div className={styles.filters__item}>
        <input type="checkbox" id="three_transplant" name="three_transplant" />
        <label htmlFor="three_transplant">3 пересадки</label>
      </div>
    </div>
  )
}

export default Filters
