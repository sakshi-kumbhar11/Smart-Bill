import React from 'react'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Smart Bill</h1>
      <Home />
    </div>
  )
}