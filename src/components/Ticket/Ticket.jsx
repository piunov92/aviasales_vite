import TicketData from '../TicketData/TicketData'
import style from './Ticket.module.scss'

// eslint-disable-next-line react/prop-types
function Ticket({ price }) {
  return (
    <div className={style.ticket}>
      <div className={style.ticket__header}>
        <span>{price}</span>
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
