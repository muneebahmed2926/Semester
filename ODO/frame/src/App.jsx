import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './views/home/ProductCard'
import CategoryFilter from './views/home/CategoryFilter'
import ShoppingCart from './views/home/ShoppingCart'
import ProductCarousel from './views/home/ProductCarousel'
import CustomerReview from './views/home/CustomerReview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCard />
    <CategoryFilter />
    <ShoppingCart/>
    <ProductCarousel/>
    <CustomerReview/>
    
    
    </>
  )
}

export default App
