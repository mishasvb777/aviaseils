import React from 'react'
import PropTypes from 'prop-types'
import styles from '../Filters.module.scss'
import { filtersActions } from '../../../store/checkBoxSlice'
import { ticketSliseActions } from '../../../store/ticketsSlice'
import { useDispatch, useSelector } from 'react-redux'

const FiltersItem = (props) => {
  const { id, labelText } = props

  FiltersItem.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
  }

  const checkedOne = useSelector((state) => state.checkbox[id])

  const dispatch = useDispatch()

  const toggleCheckedStatus = () => {
    dispatch(filtersActions.toggleCheckedStatus(id))
    dispatch(
      ticketSliseActions.filterTickets({
        id: id,
        checkdeStatus: !checkedOne,
      })
    )
  }

  return (
    <div className={styles.filters__item}>
      <input
        className={styles.filters__item__checkbox}
        type="checkbox"
        id={id}
        name={id}
        onChange={toggleCheckedStatus}
        checked={checkedOne || ''}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
}

export default FiltersItem
