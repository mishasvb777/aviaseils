import React from 'react'
import Nav from './components/Nav/Nav'
import Filters from './components/Filters/Filters'
import CardList from './components/CardList/CardList'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Самолет</h3>
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
