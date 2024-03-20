import Image from 'next/image'

//Sidebar is a functional component using the arrow syntax
//this return jsx which is similar to javascript, but using in react to set up UI structure
//flex0
//href=hypertext reference
// components/Sidebar.tsx

import React from 'react';

const Sidebar = () => {
  return (

      <div className="flex flex-col bg-custom-blue min-h screen">
        <div className="flex mt-5 ml-6 w-[50px]">
        <Image
            src="/drive.jpg"
            alt="Drive Logo"
            width={35}
            height={30}
          />
          <div className="ml-2 text-3xl">Drive</div>
        </div>
        <div className="bg-white  pt-4 pl-5 px-4 border items-center justify-center border-gray-300 rounded-lg h-[60px] w-[100px] mt-5 ml-5 mr-5 ">
                <p className="text-gray-700">+ New</p>
        </div>
        <div className="mt-5 ml-5"></div>
        <Image
            src="/sidebar.png"
            alt="Drive Logo"
            width={250}
            height={20}
          />
          
          
      </div>
   
  );
};

export default Sidebar;
