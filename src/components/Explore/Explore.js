import React from 'react';
import LeftBox from '../Home/LeftBox';
import ExMain from './ExMain';

function Explore() {
    return (
        <div className='flex h-screen text-white font-normal'>

            <div className="sticky top-0 w-1/4 h-full">
                <LeftBox />
            </div>
            <div className="flex overflow-y-auto  no-scrollbar">
                <ExMain />
            </div>
        </div>
    )
}

export default Explore;