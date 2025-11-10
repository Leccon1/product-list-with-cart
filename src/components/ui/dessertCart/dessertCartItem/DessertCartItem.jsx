import IconRemove from '../../icons/IconRemove'

import style from './DessertCartItem.module.scss'

const DessertCartItem = ({ item }) => {
  const itemTotal = item.price * item.quantity

  return (
    <li className={style.cartItem}>
      <div className={style.cartItemContent}>
        <p className={style.cartItemName}>{item.name}</p>
        <div className={style.cartItemInfo}>
          <span className={style.cartItemQuantity}>{item.quantity}х</span>
          <span className={style.cartItemBasePrice}>@ ${item.price}</span>
          <span className={style.cartItemTotalPrice}>${itemTotal.toFixed(2)}</span>
        </div>
      </div>
      <button type="button" className={style.cartItemDelete}>
        <IconRemove />
      </button>
    </li>
  )
}
export default DessertCartItem
