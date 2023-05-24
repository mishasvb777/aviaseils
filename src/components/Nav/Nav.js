import React from 'react'
import styles from './Nav.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { buttonSliceActions } from '../../store/sortSlice'
import { ticketSliseActions } from '../../store/ticketsSlice'

const Nav = () => {
  const active = useSelector((state) => state.button.active)

  const activeClass = 'nav__button-active'

  const dispatch = useDispatch()

  const toggleActiveButton = (event) => {
    dispatch(buttonSliceActions.toggleActiveStatus(event.target.id))
    dispatch(ticketSliseActions.changeTickets(event.target.id))
  }

  return (
    <div className={styles.nav}>
      <button
        id="0"
        className={styles.nav__button + ' ' + styles[active[0] && activeClass]}
        onClick={toggleActiveButton}
      >
        Самый дешевый
      </button>
      <button
        id="1"
        className={styles.nav__button + ' ' + styles[active[1] && activeClass]}
        onClick={toggleActiveButton}
      >
        Самый быстрый
      </button>
      <button
        id="2"
        className={styles.nav__button + ' ' + styles[active[2] && activeClass]}
        onClick={toggleActiveButton}
      >
        Оптимальный
      </button>
    </div>
  )
}

export default Nav
