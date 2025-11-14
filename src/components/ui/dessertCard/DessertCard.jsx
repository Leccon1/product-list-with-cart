import Button from '../button/cartButton/CartButton'
import IconCart from '../icons/IconCart'

import style from './dessertCard.module.scss'

const DessertCardComponent = ({
  product: dessert,
  onAddToCart,
  cartItems,
  onUpdateQuantity,
  onUpdateTotalQuantity,
}) => {
  const isButtonActive = cartItems.some((item) => item.name === dessert.name)

  if (!dessert || !dessert.image) {
    return <div className={style.dessertCard}>Loading...</div>
  }

  const handleButtonClick = () => {
    onAddToCart(dessert)
  }

  return (
    <div className={style.dessertCard}>
      <div
        className={`${style.dessertCardMedia} ${isButtonActive ? style.dessertCardMediaActive : ''}`}
      >
        <picture>
          <source srcSet={dessert.image.mobile} alt={dessert.name} media="(max-width: 867px)" />
          <source srcSet={dessert.image.tablet} alt={dessert.name} media="(max-width: 1250px)" />
          <img src={dessert.image.desktop} alt={dessert.name} />
        </picture>
        <Button
          variant="product-cart"
          active={isButtonActive}
          onClick={handleButtonClick}
          onUpdateQuantity={onUpdateQuantity}
          onUpdateTotalQuantity={onUpdateTotalQuantity}
          cartItems={cartItems}
          dessert={dessert}
        >
          <IconCart />
          Add to cart
        </Button>
      </div>
      <div className={style.dessertCardInfo}>
        <p className={style.dessertCardCategory}>{dessert.category}</p>
        <h3 className={style.dessertCardName}>{dessert.name}</h3>
        <p className={style.dessertCardPrice}>${dessert.price}</p>
      </div>
    </div>
  )
}

export default DessertCardComponent
