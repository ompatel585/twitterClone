import React from 'react';
import logo from '../../assets/logo.png';
import { GoHome } from "react-icons/go";
import { IoMdSearch, IoMdNotifications } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { FaSlash } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { Link } from 'react-router-dom';

//<img src={logo} alt="Logo" className='' />


function LeftBox() {
  return (
    <div>
      <div className='text-white text-[24px] p-5 flex justify-end lg:w-[400px]'>

        <div>
          <div className='w-[30px] h-[31px] bg-red-500 m-4 cursor-pointer'>
            <Link
              to="/"
              className=''
            >
              <img src={logo} alt="Logo" className='' />
            </Link>
          </div>

          <Link
            to="/"
            className='flex items-center lg:h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
          >
            <GoHome />
            <p>Home</p>
          </Link>
          <Link
            to="/explore"
            className='flex items-center lg:h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
          >
            <IoMdSearch />
            <p>Explore</p>
          </Link>
          <Link
            to="/notifications"
            className='flex items-center lg:h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
          >
            <IoMdNotifications />
            <p>Notifications</p>
          </Link>
          <Link
            to="/messages"
            className='flex items-center lg:h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
          >
            <LuMail />
            <p>Messages</p>
          </Link>
          <Link
            to="/grok"
            className='flex items-center lg:h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
          >
            <FaSlash />
            <p>Grok</p>
          </Link>
          <Link
            to="/profile"
            className='flex items-center lg:h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
          >
            <CiUser />
            <p>Profile</p>
          </Link>
          <div
            className='flex items-center lg:h-[70px] gap-x-6 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
          >
            <MdOutlineMoreHoriz />
            <p>More</p>
          </div>
          <div
            className='flex items-center lg:h-[70px] gap-x-6  cursor-pointer transition-all'
          >
            <button className='bg-blue-500 rounded-2xl w-36 h-10'>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBox;
