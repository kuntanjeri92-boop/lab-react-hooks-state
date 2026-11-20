import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#121212' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000',
        minHeight: '100vh',
        padding: '1rem'
      }}
    >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      <div>
        <label>Filter by Category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App
