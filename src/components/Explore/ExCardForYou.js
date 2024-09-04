// src/components/explore/ExCard.js
import React from 'react';
import { IoIosMore } from "react-icons/io";


function ExCardForYou({ category, trendTitle, postCount }) {
  return (
    <div className='bg-gray-800 p-4 rounded-lg mb-4 hover:bg-gray-700 cursor-pointer transition-colors'>
      <div className="text-md text-gray-400 flex">
        {category} · Trending
        <IoIosMore size={24} className='ml-auto text-gray-400 hover:text-white transition-colors'/>
      </div>
      <div className="text-lg font-bold my-1">
        #{trendTitle}
      </div>
      <div className="text-sm text-gray-400">
        {postCount} posts
      </div>
    </div>
  );
}

export default ExCardForYou;
