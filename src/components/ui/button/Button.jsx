import { useState } from 'react'

import IconDecrement from '../icons/IconDecrementQuantity'
import IconIncrement from '../icons/IconIncrementQuantity'

import style from './Button.module.scss'

const Button = ({
  children,
  variant = 'product-card',
  activeContent,
  showCounter = true,
  ...props
}) => {
  const [productValue, setProductValue] = useState(1)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e) => {
    setIsClicked(!isClicked)
    props.onClick?.(e)
  }

  return (
    <div
      className={`${style.button} ${style[`button--${variant}`]} ${isClicked ? style['button--active'] : ''}`}
      onClick={handleClick}
      {...props}
    >
      <div
        className={`${style.button__content} ${isClicked ? style['button__active-content'] : ''}`}
      >
        {isClicked && showCounter ? (
          <>
            <button
              type="button"
              className={`${style.button__decrement} ${style.button__calculate}`}
              onClick={(e) => {
                e.stopPropagation()
                setProductValue((prev) => Math.max(1, prev - 1))
              }}
            >
              <IconDecrement />
            </button>
            <span className={style['button__calculate-counter']}>{productValue}</span>
            <button
              type="button"
              className={`${style.button__increment} ${style.button__calculate}`}
              onClick={(e) => {
                e.stopPropagation()
                setProductValue((prev) => prev + 1)
              }}
            >
              <IconIncrement />
            </button>
          </>
        ) : isClicked ? (
          activeContent || children
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export default Button
