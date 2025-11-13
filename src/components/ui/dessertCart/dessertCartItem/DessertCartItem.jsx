// eslint-disable-next-line import/no-unresolved
import IconRemove from '@iconsComponent/IconRemove'

import style from './dessertCartItem.module.scss'

const DessertCartItem = ({ item, onRemoveFromCart, variant = 'default' }) => {
  const itemTotal = item.price * item.quantity

  return (
    <li className={style.cartItem}>
      {variant === 'modal' && <img src={item.image?.thumbnail} alt={item.image.thumbnail} />}
      <div className={style.cartItemContent}>
        <p className={style.cartItemName}>{item.name}</p>
        <div className={style.cartItemInfo}>
          <span className={style.cartItemQuantity}>{item.quantity}х</span>
          <span className={style.cartItemBasePrice}>@ ${item.price}</span>
          <span className={style.cartItemTotalPrice}>${itemTotal.toFixed(2)}</span>
        </div>
      </div>
      <button
        type="button"
        className={style.cartItemDelete}
        onClick={() => onRemoveFromCart(item.name)}
      >
        <IconRemove />
      </button>
    </li>
  )
}
export default DessertCartItem
