/* eslint-disable import/no-unresolved */
import ProductCard from '@components/ui/productCard/ProductCard'
import productsData from '@data/products'

const ProductListPage = () => {
  return (
    <div className="deserts-list-pages">
      <h1>Desserts</h1>
      <div className="deserts-grid">
        {productsData.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductListPage
