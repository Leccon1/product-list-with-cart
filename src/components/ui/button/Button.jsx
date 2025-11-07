import { useState, useEffect, useRef } from 'react'

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
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsClicked(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClick = (e) => {
    setIsClicked(!isClicked)
    props.onClick?.(e)
  }

  return (
    // будет пустой div, так надо)
    <div ref={buttonRef}>
      <button
        className={`${style.button} ${style[`button--${variant}`]} ${isClicked ? style['button--active'] : ''}`}
        onClick={handleClick}
        {...props}
      >
        {/* если кнопка нажата, то ставит стили */}
        <div
          className={`${style.button__content} ${isClicked ? style['button__active-content'] : ''}`}
        >
          {isClicked ? (
            showCounter ? (
              // счетчик для варианта product-card
              <>
                <button
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
                  className={`${style.button__increment} ${style.button__calculate}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setProductValue((prev) => prev + 1)
                  }}
                >
                  <IconIncrement />
                </button>
              </>
            ) : (
              activeContent || children // если не передан актив контент, то будет чилдрен
            )
          ) : (
            // Неактивное состояние
            children
          )}
        </div>
      </button>
    </div>
  )
}

export default Button
