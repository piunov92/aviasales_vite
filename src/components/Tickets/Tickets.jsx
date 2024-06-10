import { useSelector } from 'react-redux'
import Ticket from '../Ticket/Ticket'
import style from './Tickets.module.scss'
import { Spin } from '../Spinner/Spin'

function Tickets() {
  const data = useSelector((state) => state.ticketsReducer.data)
  return (
    <div className={style.tickets}>
      <Spin />
      {data.length > 0 &&
        data.map((item) => <Ticket key={item.id} price={item.price} />)}
      <button className={style.tickets__button} type='button'>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  )
}

export default Tickets
