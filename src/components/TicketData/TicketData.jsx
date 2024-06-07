import style from './TicketData.module.scss'

function TicketData() {
  return (
    <div className={style['ticket-data']}>
      <div className={style['ticket-data__data']}>
        <div className={style['ticket-data__data--direction-info']}>
          mov-hkt
        </div>
        <div className={style['ticket-data__data--time-info']}>
          10:45 - 08:00
        </div>
      </div>
      <div className={style['ticket-data__data']}>
        <div className={style['ticket-data__data--direction-info']}>в пути</div>
        <div className={style['ticket-data__data--time-info']}>21ч 15м</div>
      </div>
      <div className={style['ticket-data__data']}>
        <div className={style['ticket-data__data--direction-info']}>
          2 пересадки
        </div>
        <div
          className={style['ticket-data__data--time-info']}
          style={{ textTransform: 'uppercase' }}
        >
          hkg, jbn
        </div>
      </div>
    </div>
  )
}

export default TicketData
