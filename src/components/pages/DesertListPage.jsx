/* eslint-disable import/no-unresolved */
import ProductCard from '@components/ui/desertCard/DesertCard'
import productsData from '@data/desert'

import DesertCart from '../ui/desertCart/DesertCart'

import style from './DesertListPage.module.scss'

const DesertListPage = () => {
  return (
    <div className={style.desertsListPage}>
      <div className={style.desertMain}>
        <h1 className={style.desertTitle}>Desserts</h1>
        <div className={style.desertsGrid}>
          {productsData.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
      <DesertCart />
    </div>
  )
}

export default DesertListPage
