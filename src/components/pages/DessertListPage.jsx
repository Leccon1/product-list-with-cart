/* eslint-disable import/no-unresolved */
import DessertCard from '@components/ui/dessertCard/DessertCard'
import dessertsData from '@data/dessert'
import { useState } from 'react'

import DessertCart from '../ui/dessertCart/DessertCart'

import style from './DessertListPage.module.scss'

const DessertListPage = () => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (dessert) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.name === dessert.name)

      if (existingItem) {
        return prev.filter((item) => item.name !== dessert.name)
      } else {
        return [...prev, { ...dessert, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (dessertName, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.name === dessertName ? { ...item, quantity: newQuantity } : item))
    )
  }
  const updateTotalQuantity = (newTotal) => {
    setCartItems((prev) => prev.map((item) => ({ ...item, quantity: newTotal })))
  }
  return (
    <div className={style.dessertsListPage}>
      <div className={style.dessertMain}>
        <h1 className={style.dessertTitle}>Desserts</h1>
        <div className={style.dessertsGrid}>
          {dessertsData.map((dessert) => (
            <DessertCard
              key={dessert.name}
              product={dessert}
              onAddToCart={addToCart}
              cartItems={cartItems}
              onUpdateQuantity={updateQuantity}
              onUpdateTotalQuantity={updateTotalQuantity}
            />
          ))}
        </div>
      </div>
      <DessertCart cartItems={cartItems} />
    </div>
  )
}

export default DessertListPage
