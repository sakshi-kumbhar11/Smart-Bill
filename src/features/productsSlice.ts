import { createSlice } from '@reduxjs/toolkit'

export interface Product {
  id: number
  name: string
  price: number
  offer?: string
}

const initialState: Product[] = [
  { id: 1, name: 'Apple', price: 1.0, offer: '10% off' },
  { id: 2, name: 'Milk', price: 1.5, offer: 'Buy 1 Get 1 Free' },
  { id: 3, name: 'Bread', price: 2.0, offer: 'Buy 2 Get 1 Half Off' },
  { id: 4, name: 'Cheese', price: 2.5 },
  { id: 4, name: 'Soup', price: 0.6 },
  { id: 5, name: 'Butter', price: 1.2, offer:'30% off' },

]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export default productsSlice.reducer

