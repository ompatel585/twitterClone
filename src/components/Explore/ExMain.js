import React from 'react';

import ExCard from './ExCard';

import { IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";



function ExMain() {
    return (
        <div>
            <div className='text-white w-[650px]  h-screen'>
                <div className=' border-2 border-green-600'>
                    <div className='flex mt-4'>
                        <div className='flex items-center border-2   bg-gray-700 rounded-full  
                          w-[75%] h-[52.8px] '>
                            <div className='h-[52px] w-[50px] flex items-center justify-center '>
                                <IoSearch className='  border-r-blue-400 ' />
                            </div>
                            <div>
                                <input type="text" placeholder='Search'
                                    className=' bg-transparent focus:outline-none focus:border-transparent' />
                            </div>
                        </div>
                        <div>
                            <div className='h-[52px] w-[50px] flex items-center justify-center '>
                                <IoIosSettings />
                            </div>
                        </div>
                    </div>
                    <div className='border-b border-b-gray-500 flex justify-between mt-5 mx-2 p-2'>
                        <div className='border-b-[5px] border-blue-500  rounded-b-sm   pb-1'>
                            <Link to="/explore/foryou">
                                <p>For You</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/explore/trending">
                                <p>Trending</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/explore/news">
                                <p>News</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/explore/sports">
                                <p>Sports</p>
                            </Link>
                        </div>
                        <Link to="/explore/entertainment">
                            <p>Entertainment</p>
                        </Link>
                    </div>
                    <div>
                        <ExCard
                            category="Entertainment"
                            trendTitle="BoycottBollywood"
                            postCount="22.5K"
                        />

                        <ExCard
                            category="News"
                            trendTitle="ClimateChange"
                            postCount="10.2K"
                        />

                        <ExCard
                            category="TrendingIndia"
                            trendTitle="Jailer 2"
                            postCount="6.8K"
                        />

                        <ExCard
                            category="Entertainment"
                            trendTitle="TheGreatestAllTime"
                            postCount="19.1K"
                        />

                        <ExCard
                            category="Politics"
                            trendTitle="Blood"
                            postCount="6.9K"
                        />

                        <ExCard
                            category="Sports"
                            trendTitle="Diaz"
                            postCount="29.1K"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExMain;

