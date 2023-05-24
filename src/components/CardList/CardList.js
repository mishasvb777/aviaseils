import React from 'react'
import styles from './CardList.module.scss'
import Card from '../Card/Card'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getTickets, ticketSliseActions, getId } from '../../store/ticketsSlice'

let key = 100
let count = false
const CardList = () => {
  const TICKET = useSelector((state) => state.ticket.TICKET)
  const countCardsView = useSelector((state) => state.ticket.countCardsView)
  const statusSearch = useSelector((state) => state.ticket.statusSearch)

  const dispatch = useDispatch()

  const toggleCountViewTickets = () => {
    dispatch(ticketSliseActions.addFiveTickets())
  }

  const fetchTickets = async (id) => {
    while (!statusSearch) {
      await dispatch(getTickets(id))
    }
  }

  useEffect(() => {
    dispatch(getId())
      .then((result) => {
        const searchId = result.payload
        fetchTickets(searchId)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch])

  const firstPageTickets = useSelector((state) => state.ticket.firstPageTickets)

  return (
    <div className={styles.cardList}>
      {statusSearch === false && (
        <div>
          <p className={styles.help_message}>Загрузка билетов...</p>
          <span className={styles.loader} />
        </div>
      )}
      {statusSearch === true && TICKET.length === 0 && (
        <p className={styles.help_message}>
          Не найдено билетов по выбранным фильтрам, выберите фильтры
        </p>
      )}
      {firstPageTickets && <h1>Выберите фильтры</h1>}
      {!firstPageTickets && TICKET === 0 && <h1>Выберите фильтры</h1>}
      {!firstPageTickets &&
        TICKET.slice(0, countCardsView).map((el) => (
          <Card ticket={el} key={key++} />
        ))}
      <button className={styles.showmore} onClick={toggleCountViewTickets}>
        {' '}
        Показать еще 5 билетов
      </button>
    </div>
  )
}

export default CardList
