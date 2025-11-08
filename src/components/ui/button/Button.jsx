import { useState } from 'react'

import IconDecrement from '../icons/IconDecrementQuantity'
import IconIncrement from '../icons/IconIncrementQuantity'

import style from './Button.module.scss'

const Button = ({
  children,
  variant = 'product-card',
  activeContent,
  active = false,
  showCounter = true,
  onStateChange,
  ...props
}) => {
  const [productValue, setProductValue] = useState(1)

  const handleClick = (e) => {
    const newState = !active
    onStateChange?.(newState)
    props.onClick?.(e)
  }

  const handleCounterClick = (e, type) => {
    e.stopPropagation()
    if (type === 'decrement') {
      setProductValue((prev) => Math.max(1, prev - 1))
    } else {
      setProductValue((prev) => prev + 1)
    }
  }

  return (
    <div
      className={`${style.button} ${style[`button--${variant}`]} ${active ? style['button--active'] : ''}`}
      onClick={handleClick}
      {...props}
    >
      <div className={`${style.button__content} ${active ? style['button__active-content'] : ''}`}>
        {active && showCounter ? (
          // Активное состояние со счетчиком
          <>
            <button
              type="button"
              className={`${style.button__decrement} ${style.button__calculate}`}
              onClick={(e) => handleCounterClick(e, 'decrement')}
            >
              <IconDecrement />
            </button>
            <span className={style['button__calculate-counter']}>{productValue}</span>
            <button
              type="button"
              className={`${style.button__increment} ${style.button__calculate}`}
              onClick={(e) => handleCounterClick(e, 'increment')}
            >
              <IconIncrement />
            </button>
          </>
        ) : active ? (
          // Активное состояние с кастомным контентом (КастомизИрованный)
          activeContent || children
        ) : (
          // не активное состояние
          children
        )}
      </div>
    </div>
  )
}

export default Button
