import Image from 'next/image'

//Sidebar is a functional component using the arrow syntax
//this return jsx which is similar to javascript, but using in react to set up UI structure
//flex0
//href=hypertext reference
// components/Sidebar.tsx

import React from 'react';

const RightBar = () => {
  return (

      <div className="flex flex-col pt-30 bg-main min-h screen">
        <div className="mt-50">
        <Image
            src="/right.png"
            alt="Search Icon"
            width={60}
            height={10}
          />
        </div>
        
      </div>
   
  );
};

export default RightBar;
