import React from 'react';
import { IoSearch } from "react-icons/io5";


function RightBox() {
  return (
    <div>
      <div className='text-white  h-screen w-[365px]'>
        <div className='p-6'>
          <div className='flex items-center border-2  border-blue-500 bg-gray-700 rounded-full 
                          w-full h-[52.8px] '>
            <div className='h-[52px] w-[52px] flex items-center justify-center'>
              <IoSearch className='  border-r-blue-400' />
            </div>
            <div>
              <input type="text" placeholder='Search'
                className=' bg-transparent focus:outline-none focus:border-transparent' />
            </div>

          </div>
          <div className='border border-gray-400 mt-4 rounded-xl p-4'>
            <p className='text-[24px] font-bold'>Subscribe to Premium</p>
            <p className='text-[17px]' style={{ whiteSpace: 'pre-line' }}>
              {`Subscribe to unlock new features and 
              if eligible, receive a share of ads 
              revenue.`}
            </p>
            <div className='flex justify-center items-center  '>
              <button className='bg-blue-500 rounded-full h-[50px]  w-[100px]'>Subscribe</button>
            </div>

          </div>

          <div className='mt-6'>
            <p className='text-[24px] font-bold'>What’s happening</p>
            <div className='mt-4'>
              <div className='mb-4'>
                <p className='text-[16px] font-semibold'>Sports · Trending</p>
                <p className='text-[14px]'>#NEUFC</p>
                <p className='text-[12px] text-gray-500'>Trending with John Abraham, #northeastunitedfc</p>
              </div>
              <div className='mb-4'>
                <p className='text-[16px] font-semibold'>Entertainment · Trending</p>
                <p className='text-[14px]'>#TheGreatestOfAllTime</p>
                <p className='text-[12px] text-gray-500'>Trending with #TheGOAT, #Matta</p>
              </div>
              <div className='mb-4'>
                <p className='text-[16px] font-semibold'>Sports · Trending</p>
                <p className='text-[14px]'>#KBFC</p>
                <p className='text-[12px] text-gray-500'>1,228 posts · Trending in India</p>
              </div>
              <div className='mb-4'>
                <p className='text-[16px] font-semibold'>Trending in India</p>
                <p className='text-[14px]'>#GunturKaaram</p>
                <p className='text-[12px] text-gray-500'>Trending with #KurchiMadathapetti</p>
              </div>
              <div className='mb-4'>
                <p className='text-[16px] font-semibold'>News · Trending</p>
                <p className='text-[14px]'>मानक गुप्ता</p>
                <p className='text-[12px] text-gray-500'>2,383 posts</p>
              </div>
              <div className='text-blue-500 text-[14px] cursor-pointer'>
                Show more
              </div>
            </div>
            </div>


        </div>
      </div>
    </div>
  )
}

export default RightBox;