import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { removeFromCart, clearCart } from '../features/cartSlice'

export default function CartSummary() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const calculateSubtotal = () => cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const calculateOffers = () => {
    let savings = 0
    cartItems.forEach(i => {
      if (i.offer === '10% off') savings += 0.1 * i.price * i.quantity
      if (i.offer === 'Buy 1 Get 1 Free') savings += Math.floor(i.quantity / 2) * i.price
      if (i.offer === 'Buy 2 Get 1 Half Off') savings += Math.floor(i.quantity / 3) * (i.price / 2)
      if (i.offer === '30% off') savings += 0.3 * i.price * i.quantity  

    })
    return savings
  }

  const subtotal = calculateSubtotal()
  const totalSavings = calculateOffers()
  const finalTotal = subtotal - totalSavings

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-xl mt-6">
      <h2 className="text-xl font-semibold mb-3">Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
      ) : (
        <div className="space-y-2">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-600 text-sm">Remove</button>
            </div>
          ))}
          <div className="pt-3 text-sm">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Savings: -${totalSavings.toFixed(2)}</p>
            <p className="font-semibold text-blue-700">Total: ${finalTotal.toFixed(2)}</p>
          </div>
          <button onClick={() => dispatch(clearCart())} className="bg-gray-200 text-sm px-3 py-1 rounded-md mt-3 hover:bg-gray-300">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  )
}