import React from 'react'
import Nav from './components/Nav/Nav'
import Filters from './components/Filters/Filters'
import CardList from './components/CardList/CardList'
import styles from './App.module.scss'
import logo from './assets/logotip.svg'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getId, getTickets } from './store/ticketsSlice'
import { fetchTickets } from './store/ticketsSlice'


function App() {
  const dispatch = useDispatch()

  const statusSearch = useSelector(state => state.ticket.statusSearch)

  // const fetchTickets = async (id) => {
    
  //   while(!statusSearch){
  //     console.log('statusSearch' + " " + statusSearch)
  //     console.log('0')
  //     await dispatch(getTickets(id)) 
  //   }
  // } 
  
  // useEffect(() => {    
  //   dispatch(getId())
  //     .then((result) => {          
  //       const searchId = result.payload          
  //       fetchTickets(searchId)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //   })     
  // }, [dispatch])
  

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logo} alt="logo"></img>
        </div>
        <div className={styles.main}>
          <Filters />
          <div>
            <Nav />
            <CardList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
