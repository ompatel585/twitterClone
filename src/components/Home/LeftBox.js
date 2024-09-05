import React from 'react';
import logo from '../../assets/logo.png';
import { GoHome } from "react-icons/go";
import { IoMdSearch, IoMdNotifications } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { FaSlash } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { RiQuillPenLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

//<img src={logo} alt="Logo" className='' />


function LeftBox() {
  return (
    <div>
      <div className='hidden sm:block text-white text-[24px] sm:p-5 sm:flex justify-end w-full sm:block'>

        <div>
          <div className='w-[30px] h-[31px] bg-red-500 m-4 cursor-pointer'>
            <Link
              to="/"
              className=''
            >
              <img src={logo} alt="Logo" className='' />
            </Link>
          </div>
          <div className=''>
            <Link
              to="/"
              className='flex items-center h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
            >
              <GoHome />
              <p>Home</p>
            </Link>
            <Link
              to="/explore"
              className='flex items-center h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
            >
              <IoMdSearch />
              <p>Explore</p>
            </Link>
            <Link
              to="/notifications"
              className='flex items-center h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
            >
              <IoMdNotifications />
              <p>Notifications</p>
            </Link>
            <Link
              to="/messages"
              className='flex items-center h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
            >
              <LuMail />
              <p>Messages</p>
            </Link>
            <Link
              to="/grok"
              className='flex items-center h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
            >
              <FaSlash />
              <p>Grok</p>
            </Link>
            <Link
              to="/profile"
              className='flex items-center h-[70px] gap-x-6 px-4 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
            >
              <CiUser />
              <p>Profile</p>
            </Link>
            <div
              className='flex items-center h-[70px] gap-x-6 border border-transparent hover:border-blue-400 hover:bg-gray-900 hover:rounded-2xl cursor-pointer transition-all'
            >
              <MdOutlineMoreHoriz />
              <p>More</p>
            </div>
            <div
              className='flex items-center h-[70px] gap-x-6  cursor-pointer transition-all'
            >
              <button className='bg-blue-500 rounded-2xl w-36 h-10'>Post</button>
            </div>
          </div>
        </div>
      </div>

      {/* For screens below 640px */}
      <div className='sm:hidden fixed bottom-0 w-full bg-gray-900 text-white flex justify-around p-4'>
        <Link to="/" className='flex flex-col items-center'>
          <GoHome />
        </Link>
        <Link to="/explore" className='flex flex-col items-center'>
          <IoMdSearch />
        </Link>
        <Link to="/notifications" className='flex flex-col items-center'>
          <IoMdNotifications />
        </Link>
        <Link to="/messages" className='flex flex-col items-center'>
          <LuMail />
        </Link>
        <Link to="/grok" className='flex flex-col items-center'>
          <FaSlash />
        </Link>
        <Link to="/profile" className='flex flex-col items-center'>
          <CiUser />
        </Link>
        <div className='flex flex-col items-center cursor-pointer'>
        
        
        </div>
        <button className='bg-blue-500 rounded-2xl w-16 h-8'><RiQuillPenLine /></button>
      </div>
      

      



    </div>
  );
}

export default LeftBox;
