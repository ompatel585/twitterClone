import React from 'react';
import ExMain from './ExMain';
import LeftBox from '../Home/LeftBox';
import ExCardNews from './ExCardNews'
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

function ExNews() {

  const newsData = [
    { category: 'Trending in Politics', trendTitle: 'Chinese Communist Party', postCount: '9,501 posts' },
    { category: 'Trending in Politics', trendTitle: 'Venezuelans', postCount: '30.5K posts' },
    { category: 'Trending in Politics', trendTitle: 'Poltava', postCount: '58.5K posts' },
    { category: 'Trending in Politics', trendTitle: 'Rubbish', postCount: '22.4K posts' },
    { category: 'Trending in Politics', trendTitle: 'Peter Obi', postCount: '38.1K posts' },
    { category: 'Trending in Business & Finance', trendTitle: '#Qatar', postCount: '1,672 posts' },
    { category: 'Trending in Business & Finance', trendTitle: 'XRP Ledger', postCount: '6,539 posts' },
    { category: 'Trending', trendTitle: 'Walked', postCount: '68.4K posts' },
    { category: 'Trending in Business & Finance', trendTitle: 'Dangote', postCount: '54.8K posts' },
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
                <div className='border-b-[5px] border-blue-500  rounded-b-sm   pb-1'>
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
              <div className='p-6'>
                {newsData.map((news, index) => (
                  <ExCardNews
                    key={index}
                    category={news.category}
                    trendTitle={news.trendTitle}
                    postCount={news.postCount}
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

export default ExNews;