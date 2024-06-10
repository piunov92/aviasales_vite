import { useSelector } from 'react-redux'
import Ticket from '../Ticket/Ticket'
import style from './Tickets.module.scss'

function Tickets() {
  const data = useSelector(state => state.ticketsReducer.data)
  console.log('ticket component data >>> ', data)
  return (
    <div className={style.tickets}>
      {data.length > 0 && data.map(item => (
        <Ticket key={item.id} price={item.price}/>
      ))}
      <button className={style.tickets__button} type='button'>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  )
}

export default Tickets
