import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-blue-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="#" className="text-blue-800 font-bold text-xl flex items-center">
            <i className="fas fa-shopping-bag mr-2" />
            ODO
          </a>

          {/* Centered Desktop Navigation Links */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
            <a href="#" className="text-blue-700 hover:text-blue-900 font-medium">Home</a>
            <a href="#" className="text-blue-700 hover:text-blue-900 font-medium">Shop</a>
            <a href="#" className="text-blue-700 hover:text-blue-900 font-medium">Categories</a>
            <a href="#" className="text-blue-700 hover:text-blue-900 font-medium">Deals</a>
            <a href="#" className="text-blue-700 hover:text-blue-900 font-medium">About</a>
          </div>

          {/* Right Section - Icons & Search */}
          <div className="flex items-center space-x-4">
            {/* Search Bar (Desktop) */}
            <div className="hidden md:block relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white rounded-full py-1 px-4 pr-8 w-48 focus:outline-none focus:ring-2 focus:ring-blue-300" 
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600">
                <i className="fas fa-search" />
              </button>
            </div>
            
            {/* Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-blue-700 hover:text-blue-900 p-1">
                <i className="fas fa-heart text-lg" />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900 p-1 relative">
                <i className="fas fa-shopping-cart text-lg" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900 p-1">
                <i className="fas fa-user text-lg" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-blue-700 focus:outline-none">
              <i className="fas fa-bars text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden hidden pb-3" id="mobile-menu">
          <div className="space-y-2 pt-2">
            <a href="#" className="block text-blue-700 hover:text-blue-900 px-3 py-2">Home</a>
            <a href="#" className="block text-blue-700 hover:text-blue-900 px-3 py-2">Shop</a>
            <a href="#" className="block text-blue-700 hover:text-blue-900 px-3 py-2">Categories</a>
            <a href="#" className="block text-blue-700 hover:text-blue-900 px-3 py-2">Deals</a>
            <a href="#" className="block text-blue-700 hover:text-blue-900 px-3 py-2">About</a>
          </div>
          {/* Mobile Search */}
          <div className="mt-2 px-3 relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-white rounded-full py-1 px-4 pr-8 w-full focus:outline-none focus:ring-2 focus:ring-blue-300" 
            />
            <button className="absolute right-5 top-1/2 transform -translate-y-1/2 text-blue-600">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar