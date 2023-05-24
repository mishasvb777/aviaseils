import React from 'react'
import styles from './Filters.module.scss'
import FiltersItem from './FiltersItem/FiltersItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getTickets, ticketSliseActions, getId } from '../../store/ticketsSlice'

const Filters = () => {
  const dispatch = useDispatch()
  const TICKET = useSelector((state) => state.ticket.TICKET)

  const toggleNonStopFilters = () => {
    dispatch(
      ticketSliseActions.nonStopFilters(
        TICKET.filter(
          (el) =>
            el.segments[0].stops.length !== 0 &&
            el.segments[1].stops.length !== 0
        )
      )
    )
  }

  return (
    <div className={styles.filters}>
      <span className={styles.filters__title}>Количество пересадок</span>
      <FiltersItem id={'all'} labelText={'Все'} />
      <FiltersItem id={'non_stop'} labelText={'Без пересадок'} />
      <FiltersItem id={'one_transplant'} labelText={'1 пересадка'} />
      <FiltersItem id={'two_transplant'} labelText={'2 пересадка'} />
      <FiltersItem id={'three_transplant'} labelText={'3 пересадка'} />
    </div>
  )
}

export default Filters
