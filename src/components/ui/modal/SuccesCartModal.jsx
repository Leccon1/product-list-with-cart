/* eslint-disable import/no-unresolved */
import dessertData from '@data/dessert'
import IconOrderConfirmed from '@iconsComponent/IconOrderConfirmed'
import { useEffect } from 'react'

import DessertCartItem from '../dessertCart/dessertCartItem/DessertCartItem'

import style from './succesCartModal.module.scss'

const SuccessCartModal = ({ isOpen, onClose, cartItems = [] }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const itemsWithImages = cartItems.map((cartItem) => {
    const fullItem = dessertData.find((d) => d.name === cartItem.name)
    return {
      ...cartItem,
      image: fullItem?.image,
    }
  })

  if (!isOpen) return null

  return (
    <div className={style.overlay}>
      <div className={style.modalOverlay}>
        <IconOrderConfirmed />
        <div className={style.modalText}>
          <h2 className={style.modalTitle}>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>

        <div className={style.orderSummary}>
          <ul className={style.orderSummaryList}>
            {itemsWithImages.map((item) => (
              <DessertCartItem key={item.name} item={item} variant="modal" />
            ))}
          </ul>
          <div className={style.orderSummaryTotal}>
            <span className={style.orderSummaryTotalText}>Order Total</span>
            <span className={style.orderSummaryTotalPrice}>
              ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </span>
          </div>
        </div>
        <button className={style.closeButton} onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default SuccessCartModal
