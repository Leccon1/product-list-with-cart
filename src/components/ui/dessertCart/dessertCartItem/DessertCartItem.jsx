import style from './DessertCartItem.module.scss'

const DessertCartItem = ({ cartItems = [] }) => {
  return (
    <div className={style.cartItems}>
      {cartItems.map((item, index) => (
        <div key={index} className={style.cartItem}>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default DessertCartItem
