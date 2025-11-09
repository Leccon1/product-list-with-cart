// eslint-disable-next-line import/no-unresolved
import deleteButtonSvg from '@icons/icon-remove-item.svg'

import style from './DessertCartItem.module.scss'

const DessertCartItem = ({ cartItems = [] }) => {
  return (
    <ul className={style.cartItems}>
      {cartItems.map((item, index) => {
        const itemTotal = item.price * item.quantity

        return (
          <li key={index} className={style.cartItem}>
            <div className={style.cartItemContent}>
              <p className={style.cartItemName}>{item.name}</p>
              <div className={style.cartItemInfo}>
                <span className={style.cartItemQuantity}>{item.quantity}х</span>
                <span className={style.cartItemBasePrice}>@ ${item.price}</span>
                <span className={style.cartItemTotalPrice}>${itemTotal.toFixed(2)}</span>
              </div>
            </div>
            <button type="button" className={style.cartItemDelete}>
              <img src={deleteButtonSvg} alt="Delete Button" />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
export default DessertCartItem
