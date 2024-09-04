import React from 'react';

function ExCardNews() {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md my-2 hover:bg-gray-700 transition-colors">
      <div className="text-md text-gray-400 flex">
        {category}
        <IoIosMore size={24} className='ml-auto text-gray-400 hover:text-white transition-colors'/>
      </div>
      <div className="text-lg font-bold my-1">
        #{trendTitle}
      </div>
      <div className="text-sm text-gray-400">
        {postCount}
      </div>
    </div>
  )
}

export default ExCardNews;