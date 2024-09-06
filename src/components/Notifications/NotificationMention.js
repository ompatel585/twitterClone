import React from 'react';
import LeftBox from '../Home/LeftBox';
import { IoIosSettings } from "react-icons/io";
import NotificationRight from './NotificationRight';
import { Link } from 'react-router-dom';

function NotificationAll() {
  return (
    <div className='flex h-full text-white font-normal'>

      <div className="sticky top-0 w-1/4 h-full">
        <LeftBox />
      </div>
      <div className='flex overflow-y-auto  no-scrollbar'>

        <div className='text-white w-[650px]  h-full '>
          <div className=' border-2 border-gray-700 h-full'>
            <div>
              <div className='flex items-center justify-between mx-6 font-bold text-[24px] mt-5  '>

                <p>Notifications</p>

                <IoIosSettings className='h-[25px] w-[25px] ' />

              </div>
              <div className='flex justify-around font-semibold text-[18px] mt-8 pb-2 border-b-2 border-b-gray-700'>
                <div>
                  <Link to="/notifications/all">
                    <p>All</p>
                  </Link>
                </div>

                <div>
                  <Link to="/notifications/verified">
                    <p>Verified</p>
                  </Link>
                </div>
                <div className='border-b-[4px] border-blue-500  rounded-b-sm   pb-1'>
                  <Link to="/notifications/mentions">
                    <p>Mentions</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className='ml-[16%] mt-10'>
              <p className='text-[30px] font-extrabold' >Nothing to see here </p>
              <p className='text-[30px] font-extrabold'>— yet</p>
              <p className='text-[16px] font-normal text-gray-400'>When someone mentions you, you will find here.</p>
            </div>

          </div>

        </div>
      </div>
      <div className='w-[1/4] '>
        <NotificationRight />
      </div>
    </div>
  )
}

export default NotificationAll;