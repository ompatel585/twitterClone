import React from 'react';
import ExMain from './ExMain';
import LeftBox from '../Home/LeftBox';
import ExCardEntertainment from './ExCardEntertainment';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

function ExEntertainment() {

  const entertainmentData = [
    { category: 'Trending in Entertainment', trendTitle: 'Hawk Tuah', postCount: '11K posts' },
    { category: 'Trending in Entertainment', trendTitle: '#TheGOAT', postCount: 'Trending with #ThalapathyVijay, #TheGreatestOfAllTime' },
    { category: 'Trending in Entertainment', trendTitle: '#JanhviKapoor', postCount: 'Trending with #Daavudi' },
    { category: 'Trending in Music', trendTitle: 'SHINee', postCount: '26.7K posts' },
    { category: 'Trending in Entertainment', trendTitle: '#Joker2', postCount: 'Trending with #JokerFolieADeux' },
    { category: 'Trending in Entertainment', trendTitle: '#AnushkaSharma', postCount: '5,413 posts' },
    { category: 'Trending in K-pop', trendTitle: 'Suho', postCount: '36.4K posts' },
    { category: 'Trending in Music', trendTitle: 'Gose', postCount: '21.5K posts' },
    { category: 'Trending in Entertainment', trendTitle: '#EmergencyMovie', postCount: '5,972 posts' },
    { category: 'Trending in Music', trendTitle: '#FELIX_Unfair', postCount: '1,857 posts' },
    { category: 'Trending in Music', trendTitle: 'hoshi', postCount: '54.5K posts' },
    { category: 'Trending in Fashion & beauty', trendTitle: 'Tom Ford', postCount: '1,726 posts' },
    { category: 'Trending in Entertainment', trendTitle: '#120Bahadur', postCount: 'Trending with #EkSauBeesBahadur' },
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
                <div>
                  <Link to="/explore/sports">
                    <p>Sports</p>
                  </Link>
                </div>
                <div className='border-b-[5px] border-blue-500  rounded-b-sm   pb-1'>
                  <Link to="/explore/entertainment">
                    <p>Entertainment</p>
                  </Link>
                </div>
              </div>
              <div className='p-6'>
              {entertainmentData.map((entertainment, index) => (
                <ExCardEntertainment
                  key={index}
                  category={entertainment.category}
                  trendTitle={entertainment.trendTitle}
                  postCount={entertainment.postCount}
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

export default ExEntertainment;