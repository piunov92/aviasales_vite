// /* eslint-disable jsx-a11y/label-has-associated-control */
import style from './Filters.module.scss'

function Filters() {
  return (
    <div className={style.filters}>
      <div className={style.filters__header}>количество пересадок</div>
      <div className={style.filters__checks}>
        <input
          type='checkbox'
          id='checkbox-1'
          onChange={() => {
            console.log('Все')
          }}
        />
        <label htmlFor='checkbox-1'>
          <span>Все</span>
        </label>
      </div>
      <div className={style.filters__checks}>
        <input
          type='checkbox'
          id='checkbox-2'
          onChange={() => {
            console.log('Без пересадок')
          }}
        />
        <label htmlFor='checkbox-2'>
          <span>Без пересадок</span>
        </label>
      </div>
      <div className={style.filters__checks}>
        <input
          type='checkbox'
          id='checkbox-3'
          onChange={() => {
            console.log('1 пересадка')
          }}
        />
        <label htmlFor='checkbox-3'>
          <span>1 пересадка</span>
        </label>
      </div>
      <div className={style.filters__checks}>
        <input
          type='checkbox'
          id='checkbox-4'
          onChange={() => {
            console.log('2 пересадки')
          }}
        />
        <label htmlFor='checkbox-4'>
          <span>2 пересадки</span>
        </label>
      </div>
      <div className={style.filters__checks}>
        <input
          type='checkbox'
          id='checkbox-5'
          onChange={() => {
            console.log('3 пересадки')
          }}
        />
        <label htmlFor='checkbox-5'>
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}

export default Filters
