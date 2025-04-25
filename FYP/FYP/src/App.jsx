import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/views/home/SearchBar'
import SupervisorCard from './components/views/home/SupervisorCard'
import FilterSidebar from './components/views/home/FilterSidebar'
import Pagination from './components/views/home/Pagination'
import SupervisorProfile from './components/views/home/SupervisorProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar/>
      <SupervisorCard/>
      <FilterSidebar/>
      <Pagination/>
      {/* <SupervisorProfile/> */}
    </>
  )
}

export default App
