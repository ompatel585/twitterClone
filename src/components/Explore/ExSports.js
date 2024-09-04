import React from 'react';
import ExMain from './ExMain';
import LeftBox from '../Home/LeftBox';
import ExCardSports from './ExCardSports'
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

function ExSports() {

  const sportsData = [
    { category: 'Trending in Indian Premier League', trendTitle: 'Riyan Parag', postCount: '4,285 posts' },
    { category: 'Trending in Sports', trendTitle: 'Duleep Trophy', postCount: '1,700 posts' },
    { category: 'Trending in Sports', trendTitle: 'Hazard', postCount: '19.8K posts' },
    { category: 'Trending in Sports', trendTitle: 'Nick Nelson', postCount: '1,415 posts' },
    { category: 'Trending', trendTitle: "men's javelin throw f46", postCount: '10.2K posts' },
    { category: 'Trending in Sports', trendTitle: 'Rajasthan Royals', postCount: '2,084 posts' },
    { category: 'Trending in Sports', trendTitle: 'Rabiot', postCount: '35.5K posts' },
    { category: 'Trending', trendTitle: 'Sachin Sarjerao Khilari', postCount: '1,148 posts' },
    { category: 'Trending in UEFA Europa League', trendTitle: 'Cavani', postCount: '3,478 posts' },
    { category: 'Trending in Sports', trendTitle: 'Thierry Henry', postCount: '1,974 posts' },
  ];

  return (
    <div>
      <div className='flex h-screen text-white'>
        <div className="sticky top-0 w-1/4 h-full">
          <LeftBox />
        </div>

        <div className='flex overflow-y-auto  no-scrollbar'>

          <div className='text-white w-[650px]  h-screen'>
            <div className=' border-2 border-gray-500'>
              <div className='flex mt-4 ml-4 justify-around'>
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
                <div>
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
                <div className='border-b-[5px] border-blue-500  rounded-b-sm   pb-1'>
                  <Link to="/explore/sports">
                    <p>Sports</p>
                  </Link>
                </div>
                <Link to="/explore/entertainment">
                  <p>Entertainment</p>
                </Link>
              </div>
              <div className='p-6'>
              {sportsData.map((sports, index) => (
                <ExCardSports
                  key={index}
                  category={sports.category}
                  trendTitle={sports.trendTitle}
                  postCount={sports.postCount}
                />
              ))}
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default ExSports;