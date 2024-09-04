import React from 'react';
import { IoIosMore } from "react-icons/io";

function ExCardSports({ category, trendTitle, postCount }) {
  return (
    <div className="bg-gray-800 text-white p-4 mb-4 rounded-lg shadow-md my-2 hover:bg-gray-700 cursor-pointer transition-colors">
      <div className='flex'>
        <p className='text-gray-500 text-sm'>{category}</p>
        <IoIosMore size={28} className='ml-auto' />
      </div>

      <h3 className='text-white text-lg font-bold'>{trendTitle}</h3>
      <p className='text-gray-500 text-sm'>{postCount} </p>
    </div>
  );
}

export default ExCardSports;
