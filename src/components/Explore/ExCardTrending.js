import React from 'react';
import { IoIosMore } from "react-icons/io";

function ExCardTrending({ category, title, tweetsCount }) {


  return (
    <div className='bg-gray-800 p-4 rounded-lg mb-4 hover:bg-gray-700 cursor-pointer transition-colors'>
      <div className='flex'>
        <p className='text-gray-500 text-sm'>{category}</p>
        <IoIosMore size={28} className='ml-auto' />
      </div>

      <h3 className='text-white text-lg font-bold'>{title}</h3>
      <p className='text-gray-500 text-sm'>{tweetsCount} </p>
    </div>
  );
}

export default ExCardTrending;
