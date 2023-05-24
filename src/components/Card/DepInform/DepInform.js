import React from 'react'
import styles from './DepInform.module.scss'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

const DepInform = ({ there, from }) => {
  DepInform.propTypes = {
    there: PropTypes.object.isRequired,
    from: PropTypes.object.isRequired,
  }

  const hours = Math.floor(there.duration / 60)
  const minuts = there.duration % 60

  const dateThere = format(new Date(there.date), 'HH:mm')
  const dateFromm = new Date(there.date)
  const timeFrom = format(
    new Date(dateFromm.getTime() + there.duration * 60 * 1000),
    'HH:mm'
  )

  return (
    <>
      <div className={styles.card__body__inform}>
        <div className={styles.card_body__inform__section}>
          <span className={styles.card_body__inform__section__title}>
            {there.origin} - {from.origin}
          </span>
          <span className={styles.card_body__inform__section__value}>
            {dateThere} - {timeFrom}
          </span>
        </div>
        <div className={styles.card_body__inform__section}>
          <span className={styles.card_body__inform__section__title}>
            В пути
          </span>
          <span className={styles.card_body__inform__section__value}>
            {hours + 'ч ' + minuts + 'м'}
          </span>
        </div>
        <div className={styles.card_body__inform__section}>
          <span className={styles.card_body__inform__section__title}>
            {there.length} {there.stops.length > 1 ? 'пересадки' : 'пересадка'}
          </span>
          <span
            className={`${styles.card_body__inform__section__value} ${styles.uppercase}`}
          >
            {there.stops.join(' ')}
          </span>
        </div>
      </div>
    </>
  )
}

export default DepInform
