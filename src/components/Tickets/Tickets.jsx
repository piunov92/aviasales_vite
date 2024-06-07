import Ticket from '../Ticket/Ticket'
import style from './Tickets.module.scss'

function Tickets() {
  return (
    <div className={style.tickets}>
      <Ticket />
      <button className={style.tickets__button} type='button'>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  )
}

export default Tickets
