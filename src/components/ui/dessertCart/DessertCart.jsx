// eslint-disable-next-line import/no-unresolved
import emptyCartIconSvg from '@images/illustration-empty-cart.svg'

import style from './DessertCart.module.scss'
import DessertCartItem from './dessertCartItem/DessertCartItem'
const DessertCart = ({ cartItems = [] }) => {
  const countDesserts = cartItems.length

  return (
    <div className={style.dessertCart}>
      <h2 className={style.dessertCartTitle}>Your Cart ({countDesserts})</h2>
      {cartItems.length === 0 ? (
        <div className={style.dessertCartEmptyContainer}>
          <img src={emptyCartIconSvg} alt="Empty cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <DessertCartItem cartItems={cartItems} />
      )}
    </div>
  )
}

export default DessertCart
