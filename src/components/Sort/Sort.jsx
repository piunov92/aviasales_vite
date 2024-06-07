// /* eslint-disable jsx-a11y/label-has-associated-control */
import style from './Sort.module.scss'

function Sort() {
  return (
    <div className={style['sort-group']}>
      <div className={style['sort-group__item']}>
        <input
          id='radio-1'
          type='radio'
          name='radio'
          value='1'
          onChange={() => {
            console.log('radio-1')
          }}
        />
        <label htmlFor='radio-1'>Самый дешевый</label>
      </div>
      <div className={style['sort-group__item']}>
        <input
          id='radio-2'
          type='radio'
          name='radio'
          value='2'
          onChange={() => {
            console.log('radio-2')
          }}
        />
        <label htmlFor='radio-2'>Самый быстрый</label>
      </div>
      <div className={style['sort-group__item']}>
        <input
          id='radio-3'
          type='radio'
          name='radio'
          value='3'
          onChange={() => {
            console.log('radio-3')
          }}
        />
        <label htmlFor='radio-3'>Оптимальный</label>
      </div>
    </div>
  )
}

export default Sort
