import Button from '../button/Button'
import IconCart from '../icons/IconCart'

const ProductCard = ({ product }) => {
  if (!product || !product.image) {
    return <div className="product-card">Loading...</div>
  }
  return (
    <div className="product-card">
      <div className="product-card__media">
        <picture>
          <source srcSet={product.image.mobile} alt={product.name} media="(max-width: 767px)" />
          <source srcSet={product.image.tablet} alt={product.name} media="(max-width: 1023px)" />
          <img src={product.image.desktop} alt={product.name} />
        </picture>
        <Button variant="product-cart">
          <IconCart />
          Add to cart
        </Button>
      </div>
      <div className="product-card__info">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
