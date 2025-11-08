// eslint-disable-next-line import/no-unresolved
import emptyCartIconSvg from '@images/illustration-empty-cart.svg'

import style from './DessertCart.module.scss'

const DessertCart = ({ cartItems = [] }) => {
  const countDesserts = cartItems.length

  return (
    <div className={style.dessertCart}>
      <h2 className={style.dessertCartTitle}>Your Cart ({countDesserts})</h2>
      {cartItems.length === 0 ? (
        <>
          <img src={emptyCartIconSvg} alt="Empty cart" />
          <p>Your added items will appear here</p>
        </>
      ) : (
        <div className={style.cartItems}>
          {cartItems.map((item, index) => (
            <div key={index} className={style.cartItem}>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DessertCart
