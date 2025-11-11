import IconDecrement from '../../icons/IconDecrementQuantity'
import IconIncrement from '../../icons/IconIncrementQuantity'

import style from './cartButton.module.scss'

const CartButton = ({
  children,
  active = false,
  onUpdateQuantity,
  cartItems = [],
  dessert,
  ...props
}) => {
  const currentQuantity = cartItems.find((item) => item.name === dessert?.name)?.quantity || 1

  const handleCounterClick = (e, type) => {
    e.stopPropagation()

    const newQuantity =
      type === 'decrement' ? Math.max(1, currentQuantity - 1) : currentQuantity + 1

    onUpdateQuantity?.(dessert?.name, newQuantity)
  }

  return (
    <div className={`button ${style.button} ${active ? style['button--active'] : ''}`} {...props}>
      <div className={`${style.button__content} ${active ? style['button__active-content'] : ''}`}>
        {active ? (
          // Активное состояние - счетчик
          <>
            <button
              type="button"
              className={`${style.button__decrement} ${style.button__calculate}`}
              onClick={(e) => handleCounterClick(e, 'decrement')}
            >
              <IconDecrement />
            </button>
            <span className={style['button__calculate-counter']}>{currentQuantity}</span>
            <button
              type="button"
              className={`${style.button__increment} ${style.button__calculate}`}
              onClick={(e) => handleCounterClick(e, 'increment')}
            >
              <IconIncrement />
            </button>
          </>
        ) : (
          // Неактивное состояние - обычная кнопка
          children
        )}
      </div>
    </div>
  )
}

export default CartButton
