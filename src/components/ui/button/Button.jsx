import { useState, useEffect, useRef } from 'react'

import IconDecrement from '../icons/IconDecrementQuantity'
import IconIncrement from '../icons/IconIncrementQuantity'

const Button = ({ children, variant = 'product-card', ...props }) => {
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
    <div ref={buttonRef}>
      <button
        className={`button button--${variant} ${isClicked ? 'button--active' : ''}`}
        onClick={handleClick}
        {...props}
      >
        <div className={`button__content ${isClicked ? 'button__active-content' : ''}`}>
          {isClicked ? (
            <>
              <button
                className="button__decrement button__calculate"
                onClick={(e) => {
                  e.stopPropagation()
                  setProductValue((prev) => Math.max(1, prev - 1))
                }}
              >
                <IconDecrement />
              </button>
              <span className="button__calculate-counter">{productValue}</span>
              <button
                className="button__increment button__calculate"
                onClick={(e) => {
                  e.stopPropagation()
                  setProductValue((prev) => prev + 1)
                }}
              >
                <IconIncrement />
              </button>
            </>
          ) : (
            children
          )}
        </div>{' '}
      </button>
    </div>
  )
}

export default Button
