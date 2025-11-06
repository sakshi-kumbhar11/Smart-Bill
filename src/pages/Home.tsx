import React from 'react'
import ProductList from '../components/ProductList'
import CartSummary from '../components/CartSummary'

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <ProductList />
      <CartSummary />
    </div>
  )
}