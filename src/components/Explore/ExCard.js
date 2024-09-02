// src/components/explore/ExCard.js
import React from 'react';
import { IoIosMore } from "react-icons/io";


function ExCard({ category, trendTitle, postCount }) {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-md my-2">
      <div className="text-md text-gray-400 flex">
        {category} · Trending
        <IoIosMore size={28} className='ml-auto'/>
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

export default ExCard;
