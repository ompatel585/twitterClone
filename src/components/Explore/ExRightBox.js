import React from 'react';
import { Link } from 'react-router-dom';

function ExRightBox() {
    const followSuggestions = [
        { name: 'Entertainment Tonight', handle: '@etnow' },
        { name: 'PMO India', handle: '@PMOIndia' },
        { name: 'Amdavad Munici..', handle: '@AmdavadAMC' },
    ];



    return (
        <div className=''>
            <div className='bg-black border border-white rounded-3xl m-[20px] p-4  shadow-md text-white w-[300px]'>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold'>Who to follow</h2>
                </div>

                {followSuggestions.map((user, index) => (
                    <div key={index} className='flex items-center justify-between py-2 hover:bg-gray-800 rounded-lg transition-colors'>
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
            <div className='text-gray-500 text-sm mt-6 px-5'>
                <p>Terms of Service Privacy Policy</p>
                <p>Cookie Policy Accessibility Ads info  More</p>
                <p>© 2024 X Corp.</p>
            </div>
        </div>
    );
}

export default ExRightBox;
