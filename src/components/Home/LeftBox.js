import React from 'react';
import logo from '../../assets/logo.png';
import { GoHome } from "react-icons/go";
import { IoMdSearch, IoMdNotifications } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import { FaSlash } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { Link } from 'react-router-dom';

function LeftBox() {
  return (
    <div>
      <div className='text-white text-[24px] p-4 pl-36 lg:w-[400px]'>
        <div className='h-16 w-16'>
          <div className='h-8 w-[30px]'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div>
          <Link to="/" className='flex items-center lg:h-[70px] gap-x-6 px-4 hover:border hover:border2 hover:border-blue-400 hover:rounded-2xl cursor-pointer'>
            <GoHome />
            <p>Home</p>
          </Link>
          <Link to="/explore" className='flex items-center lg:h-[70px] gap-x-6 px-4 hover:border hover:border2 hover:border-blue-400 hover:rounded-2xl cursor-pointer'>
            <IoMdSearch />
            <p>Explore</p>
          </Link>
          <Link to="/notifications" className='flex items-center lg:h-[70px] gap-x-6 px-4 hover:border hover:border2 hover:border-blue-400 hover:rounded-2xl cursor-pointer'>
            <IoMdNotifications />
            <p>Notifications</p>
          </Link>
          <Link to="/messages" className='flex items-center lg:h-[70px] gap-x-6 px-4 hover:border hover:border2 hover:border-blue-400 hover:rounded-2xl cursor-pointer'>
            <LuMail />
            <p>Messages</p>
          </Link>
          <Link to="/grok" className='flex items-center lg:h-[70px] gap-x-6 px-4 hover:border hover:border2 hover:border-blue-400 hover:rounded-2xl cursor-pointer'>
            <FaSlash />
            <p>Grok</p>
          </Link>
          <Link to="/profile" className='flex items-center lg:h-[70px] gap-x-6 px-4 hover:border hover:border2 hover:border-blue-400 hover:rounded-2xl cursor-pointer'>
            <CiUser />
            <p>Profile</p>
          </Link>
          <div className='flex items-center lg:h-[70px] gap-x-6 hover:border hover:border2 hover:border-blue-400 hover:rounded-2xl cursor-pointer'>
            <MdOutlineMoreHoriz />
            <p>More</p>
          </div>
          <div className='flex items-center lg:h-[70px] gap-x-6 hover:border hover:border2 hover:border-blue-400 hover:rounded-2xl cursor-pointer'>
            <button className='bg-blue-500 rounded-2xl w-36 h-10'>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBox;
