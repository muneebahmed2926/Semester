import React from 'react'

const FilterSidebar = () => {
  return (
    <>
   <div className="bg-white p-6 rounded-lg shadow-md">
  <h3 className="text-lg font-semibold mb-4">Filter Supervisors</h3>
  <div className="space-y-5">
    {/* Department Filter */}
    <div>
      <h4 className="font-medium text-gray-700 mb-2">Department</h4>
      <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
        <option>All Departments</option>
        <option>Computer Science</option>
        <option>Electrical Engineering</option>
        <option>Mechanical Engineering</option>
        <option>Business Administration</option>
      </select>
    </div>
    {/* Research Area Filter */}
    <div>
      <h4 className="font-medium text-gray-700 mb-2">Research Area</h4>
      <div className="space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <span className="ml-2 text-gray-700">Artificial Intelligence</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <span className="ml-2 text-gray-700">Data Science</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <span className="ml-2 text-gray-700">Cybersecurity</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <span className="ml-2 text-gray-700">Software Engineering</span>
        </label>
      </div>
    </div>
    {/* Availability Filter */}
    <div>
      <h4 className="font-medium text-gray-700 mb-2">Availability</h4>
      <div className="flex items-center space-x-4">
        <label className="flex items-center">
          <input type="radio" name="availability" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
          <span className="ml-2 text-gray-700">Available</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="availability" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
          <span className="ml-2 text-gray-700">Limited</span>
        </label>
        <label className="flex items-center">
          <input type="radio" name="availability" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
          <span className="ml-2 text-gray-700">Full</span>
        </label>
      </div>
    </div>
    <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
      Apply Filters
    </button>
  </div>
</div>

    </>
  )
}

export default FilterSidebar