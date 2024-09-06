import React from 'react';
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import ExCardTrending from '../Explore/ExCardTrending';
import NotCard1 from './NotCard1';


function NotificationRight() {
    const trendingData = [
        { category: 'Trending', title: '#BoyCottBolywoodIndia', tweetsCount: '4,072 posts' },
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

    const followSuggestions = [
        { name: 'Entertainment Tonight', handle: '@etnow' },
        { name: 'PMO India', handle: '@PMOIndia' },
        { name: 'Amdavad Munici..', handle: '@AmdavadAMC' },
    ];

    return (
        <div className=''>
            <div className='w-[350px] '>
                <div className='flex items-center border-2 border-gray-700   bg-gray-700 rounded-full  
                          w-[100%] h-[52.8px]  m-5'>
                    <div className='h-[60px] w-[60px] flex items-center justify-center '>
                        <IoSearch className='  border-r-blue-400 ' />
                    </div>
                    <div>
                        <input type="text" placeholder='Search'
                            className=' bg-transparent focus:outline-none focus:border-transparent' />
                    </div>
                </div>
                <div className=' border-2 border-gray-600  rounded-3xl m-5 w-[100%]'>
                    <div className='flex mt-4  justify-around'>
                        <div className='p-1 '>
                            <h2 className='text-white text-xl font-bold mb-4'>What's Happening</h2>
                            
                                {trendingData.map((trend, index) => (
                                    <NotCard1
                                        key={index}
                                        category={trend.category}
                                        title={trend.title}
                                        tweetsCount={trend.tweetsCount}
                                    />
                                ))}
                            
                        </div>
                    </div>
                </div>

                <div className='bg-black border border-gray-500 rounded-3xl m-[20px] p-4  shadow-md text-white w-[300px]'>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Who to follow</h2>
                </div>

                {followSuggestions.map((user, index) => (
                    <div key={index} className='flex items-center justify-between py-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer'>
                        <div>
                            <p className='font-semibold'>{user.name}</p>
                            <p className='text-gray-400'>{user.handle}</p>
                        </div>
                        <button className='bg-blue-500 text-white px-4 py-1 rounded-full text-sm'>
                            Follow
                        </button>
                    </div>
                ))}

                <div className='text-blue-500 text-sm mt-4'>
                    <Link to="#" className='hover:underline'>Show more</Link>
                </div>



                
            </div>

            </div>
        </div >
    )
}

export default NotificationRight;