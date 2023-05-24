import React from 'react'
import styles from './Card.module.scss'
import DepInform from './DepInform/DepInform'
import avia_logo from '../../assets/avia-logo.svg'
import PropTypes from 'prop-types'

const Card = ({ticket}) => {

  Card.propTypes = {
    ticket: PropTypes.object.isRequired
  }
  
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <span className={styles.card__header__price}>{ticket.price}р</span>
        <img className="card__header__image" src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="avia company logotip" />
      </div>
      <div className={styles.card__body}>        
        <DepInform there={ticket.segments[0]} from={ticket.segments[1]} />
        <DepInform there={ticket.segments[1]} from={ticket.segments[0]} />          
      </div>
    </div>
  )
}

export default Card
