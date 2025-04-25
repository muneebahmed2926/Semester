import React from 'react'

const SupervisorProfile = () => {
  return (
    <>
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
  <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
    {/* Modal Header */}
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Supervisor Profile</h3>
        <button className="text-gray-400 hover:text-gray-500">
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
    {/* Modal Body */}
    <div className="px-6 py-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="md:w-1/3">
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl font-bold mb-4">
              JD
            </div>
            <h3 className="text-xl font-semibold">Dr. Jane Doe</h3>
            <p className="text-gray-600">Associate Professor</p>
            <p className="text-gray-500 text-sm mt-1">Computer Science Department</p>
            <div className="mt-4 w-full">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">Availability</span>
                <span className="font-medium text-green-600">Accepting Students</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}} />
              </div>
              <p className="text-xs text-gray-500 mt-1">5 slots remaining</p>
            </div>
            <div className="mt-4 w-full">
              <h4 className="font-medium text-gray-700 mb-2">Contact</h4>
              <p className="text-sm flex items-center text-gray-600 mb-1">
                <i className="fas fa-envelope mr-2" /> j.doe@university.edu
              </p>
              <p className="text-sm flex items-center text-gray-600">
                <i className="fas fa-phone-alt mr-2" /> +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-2/3">
          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-2">Research Areas</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Machine Learning</span>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Computer Vision</span>
              <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">AI</span>
              <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">Natural Language Processing</span>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-2">About</h4>
            <p className="text-gray-600">
              Dr. Jane Doe specializes in artificial intelligence with a focus on machine learning applications in computer vision. 
              She has published over 50 papers in top-tier conferences and journals. Her current research explores...
            </p>
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-2">Supervision Style</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2" />
                <span className="text-gray-600">Weekly meetings</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2" />
                <span className="text-gray-600">Hands-on approach</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2" />
                <span className="text-gray-600">Industry connections</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-2">Current Students (5)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 mr-2" />
                <span className="text-sm text-gray-600">John Smith - ML for Healthcare</span>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 mr-2" />
                <span className="text-sm text-gray-600">Sarah Lee - Computer Vision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Modal Footer */}
    <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
        Save for Later
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Request Supervision
      </button>
    </div>
  </div>
</div>


    </>
  )
}

export default SupervisorProfile