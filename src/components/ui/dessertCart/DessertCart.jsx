// eslint-disable-next-line import/no-unresolved
import emptyCartIconSvg from '@images/illustration-empty-cart.svg'

import style from './DessertCart.module.scss'
import DessertCartItem from './dessertCartItem/DessertCartItem'
const DessertCart = ({ cartItems = [] }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    // TODO: Исправить стили контейнера, чтобы прайс был снизу, тайтл вверху, а список айтемов сделать как в тг в избранных, через grid и тд...
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
        <DessertCartItem cartItems={cartItems} />
      )}
      {cartItems.length > 0 && (
        <div className={style.dessertCartTotal}>
          <span className={style.dessertCartTotalText}>Order Total</span>
          <span className={style.dessertCartTotalPrice}>
            ${cartItems.reduce((acc, item) => acc + item.price, 0)}
          </span>
        </div>
      )}
    </div>
  )
}

export default DessertCart
