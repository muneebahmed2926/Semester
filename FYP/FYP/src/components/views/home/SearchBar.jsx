import React from 'react'

const SearchBar = () => {
  return (
    <>
   <div className="max-w-3xl mx-auto p-4">
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <i className="fas fa-search text-gray-400" />
    </div>
    <input type="text" className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search supervisors by name, department, or research area" />
    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
      <button className="px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Search
      </button>
    </div>
  </div>
  <div className="mt-2 flex flex-wrap gap-2">
    <span className="text-xs text-gray-500">Popular tags:</span>
    <button className="px-2 py-1 text-xs bg-gray-100 rounded-full hover:bg-gray-200">Machine Learning</button>
    <button className="px-2 py-1 text-xs bg-gray-100 rounded-full hover:bg-gray-200">AI</button>
    <button className="px-2 py-1 text-xs bg-gray-100 rounded-full hover:bg-gray-200">Cybersecurity</button>
    <button className="px-2 py-1 text-xs bg-gray-100 rounded-full hover:bg-gray-200">Data Science</button>
  </div>
</div>

    </>
  )
}

export default SearchBar