import React from 'react'

const SupervisorCard = () => {
  return (
   <>
   <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  <div className="p-6">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
          JD
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900">Dr. Jane Doe</h3>
        <p className="text-sm text-gray-500">Computer Science Department</p>
        <div className="mt-2 flex flex-wrap gap-1">
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Machine Learning</span>
          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Computer Vision</span>
          <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">AI</span>
        </div>
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <i className="fas fa-user-graduate mr-1" />
          <span>5 students supervised</span>
          <span className="mx-2">•</span>
          <i className="fas fa-star text-yellow-400 mr-1" />
          <span>4.8 (12 reviews)</span>
        </div>
      </div>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
        View Profile
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
        Request Supervision
      </button>
    </div>
  </div>
</div>


   </>
  )
}

export default SupervisorCard