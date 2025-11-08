/* eslint-disable import/no-unresolved */
import ProductCard from '@components/ui/productCard/ProductCard'
import productsData from '@data/products'

const ProductListPage = () => {
  return (
    <div className="product-list">
      {productsData.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  )
}

export default ProductListPage
