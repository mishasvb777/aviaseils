import React from 'react'
import Nav from './components/Nav/Nav'
import Filters from './components/Filters/Filters'
import CardList from './components/CardList/CardList'
import styles from './App.module.scss'
import logo from './assets/logotip.svg'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logo} alt='logo'></img>
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
