"use client"

import Image from 'next/image'
import FontSizeAdjuster from './fbutton';

import React, { useState } from 'react';
const DocBar = () => {
    return (
        <div className="flex flex-col pr-20">
            <div className="flex justify-between pl-3 pt-3 ml-1">
                <div className="flex">
                <Image
                    src="/gdocs.png"
                    alt="Search Icon"
                    width={40}
                    height={40}
                />
                <div className="flex flex-col"> 
                    <div className="flex">
                    <p className="mr-3 mt-3 ml-3 text-gray-800 font-semibold text-lg">Pushing (P)ymetrics</p>
                    <Image
                        src="/dbar-icons.png"
                        alt="Icons"
                        width={150}
                        height={30}
                    />
                    </div>
                    <div className="flex mt-1 ml-3">
                    <p className="text-xs mr-5">File</p>
                    <p className="text-xs mr-5">Edit</p>
                    <p className="text-xs mr-5">View</p>
                    <p className="text-xs mr-5">Insert</p>
                    <p className="text-xs mr-6">Format</p>
                    <p className="text-xs mr-6">Tools</p>
                    <p className="text-xs mr-6">Extensions</p>
                    <p className="text-xs mr-5">Help</p>
                    </div>
                </div>
                </div>
                <div className="flex items-center"> 
                <div className="mr-4">
                    <Image
                    src="/dbar.2.png"
                    alt="Other Icon"
                    width={200}
                    height={40}
                    />
                </div>
                <Image
                    src="/share.png"
                    alt="Share Icon"
                    width={200}
                    height={40}
                />
                    </div>
                </div>
                <div className="mt-2 bg-dbar h-[40px] rounded-full mx-4 pl-3 items-center pt-1 flex">

                <Image
                    src="/dbar.3.png"
                    alt="Share Icon"
                    width={200}
                    height={40}
                />
                 <Image
            src="/dbar.4.png"
            alt="Drive Logo"
            width={75}
            height={75}
          />
           <div className="mr-2">
          <Image
            src="/vertline.png"
            alt="Vertical Line"
            width={15}
            height={15}
          />
        </div>
          <p className="ml-1 text-xs mr-6">Heading 2</p>
         <div className="mr-6">
         <Image
            src="/darrow.png"
            alt="Drive Logo"
            width={14}
            height={14}
            />
         </div>
          


         <div className="mr-2">
          <Image
            src="/vertline.png"
            alt="Vertical Line"
            width={15}
            height={15}
          />
        </div>
          <p className="ml-1 text-xs mr-6">Arial</p>
          <div className="mr-2">
         <Image
            src="/darrow.png"
            alt="Drive Logo"
            width={14}
            height={14}
            />
         </div>
          


         <div className="mr-2">
          <Image
            src="/vertline.png"
            alt="Vertical Line"
            width={15}
            height={15}
          />
        </div>
          <FontSizeAdjuster/>

          <div className="mr-2">
          <Image
            src="/vertline.png"
            alt="Vertical Line"
            width={15}
            height={15}
          />
        </div>
          <Image
            src="/font.png"
            alt="Drive Logo"
            width={160}
            height={120}

          />
         <div className="mr-5">
          <Image
            src="/vertline.png"
            alt="Vertical Line"
            width={15}
            height={15}
          />
        </div>
            <Image
            src="/link.png"
            alt="Drive Logo"
            width={140}
            height={120}

          />
         <div className="mr-5">
          <Image
            src="/vertline.png"
            alt="Vertical Line"
            width={15}
            height={15}
          />
        </div>
           <Image
            src="/tdots.2.png"
            alt="Drive Logo"
            width={20}
            height={30}

          />
          <div className="ml-20 mr-7">
          <Image
            src="/pencil.png"
            alt="Drive Logo"
            width={47}
            height={40}

          />
          
          </div>
          
          <div className="mr-2">
          <Image
            src="/vertline.png"
            alt="Vertical Line"
            width={15}
            height={15}
          />
        </div>
           <Image
            src="/uarrow.png"
            alt="Drive Logo"
            width={30}
            height={30}

          />
                </div>
            <div className="ml-40">
            <Image
            src="/ruler.png"
            alt="Drive Logo"
            width={1000}
            height={30}

          />
            </div>
                
            </div>

            
    );
  };
  
      

export default DocBar;
