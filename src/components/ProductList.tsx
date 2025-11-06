import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { addToCart } from '../features/cartSlice'

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
            {product.offer && <p className="text-xs text-green-600">{product.offer}</p>}
          </div>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  )
}