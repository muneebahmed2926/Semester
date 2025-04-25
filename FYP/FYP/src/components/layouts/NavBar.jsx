import React from 'react'

const NavBar = () => {
  return (
    <>
    <nav className="bg-gray-800 text-white shadow-lg">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      {/* Mobile menu button (hidden on larger screens) */}
      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button p-2 rounded-md hover:bg-gray-700 focus:outline-none">
          <i className="fas fa-bars" />
        </button>
      </div>
      {/* Centered navigation links */}
      <div className="hidden md:flex items-center justify-center flex-1">
        <div className="flex space-x-1">
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
            <i className="fas fa-home mr-1" /> Dashboard
          </a>
          {/* Students Dropdown */}
          <div className="relative group">
            <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
              <i className="fas fa-users mr-1" /> Students <i className="fas fa-caret-down ml-1" />
            </button>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg z-10 min-w-[200px]">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                <i className="fas fa-list mr-2" /> All Students
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                <i className="fas fa-user-plus mr-2" /> Assign Students
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                <i className="fas fa-search mr-2" /> Find Student
              </a>
            </div>
          </div>
          {/* Projects Dropdown */}
          <div className="relative group">
            <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
              <i className="fas fa-project-diagram mr-1" /> Projects <i className="fas fa-caret-down ml-1" />
            </button>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg z-10 min-w-[200px]">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                <i className="fas fa-list mr-2" /> All Projects
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                <i className="fas fa-check-circle mr-2" /> Approve Projects
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                <i className="fas fa-chart-line mr-2" /> Progress Tracking
              </a>
            </div>
          </div>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
            <i className="fas fa-calendar-alt mr-1" /> Meetings
          </a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center">
            <i className="fas fa-file-alt mr-1" /> Reports
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Mobile menu (hidden by default) */}
  <div className="mobile-menu hidden md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center">
        <i className="fas fa-home mr-2" /> Dashboard
      </a>
      {/* Mobile Students Dropdown */}
      <div className="relative">
        <button className="mobile-students-button w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center justify-between">
          <span><i className="fas fa-users mr-2" /> Students</span>
          <i className="fas fa-caret-down" />
        </button>
        <div className="mobile-students-dropdown hidden pl-4">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center">
            <i className="fas fa-list mr-2" /> All Students
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center">
            <i className="fas fa-user-plus mr-2" /> Assign Students
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center">
            <i className="fas fa-search mr-2" /> Find Student
          </a>
        </div>
      </div>
      {/* Mobile Projects Dropdown */}
      <div className="relative">
        <button className="mobile-projects-button w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center justify-between">
          <span><i className="fas fa-project-diagram mr-2" /> Projects</span>
          <i className="fas fa-caret-down" />
        </button>
        <div className="mobile-projects-dropdown hidden pl-4">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center">
            <i className="fas fa-list mr-2" /> All Projects
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center">
            <i className="fas fa-check-circle mr-2" /> Approve Projects
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center">
            <i className="fas fa-chart-line mr-2" /> Progress Tracking
          </a>
        </div>
      </div>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center">
        <i className="fas fa-calendar-alt mr-2" /> Meetings
      </a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center">
        <i className="fas fa-file-alt mr-2" /> Reports
      </a>
    </div>
  </div>
</nav>

    </>

  )
}

export default NavBar