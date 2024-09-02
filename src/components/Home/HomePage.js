import React from 'react';
import LeftBox from './LeftBox';
import MiddleBox from './MiddleBox';
import RightBox from './RightBox';

function HomePage() {
  return (
    <div className="flex h-screen">
      <div className="sticky top-0 w-1/4 h-full">
        <LeftBox />
      </div>
      <div className="flex overflow-y-auto  no-scrollbar">
        <MiddleBox />
        <RightBox />
      </div>
    </div>
  );
}

export default HomePage;
