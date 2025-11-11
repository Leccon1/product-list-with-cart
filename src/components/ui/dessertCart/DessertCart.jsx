// eslint-disable-next-line import/no-unresolved
import emptyCartIconSvg from '@images/illustration-empty-cart.svg'

import IconCarbonNeutral from '../icons/IconCarbonNeutral'

import style from './dessertCart.module.scss'
import DessertCartItem from './dessertCartItem/DessertCartItem'

const DessertCart = ({ cartItems = [] }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div
      className={style.dessertCart}
      style={cartItems.length === 0 ? {} : { justifyContent: 'space-between' }}
    >
      <h2 className={style.dessertCartTitle}>Your Cart ({totalQuantity})</h2>
      {cartItems.length === 0 ? (
        <div className={style.dessertCartEmptyContainer}>
          <img src={emptyCartIconSvg} alt="Empty cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <ul className={style.cartItems}>
          {cartItems.map((item) => (
            <DessertCartItem key={item.name} item={item} />
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className={style.dessertCartTotal}>
          <span className={style.dessertCartTotalText}>Order Total</span>
          <span className={style.dessertCartTotalPrice}>
            ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
          </span>
        </div>
      )}
      <div className={style.dessertCartDivider}>
        <IconCarbonNeutral />
        This is a <b>carbon-neutral</b> delivery
      </div>
    </div>
  )
}

export default DessertCart
