/* eslint-disable import/no-unresolved */
import DessertCard from '@components/ui/dessertCard/DessertCard'
import dessertsData from '@data/dessert'

import DessertCart from '../ui/dessertCart/DessertCart'

import style from './DessertListPage.module.scss'

const DessertListPage = () => {
  return (
    <div className={style.dessertsListPage}>
      <div className={style.dessertMain}>
        <h1 className={style.dessertTitle}>Desserts</h1>
        <div className={style.dessertsGrid}>
          {dessertsData.map((dessert) => (
            <DessertCard key={dessert.name} product={dessert} />
          ))}
        </div>
      </div>
      <DessertCart />
    </div>
  )
}

export default DessertListPage
