import style from './DessertCartItem.module.scss'

const DessertCartItem = ({ cartItems = [] }) => {
  return (
    <ul className={style.cartItems}>
      {cartItems.map((item, index) => (
        <li key={index} className={style.cartItem}>
          <span>{item.name}</span>
          <span>${item.price}</span>
          <span>Quantity: {item.quantity}</span>
        </li>
      ))}
    </ul>
  )
}

export default DessertCartItem
