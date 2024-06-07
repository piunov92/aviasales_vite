import TicketData from '../TicketData/TicketData'
import style from './Ticket.module.scss'

function Ticket() {
  return (
    <div className={style.ticket}>
      <div className={style.ticket__header}>
        <span>13 400 Р</span>
        <img src='https://pics.avs.io/110/36/S7.png' alt='' />
      </div>
      <div className={style.ticket__content}>
        <TicketData />
        <TicketData />
      </div>
    </div>
  )
}

export default Ticket
