import React from 'react';
import ExMain from './ExMain';
import LeftBox from '../Home/LeftBox';
import ExCardTrending from './ExCardTrending'
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";


function ExTrending() {

  const trendingData = [
    { category: 'Trending', title: '#NaariMahaShakti', tweetsCount: '4,072 posts' },
    { category: 'Politics · Trending', title: '#MukeshSharmaAgainstModi', tweetsCount: '6,424 posts' },
    { category: 'Entertainment · Trending', title: '#RebelSaabBdayin50days', tweetsCount: '55.3K posts' },
    { category: 'Technology · Trending', title: '#सत्संग_निमंत्रण', tweetsCount: '265K posts' },
    { category: 'Entertainment · Trending', title: '#NivinPauly', tweetsCount: '2,514 posts' },
    { category: 'Trending', title: 'विशाल भंडारा', tweetsCount: '99.4K posts' },
    { category: 'Trending', title: 'अपर्णा यादव', tweetsCount: '' },
    { category: 'Trending', title: 'मुकेश शर्मा', tweetsCount: '1,562 posts' },
    { category: 'Politics · Trending', title: 'श्री पूनम चंद यादव', tweetsCount: '1,962 posts' },
    { category: 'Trending', title: 'महिला आयोग', tweetsCount: '1,015 posts' },
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
                <div className='border-b-[5px] border-blue-500  rounded-b-sm   pb-1'>
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
              <div className='p-6'>
                <h2 className='text-white text-2xl font-bold mb-4'>Trending</h2>
                {trendingData.map((trend, index) => (
                  <ExCardTrending
                    key={index}
                    category={trend.category}
                    title={trend.title}
                    tweetsCount={trend.tweetsCount}
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

export default ExTrending;