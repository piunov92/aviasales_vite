import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ticketsLoadId } from '../redux/actions/actions'
import Header from '../components/Header/Header'
import Filters from '../components/Filters/Filters'
import Sort from '../components/Sort/Sort'
import Tickets from '../components/Tickets/Tickets'
import style from './App.module.scss'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ticketsLoadId())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
