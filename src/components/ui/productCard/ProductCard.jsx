import { useState } from 'react'

import Button from '../button/Button'
import IconCart from '../icons/IconCart'

import style from './ProductCard.module.scss'

const ProductCardComponent = ({ product }) => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  if (!product || !product.image) {
    return <div className={style.productCard}>Loading...</div>
  }

  return (
    <div className={style.productCard}>
      <div
        className={`${style.productCardMedia} ${isButtonActive ? style.productCardMediaActive : ''}`}
      >
        <picture>
          <source srcSet={product.image.mobile} alt={product.name} media="(max-width: 767px)" />
          <source srcSet={product.image.tablet} alt={product.name} media="(max-width: 1023px)" />
          <img src={product.image.desktop} alt={product.name} />
        </picture>
        <Button variant="product-cart" onStateChange={setIsButtonActive}>
          <IconCart />
          Add to cart
        </Button>
      </div>
      <div className={style.productCardInfo}>
        <p className={style.productCardCategory}>{product.category}</p>
        <h3 className={style.productCardName}>{product.name}</h3>
        <p className={style.productCardPrice}>${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCardComponent
