import Header from '../components/Header/Header'
import Filters from '../components/Filters/Filters'
import Sort from '../components/Sort/Sort'
import Tickets from '../components/Tickets/Tickets'
import style from './App.module.scss'

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.main}>
        <Filters />
        <div className={style.main__content}>
          <Sort />
          <Tickets />
        </div>
      </div>
    </div>
  )
}

export default App
